// Wet paint on linen. WebGL2, no dependencies.
//
// Colour is stored as optical density, not light, so pigments mix the way paint does:
// paper * exp(-density). Thin paint is a pale wash, pooled paint is rich, and
// blue over orange goes muddy instead of glowing.
//
// Two layers: wet paint moves with a fluid sim and soaks into the dry layer, which
// stays put and fades slowly. Soaking is faster at edges, which gives watercolour rims.

const VERT = `#version 300 es
in vec2 aPos; out vec2 vUv;
void main(){ vUv = aPos * .5 + .5; gl_Position = vec4(aPos, 0., 1.); }`;

const HEAD = `#version 300 es
precision highp float; precision highp sampler2D;
in vec2 vUv; out vec4 o;
float hash(vec2 p){ p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float vnoise(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3. - 2. * f);
  return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y); }
float fbm(vec2 p){ float a = .5, s = 0.; for (int i = 0; i < 4; i++){ s += a * vnoise(p); p = p * 2.03 + 17.; a *= .5; } return s; }
`;

const FS = {
  advectVel: `uniform sampler2D uVel; uniform vec2 uTexel; uniform float uDt, uDamp;
    void main(){ vec2 c = vUv - uDt * texture(uVel, vUv).xy * uTexel; o = uDamp * texture(uVel, c); }`,

  force: `uniform sampler2D uVel; uniform float uTime, uDt, uBreeze, uAspect; uniform vec2 uNudge;
    void main(){
      vec2 p = vUv * vec2(uAspect, 1.) * 1.5 + uTime * .025; float e = .02;
      vec2 curl = vec2(fbm(p + vec2(0, e)) - fbm(p - vec2(0, e)), fbm(p - vec2(e, 0)) - fbm(p + vec2(e, 0))) / (2. * e);
      o = vec4(texture(uVel, vUv).xy + uDt * curl * uBreeze + uNudge, 0., 1.);
    }`,

  curl: `uniform sampler2D uVel; uniform vec2 uTexel;
    void main(){
      float l = texture(uVel, vUv - vec2(uTexel.x, 0)).y, r = texture(uVel, vUv + vec2(uTexel.x, 0)).y;
      float t = texture(uVel, vUv + vec2(0, uTexel.y)).x, b = texture(uVel, vUv - vec2(0, uTexel.y)).x;
      o = vec4(.5 * (r - l - t + b), 0., 0., 1.);
    }`,

  vorticity: `uniform sampler2D uVel, uCurl; uniform vec2 uTexel; uniform float uStrength, uDt;
    void main(){
      float l = texture(uCurl, vUv - vec2(uTexel.x, 0)).x, r = texture(uCurl, vUv + vec2(uTexel.x, 0)).x;
      float t = texture(uCurl, vUv + vec2(0, uTexel.y)).x, b = texture(uCurl, vUv - vec2(0, uTexel.y)).x;
      float c = texture(uCurl, vUv).x;
      vec2 f = .5 * vec2(abs(t) - abs(b), abs(r) - abs(l));
      f /= length(f) + .0001; f *= uStrength * c; f.y *= -1.;
      o = vec4(texture(uVel, vUv).xy + f * uDt, 0., 1.);
    }`,

  divergence: `uniform sampler2D uVel; uniform vec2 uTexel;
    void main(){
      float l = texture(uVel, vUv - vec2(uTexel.x, 0)).x, r = texture(uVel, vUv + vec2(uTexel.x, 0)).x;
      float t = texture(uVel, vUv + vec2(0, uTexel.y)).y, b = texture(uVel, vUv - vec2(0, uTexel.y)).y;
      o = vec4(.5 * (r - l + t - b), 0., 0., 1.);
    }`,

  pressure: `uniform sampler2D uPressure, uDiv; uniform vec2 uTexel;
    void main(){
      float l = texture(uPressure, vUv - vec2(uTexel.x, 0)).x, r = texture(uPressure, vUv + vec2(uTexel.x, 0)).x;
      float t = texture(uPressure, vUv + vec2(0, uTexel.y)).x, b = texture(uPressure, vUv - vec2(0, uTexel.y)).x;
      o = vec4((l + r + b + t - texture(uDiv, vUv).x) * .25, 0., 0., 1.);
    }`,

  gradSub: `uniform sampler2D uPressure, uVel; uniform vec2 uTexel;
    void main(){
      float l = texture(uPressure, vUv - vec2(uTexel.x, 0)).x, r = texture(uPressure, vUv + vec2(uTexel.x, 0)).x;
      float t = texture(uPressure, vUv + vec2(0, uTexel.y)).x, b = texture(uPressure, vUv - vec2(0, uTexel.y)).x;
      o = vec4(texture(uVel, vUv).xy - .5 * vec2(r - l, t - b), 0., 1.);
    }`,

  scale: `uniform sampler2D uTex; uniform float uK; void main(){ o = uK * texture(uTex, vUv); }`,

  // Additive, drawn with blending and a scissor box, so a splat only costs its own area.
  splatVel: `uniform vec2 uPoint, uForce; uniform float uRadius, uAspect, uRadial, uSeed;
    void main(){
      vec2 p = vUv - uPoint; p.x *= uAspect; float r = length(p);
      vec2 dir = p / max(r, 1e-4);
      float g = exp(-r * r / (uRadius * uRadius));
      // Uneven push, so a drop spreads into a shape instead of a growing circle.
      float uneven = .25 + 1.5 * vnoise(dir * 1.7 + uSeed);
      o = vec4(uForce * g + uRadial * uneven * g * dir, 0., 1.);
    }`,

  // Wobbled radius and feathered rim, so blooms never read as circles.
  splatPaint: `uniform vec2 uPoint; uniform vec3 uValue; uniform float uRadius, uAspect, uSeed;
    void main(){
      vec2 p = vUv - uPoint; p.x *= uAspect; float r = length(p); float a = atan(p.y, p.x);
      vec2 dir = vec2(cos(a), sin(a));
      float wob = 1. + (vnoise(dir * 1.8 + uSeed) - .5) * 1.1 + (vnoise(dir * 5. + uSeed * 1.7) - .5) * .4;
      float d = r / (uRadius * wob);
      float g = exp(-d * d * 1.6);
      g *= smoothstep(.02, .3, g + (vnoise(p * 90. + uSeed) - .5) * .3);
      o = vec4(uValue * g, 1.);
    }`,

  advectWet: `uniform sampler2D uVel, uWet; uniform vec2 uTexel, uVelTexel; uniform float uDt, uCreep, uSpread, uAspect;
    void main(){
      vec2 c = vUv - uDt * texture(uVel, vUv).xy * uVelTexel;
      vec2 q = vUv * vec2(uAspect, 1.) * 260.;
      c += (vec2(vnoise(q), vnoise(q + 37.)) - .5) * uTexel * uCreep;
      vec4 s = texture(uWet, c);
      vec4 b = .25 * (texture(uWet, c + vec2(uTexel.x, 0)) + texture(uWet, c - vec2(uTexel.x, 0))
                    + texture(uWet, c + vec2(0, uTexel.y)) + texture(uWet, c - vec2(0, uTexel.y)));
      o = mix(s, b, uSpread);
    }`,

  soak: `uniform sampler2D uWet, uDry; uniform vec2 uTexel; uniform float uRate, uEdge, uDryFade, uWriteDry, uAspect;
    void main(){
      vec3 w = texture(uWet, vUv).rgb;
      vec2 s = uTexel * 3.;
      vec3 dx = texture(uWet, vUv + vec2(s.x, 0)).rgb - texture(uWet, vUv - vec2(s.x, 0)).rgb;
      vec3 dy = texture(uWet, vUv + vec2(0, s.y)).rgb - texture(uWet, vUv - vec2(0, s.y)).rgb;
      float n = vnoise(vUv * vec2(uAspect, 1.) * 320.);
      float rate = clamp(uRate * (.55 + .9 * n + uEdge * min(1., (length(dx) + length(dy)) * 4.)), 0., .08);
      if (uWriteDry > .5) o = vec4(texture(uDry, vUv).rgb * uDryFade + w * rate, 1.);
      else o = vec4(w * (1. - rate), 1.);
    }`,

  // Primed linen, baked once per resize. rgb is the lit cloth, alpha the thread height.
  linen: `uniform vec2 uRes; uniform float uThread; uniform vec3 uPaper;
    float weave(vec2 p){
      vec2 cell = floor(p), f = fract(p) - .5;
      bool warpOver = mod(cell.x + cell.y, 2.) < 1.;
      float warp = cos(f.x * 3.14159) * (.72 + .28 * cos(f.y * 3.14159));
      float weft = cos(f.y * 3.14159) * (.72 + .28 * cos(f.x * 3.14159));
      float wa = .9 + .1 * hash(vec2(cell.x, 3.)) + .10 * (vnoise(vec2(cell.x * 3.1, p.y * .09)) - .5);
      float we = .9 + .1 * hash(vec2(7., cell.y)) + .10 * (vnoise(vec2(p.x * .09, cell.y * 3.1)) - .5);
      return warpOver ? max(warp * wa, weft * we * .62) : max(weft * we, warp * wa * .62);
    }
    void main(){
      vec2 px = vec2(gl_FragCoord.x, uRes.y - gl_FragCoord.y);
      vec2 p = px / uThread;
      float h = weave(p);
      float e = .5;
      vec2 n2 = vec2(weave(p + vec2(e, 0.)) - h, weave(p + vec2(0., e)) - h);
      vec3 n = normalize(vec3(-n2 * 1.15, 1.));
      float light = dot(n, normalize(vec3(-.45, -.55, .7)));
      float mottle = fbm(px / uThread * .018) - .5;
      float slub = vnoise(vec2(p.x * .06, floor(p.y) * 2.3)) * vnoise(vec2(floor(p.x) * 2.7, p.y * .06));
      vec3 col = uPaper * (.885 + .165 * light + .022 * mottle + .012 * slub);
      col = mix(col * vec3(.965, .95, .92), col, smoothstep(.1, .8, h));
      o = vec4(col, h);
    }`,

  composite: `uniform sampler2D uWet, uDry, uLinen; uniform vec2 uTexel; uniform float uGrain, uSheen, uMax;
    void main(){
      vec3 wet = texture(uWet, vUv).rgb;
      vec3 d = wet + texture(uDry, vUv).rgb;
      vec4 cloth = texture(uLinen, vUv);
      // Pigment settles between the threads.
      d *= 1. + uGrain * (.5 - cloth.a) * 2.;
      float m = max(d.r, max(d.g, d.b));
      d *= uMax / (uMax + m);
      vec3 col = cloth.rgb * exp(-d);
      if (uSheen > 0.) {
        float wl = dot(wet, vec3(.33));
        vec2 g = vec2(dot(texture(uWet, vUv + vec2(uTexel.x, 0)).rgb, vec3(.33)) - wl,
                      dot(texture(uWet, vUv + vec2(0, uTexel.y)).rgb, vec3(.33)) - wl);
        vec3 n = normalize(vec3(-g * 26., 1.));
        float s = pow(max(dot(n, normalize(vec3(-.35, .55, .76))), 0.), 42.);
        col += s * uSheen * smoothstep(.0, .35, wl);
      }
      col += (hash(gl_FragCoord.xy * .37) - .5) / 255.;
      o = vec4(col, 1.);
    }`,
};

const hex2rgb = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16) / 255);
// Beer-Lambert: the density that turns paper into this colour at full strength.
const density = (h) => hex2rgb(h).map((c) => -Math.log(Math.min(Math.max(c, 0.05), 0.985)));
const rand = (a, b) => a + Math.random() * (b - a);

export function createPaint(canvas, opts = {}) {
  const gl = canvas.getContext('webgl2', { alpha: false, antialias: false, depth: false, stencil: false, powerPreference: 'high-performance' });
  if (!gl) return null;
  const canFloat = gl.getExtension('EXT_color_buffer_float') || gl.getExtension('EXT_color_buffer_half_float');
  if (!canFloat) return null;
  gl.getExtension('OES_texture_float_linear');

  const small = Math.min(innerWidth, innerHeight) < 600 || (navigator.hardwareConcurrency || 8) <= 4;
  const q = {
    sim: small ? 112 : 160,
    dye: small ? 480 : 720,
    jacobi: small ? 12 : 18,
    dpr: Math.min(devicePixelRatio || 1, small ? 1.75 : 2),
    sheen: small ? 0 : 0.14,
  };
  const still = opts.still ?? matchMedia('(prefers-reduced-motion: reduce)').matches;
  const paper = opts.paper || '#f5efe2';

  function program(fs) {
    const make = (type, src) => {
      const s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(s));
      return s;
    };
    const p = gl.createProgram();
    gl.attachShader(p, make(gl.VERTEX_SHADER, VERT));
    gl.attachShader(p, make(gl.FRAGMENT_SHADER, HEAD + fs));
    gl.bindAttribLocation(p, 0, 'aPos');
    gl.linkProgram(p);
    const u = {};
    const n = gl.getProgramParameter(p, gl.ACTIVE_UNIFORMS);
    for (let i = 0; i < n; i++) { const name = gl.getActiveUniform(p, i).name; u[name] = gl.getUniformLocation(p, name); }
    return { p, u };
  }
  const P = Object.fromEntries(Object.entries(FS).map(([k, v]) => [k, program(v)]));

  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  gl.enableVertexAttribArray(0);
  gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);

  function fbo(w, h, internal, format, type) {
    const tex = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texImage2D(gl.TEXTURE_2D, 0, internal, w, h, 0, format, type, null);
    const f = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, f);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, tex, 0);
    gl.viewport(0, 0, w, h);
    gl.clearColor(0, 0, 0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);
    return { tex, f, w, h, tx: [1 / w, 1 / h] };
  }
  const pair = (w, h, i, fm, t) => {
    let a = fbo(w, h, i, fm, t), b = fbo(w, h, i, fm, t);
    return { get read() { return a; }, get write() { return b; }, swap() { [a, b] = [b, a]; }, w, h, tx: [1 / w, 1 / h] };
  };
  const HF = gl.HALF_FLOAT;
  const size = (base) => {
    const asp = innerWidth / Math.max(innerHeight, 1);
    return asp > 1 ? [Math.round(base * asp), base] : [base, Math.round(base / asp)];
  };

  let vel, prs, div, crl, wet, dry, linen, aspect = 1;

  function allocSim() {
    const [sw, sh] = size(q.sim), [dw, dh] = size(q.dye);
    vel = pair(sw, sh, gl.RG16F, gl.RG, HF);
    prs = pair(sw, sh, gl.R16F, gl.RED, HF);
    div = fbo(sw, sh, gl.R16F, gl.RED, HF);
    crl = fbo(sw, sh, gl.R16F, gl.RED, HF);
    wet = pair(dw, dh, gl.RGBA16F, gl.RGBA, HF);
    dry = pair(dw, dh, gl.RGBA16F, gl.RGBA, HF);
  }

  function bind(unit, tex) { gl.activeTexture(gl.TEXTURE0 + unit); gl.bindTexture(gl.TEXTURE_2D, tex); return unit; }
  function draw(target) {
    if (target) { gl.bindFramebuffer(gl.FRAMEBUFFER, target.f); gl.viewport(0, 0, target.w, target.h); }
    else { gl.bindFramebuffer(gl.FRAMEBUFFER, null); gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight); }
    gl.drawArrays(gl.TRIANGLES, 0, 3);
  }

  function bakeLinen() {
    const w = canvas.width, h = canvas.height;
    if (linen) { gl.deleteTexture(linen.tex); gl.deleteFramebuffer(linen.f); }
    linen = fbo(w, h, gl.RGBA8, gl.RGBA, gl.UNSIGNED_BYTE);
    gl.useProgram(P.linen.p);
    gl.uniform2f(P.linen.u.uRes, w, h);
    gl.uniform1f(P.linen.u.uThread, 2.6 * q.dpr);
    gl.uniform3fv(P.linen.u.uPaper, hex2rgb(paper));
    draw(linen);
  }

  let cssW = 0, cssH = 0;
  function resize() {
    // Sized to the large viewport so a phone's collapsing address bar never reflows the paint.
    const w = canvas.clientWidth || innerWidth, h = canvas.clientHeight || innerHeight;
    if (w === cssW && h === cssH) return;
    cssW = w; cssH = h;
    canvas.width = Math.round(w * q.dpr); canvas.height = Math.round(h * q.dpr);
    aspect = w / h;
    allocSim();
    bakeLinen();
    needsFrame = true;
  }

  let needsFrame = true;
  let pigments = (opts.pigments || ['#7b074c', '#f02f2d', '#f5a127', '#2f86a6']).map(density);
  let strokeColor = 0;
  let breeze = opts.breeze ?? 34;
  let nudge = [0, 0];

  function splatVelocity(x, y, fx, fy, radius, radial = 0, seed = 0) {
    const pad = Math.min(1, radius * 2.6);
    const box = (s) => [
      Math.floor((x - pad / aspect) * s.w), Math.floor((y - pad) * s.h),
      Math.ceil((2 * pad / aspect) * s.w), Math.ceil(2 * pad * s.h),
    ];
    const pr = P.splatVel; gl.useProgram(pr.p);
    gl.uniform2f(pr.u.uPoint, x, y); gl.uniform2f(pr.u.uForce, fx, fy);
    gl.uniform1f(pr.u.uRadius, radius); gl.uniform1f(pr.u.uAspect, aspect); gl.uniform1f(pr.u.uRadial, radial); gl.uniform1f(pr.u.uSeed, seed);
    gl.enable(gl.BLEND); gl.blendFunc(gl.ONE, gl.ONE); gl.enable(gl.SCISSOR_TEST);
    gl.scissor(...box(vel));
    draw(vel.read);
    gl.disable(gl.SCISSOR_TEST); gl.disable(gl.BLEND);
  }

  function splatPigment(x, y, value, radius) {
    const pad = Math.min(1, radius * 3.2);
    const pr = P.splatPaint; gl.useProgram(pr.p);
    gl.uniform2f(pr.u.uPoint, x, y); gl.uniform3fv(pr.u.uValue, value);
    gl.uniform1f(pr.u.uRadius, radius); gl.uniform1f(pr.u.uAspect, aspect); gl.uniform1f(pr.u.uSeed, Math.random() * 100);
    gl.enable(gl.BLEND); gl.blendFunc(gl.ONE, gl.ONE); gl.enable(gl.SCISSOR_TEST);
    gl.scissor(Math.floor((x - pad / aspect) * wet.w), Math.floor((y - pad) * wet.h), Math.ceil((2 * pad / aspect) * wet.w), Math.ceil(2 * pad * wet.h));
    draw(wet.read);
    gl.disable(gl.SCISSOR_TEST); gl.disable(gl.BLEND);
  }

  // A drop that keeps pushing outward for a moment, so it spreads rather than just appears.
  const blooms = [];
  function bloomUV(x, y, { color, size: s = 0.1, amount = 0.6, life = 0.7, drift = [0, 0] } = {}) {
    const d = color ? (typeof color === 'string' ? density(color) : color) : pigments[Math.floor(Math.random() * pigments.length)];
    splatPigment(x, y, d.map((v) => v * amount), s);
    blooms.push({ x, y, s, t: 0, life, drift, seed: Math.random() * 100, push: rand(90, 150) * (s / 0.1) ** 0.5 });
    needsFrame = true;
  }

  function step(dt, time) {
    gl.disable(gl.BLEND);

    let pr = P.force; gl.useProgram(pr.p);
    gl.uniform1i(pr.u.uVel, bind(0, vel.read.tex));
    gl.uniform1f(pr.u.uTime, time); gl.uniform1f(pr.u.uDt, dt); gl.uniform1f(pr.u.uBreeze, breeze);
    gl.uniform1f(pr.u.uAspect, aspect); gl.uniform2f(pr.u.uNudge, nudge[0], nudge[1]);
    draw(vel.write); vel.swap();
    nudge = [0, 0];

    pr = P.curl; gl.useProgram(pr.p);
    gl.uniform1i(pr.u.uVel, bind(0, vel.read.tex)); gl.uniform2fv(pr.u.uTexel, vel.tx);
    draw(crl);

    pr = P.vorticity; gl.useProgram(pr.p);
    gl.uniform1i(pr.u.uVel, bind(0, vel.read.tex)); gl.uniform1i(pr.u.uCurl, bind(1, crl.tex));
    gl.uniform2fv(pr.u.uTexel, vel.tx); gl.uniform1f(pr.u.uStrength, 7); gl.uniform1f(pr.u.uDt, dt);
    draw(vel.write); vel.swap();

    pr = P.divergence; gl.useProgram(pr.p);
    gl.uniform1i(pr.u.uVel, bind(0, vel.read.tex)); gl.uniform2fv(pr.u.uTexel, vel.tx);
    draw(div);

    pr = P.scale; gl.useProgram(pr.p);
    gl.uniform1i(pr.u.uTex, bind(0, prs.read.tex)); gl.uniform1f(pr.u.uK, 0.8);
    draw(prs.write); prs.swap();

    pr = P.pressure; gl.useProgram(pr.p);
    gl.uniform2fv(pr.u.uTexel, vel.tx); gl.uniform1i(pr.u.uDiv, bind(1, div.tex));
    for (let i = 0; i < q.jacobi; i++) {
      gl.uniform1i(pr.u.uPressure, bind(0, prs.read.tex));
      draw(prs.write); prs.swap();
    }

    pr = P.gradSub; gl.useProgram(pr.p);
    gl.uniform1i(pr.u.uPressure, bind(0, prs.read.tex)); gl.uniform1i(pr.u.uVel, bind(1, vel.read.tex));
    gl.uniform2fv(pr.u.uTexel, vel.tx);
    draw(vel.write); vel.swap();

    pr = P.advectVel; gl.useProgram(pr.p);
    gl.uniform1i(pr.u.uVel, bind(0, vel.read.tex)); gl.uniform2fv(pr.u.uTexel, vel.tx);
    gl.uniform1f(pr.u.uDt, dt); gl.uniform1f(pr.u.uDamp, Math.pow(0.975, dt * 60));
    draw(vel.write); vel.swap();

    // After projection, so the outward push survives and paint actually spreads.
    for (let i = blooms.length - 1; i >= 0; i--) {
      const b = blooms[i]; b.t += dt;
      const k = Math.max(0, 1 - b.t / b.life);
      splatVelocity(b.x, b.y, b.drift[0] * k, b.drift[1] * k, b.s * (1 + b.t), b.push * k * dt * 60 * 0.036, b.seed);
      if (b.t >= b.life) blooms.splice(i, 1);
    }

    pr = P.advectWet; gl.useProgram(pr.p);
    gl.uniform1i(pr.u.uVel, bind(0, vel.read.tex)); gl.uniform1i(pr.u.uWet, bind(1, wet.read.tex));
    gl.uniform2fv(pr.u.uTexel, wet.tx); gl.uniform2fv(pr.u.uVelTexel, vel.tx);
    gl.uniform1f(pr.u.uDt, dt); gl.uniform1f(pr.u.uCreep, 0.85); gl.uniform1f(pr.u.uSpread, 0.1); gl.uniform1f(pr.u.uAspect, aspect);
    draw(wet.write); wet.swap();

    pr = P.soak; gl.useProgram(pr.p);
    gl.uniform1i(pr.u.uWet, bind(0, wet.read.tex)); gl.uniform1i(pr.u.uDry, bind(1, dry.read.tex));
    gl.uniform2fv(pr.u.uTexel, wet.tx); gl.uniform1f(pr.u.uAspect, aspect);
    gl.uniform1f(pr.u.uRate, 0.0052 * dt * 60); gl.uniform1f(pr.u.uEdge, 1.1);
    gl.uniform1f(pr.u.uDryFade, Math.pow(0.99945, dt * 60));
    gl.uniform1f(pr.u.uWriteDry, 1);
    draw(dry.write); dry.swap();
    gl.uniform1f(pr.u.uWriteDry, 0);
    draw(wet.write); wet.swap();
  }

  function render() {
    const pr = P.composite; gl.useProgram(pr.p);
    gl.uniform1i(pr.u.uWet, bind(0, wet.read.tex)); gl.uniform1i(pr.u.uDry, bind(1, dry.read.tex));
    gl.uniform1i(pr.u.uLinen, bind(2, linen.tex)); gl.uniform2fv(pr.u.uTexel, wet.tx);
    gl.uniform1f(pr.u.uGrain, 0.55); gl.uniform1f(pr.u.uSheen, q.sheen); gl.uniform1f(pr.u.uMax, 2.6);
    draw(null);
  }

  // --- input, in CSS pixels ---
  const toUV = (x, y) => [x / cssW, 1 - y / cssH];
  let lastActive = performance.now();
  const wake = () => { lastActive = performance.now(); };
  let ptr = null;
  let strokeUntil = 0;
  function strokeTo(x, y, heavy) {
    wake();
    const now = performance.now();
    if (now > strokeUntil) { strokeColor = (strokeColor + 1) % pigments.length; }
    strokeUntil = now + 900;
    if (!ptr) { ptr = { x, y }; return; }
    const dx = x - ptr.x, dy = y - ptr.y;
    const dist = Math.hypot(dx, dy);
    if (dist < 1.5) return;
    const steps = Math.min(4, Math.ceil(dist / 36));
    const col = pigments[strokeColor];
    const amt = (heavy ? 0.11 : 0.05) * Math.min(1.6, 0.5 + dist / 60);
    const rad = small ? 0.05 : 0.038;
    for (let i = 1; i <= steps; i++) {
      const [u, v] = toUV(ptr.x + (dx * i) / steps, ptr.y + (dy * i) / steps);
      splatPigment(u, v, col.map((c) => (c * amt) / steps), rad * (heavy ? 1.5 : 1));
      splatVelocity(u, v, (dx / steps) * 3.4, (-dy / steps) * 3.4, 0.05);
    }
    ptr = { x, y };
    needsFrame = true;
  }

  const listeners = [];
  const on = (t, e, f, o) => { t.addEventListener(e, f, o); listeners.push(() => t.removeEventListener(e, f, o)); };
  let down = false;
  if (!still) {
    on(window, 'pointermove', (e) => { if (e.pointerType !== 'touch') strokeTo(e.clientX, e.clientY, down); }, { passive: true });
    on(window, 'pointerdown', (e) => {
      down = true; ptr = { x: e.clientX, y: e.clientY }; wake();
      const [u, v] = toUV(e.clientX, e.clientY);
      // A tap drops paint, which is the whole interaction on a phone.
      bloomUV(u, v, { color: pigments[(strokeColor = (strokeColor + 1) % pigments.length)], size: small ? 0.085 : 0.07, amount: 0.62 });
    }, { passive: true });
    on(window, 'pointerup', () => { down = false; ptr = null; }, { passive: true });
    on(window, 'pointerleave', () => { ptr = null; }, { passive: true });
    on(window, 'touchmove', (e) => { const t = e.touches[0]; if (t) strokeTo(t.clientX, t.clientY, false); }, { passive: true });
    on(window, 'touchend', () => { ptr = null; }, { passive: true });
    let lastY = scrollY;
    // Scrolling drags whatever is still wet, a little.
    on(window, 'scroll', () => { wake(); const d = scrollY - lastY; lastY = scrollY; nudge[1] += Math.max(-26, Math.min(26, d * 0.55)); needsFrame = true; }, { passive: true });
  }
  on(window, 'resize', resize);

  // --- loop ---
  let raf = 0, last = 0, time = 0, nextAmbient = 1.2, ambient = opts.ambient ?? 1, slow = 0, stopped = false, tick = 0;
  function frame(ms) {
    raf = requestAnimationFrame(frame);
    // Nobody's touching it and nothing's playing: half the frame rate saves a phone's battery.
    if (ms - lastActive > 20000 && (tick++ & 1)) return;
    const dt = Math.min((ms - last) / 1000 || 0.016, 1 / 30);
    last = ms; time += dt;

    // Rising drops from below, same idea as the original canvas.
    if (ambient > 0 && time > nextAmbient) {
      nextAmbient = time + rand(2.2, 4.2) / ambient;
      bloomUV(rand(0.04, 0.96), rand(-0.03, 0.1), { size: rand(0.03, 0.06), amount: rand(0.22, 0.42), life: 1.6, drift: [rand(-14, 14), rand(30, 60)] });
    }
    step(dt, time);
    render();

    // Step quality down once if this device can't keep up.
    slow = dt > 1 / 40 ? slow + 1 : Math.max(0, slow - 1);
    if (slow > 90 && (q.dpr > 1 || q.sheen > 0)) {
      slow = 0; q.sheen = 0; q.dpr = Math.max(1, q.dpr - 0.5); cssW = 0; resize();
    }
  }

  function start() {
    if (stopped || raf) return;
    last = performance.now();
    raf = requestAnimationFrame(frame);
  }
  function stop() { cancelAnimationFrame(raf); raf = 0; }

  on(document, 'visibilitychange', () => { if (document.hidden) stop(); else if (!still) start(); });
  on(canvas, 'webglcontextlost', (e) => { e.preventDefault(); stop(); stopped = true; canvas.style.display = 'none'; });

  resize();
  if (!still) start();

  return {
    quality: q,
    still,
    bloom(x, y, o) { const [u, v] = toUV(x, y); bloomUV(u, v, o); },
    bloomUV,
    setPigments(list) { pigments = list.map(density); strokeColor = 0; },
    setBreeze(b) { breeze = b; wake(); },
    setAmbient(a) { ambient = a; },
    // Paint seeping out from behind a rectangle, e.g. a cover image.
    bleed(rect, list, { amount = 0.5, count = 7, size: s = 0.06 } = {}) {
      wake();
      const cols = (list || []).length ? list.map(density) : pigments;
      for (let i = 0; i < count; i++) {
        const side = Math.floor(rand(0, 4));
        const t = Math.random();
        const x = side < 2 ? rect.left + rect.width * t : side === 2 ? rect.left - rand(0, 10) : rect.right + rand(0, 10);
        const y = side === 0 ? rect.top - rand(0, 10) : side === 1 ? rect.bottom + rand(0, 10) : rect.top + rect.height * t;
        const [u, v] = toUV(x, y);
        const out = side === 0 ? [0, 1] : side === 1 ? [0, -1] : side === 2 ? [-1, 0] : [1, 0];
        bloomUV(u, v, { color: cols[i % cols.length], size: s * rand(0.7, 1.3), amount: amount * rand(0.7, 1.2), life: 1.1, drift: [out[0] * 50, out[1] * 50] });
      }
    },
    // Run the sim without showing it. Reduced-motion visitors get one finished painting.
    settle(seconds = 2.5) {
      const steps = Math.round(seconds * 60);
      for (let i = 0; i < steps; i++) { time += 1 / 60; step(1 / 60, time); }
      render();
    },
    render,
    start, stop,
    destroy() { stop(); listeners.forEach((f) => f()); },
  };
}

// Kick detection on the playing track. onKick(strength 0..1) fires on low-end hits.
export function attachReactor(audio, onKick, onLevel) {
  let ctx, an, data, raf = 0, avg = 0, lastHit = 0, prev = 0;
  const init = () => {
    const AC = window.AudioContext || window.webkitAudioContext;
    ctx = new AC();
    an = ctx.createAnalyser();
    an.fftSize = 512;
    an.smoothingTimeConstant = 0.12;
    ctx.createMediaElementSource(audio).connect(an);
    an.connect(ctx.destination);
    data = new Uint8Array(an.frequencyBinCount);
  };
  const tick = () => {
    raf = requestAnimationFrame(tick);
    an.getByteFrequencyData(data);
    const bins = Math.max(2, Math.round(160 / (ctx.sampleRate / an.fftSize)));
    let bass = 0; for (let i = 0; i < bins; i++) bass += data[i];
    bass /= bins * 255;
    let mid = 0; for (let i = bins; i < 60; i++) mid += data[i];
    mid /= (60 - bins) * 255;
    // A hit is a sharp rise in the low end. Mastered tracks sit near full scale, so level alone won't do.
    avg += (bass - avg) * 0.08;
    const rise = bass - prev;
    prev = bass;
    const now = performance.now();
    if (rise > 0.05 && bass > avg && bass > 0.25 && now - lastHit > 230) {
      lastHit = now;
      onKick && onKick(Math.min(1, rise * 7));
    }
    onLevel && onLevel(bass, mid);
  };
  return {
    // Must be called from the tap that starts playback, or mobile browsers keep the context silent.
    start() { if (!ctx) init(); ctx.resume(); cancelAnimationFrame(raf); tick(); },
    stop() { cancelAnimationFrame(raf); raf = 0; },
  };
}
