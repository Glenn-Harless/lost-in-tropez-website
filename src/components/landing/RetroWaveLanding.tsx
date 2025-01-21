import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface Point {
  angle: number;
  variance: number;
  wobbleSpeed: number;
  offset: number;
}

// Define the colors object outside the component to be accessible to PaintDrop
const colors = {
  cream: '#F5E6D3',
  azure: '#48ABC9',
  coral: '#FF9671',
  sand: '#D4B483',
  lavender: '#9B6EDC',
  mint: '#9DC9B8'
};

class PaintDrop {
  x: number;
  y: number;
  size: number;
  maxSize: number;
  color: string;
  speedY: number;
  speedX: number;
  age: number;
  maxAge: number;
  rotation: number;
  rotationSpeed: number;
  points: Point[];
  wobble: number;
  time: number;

  constructor(x: number, y: number, isHover: boolean = false) {
    this.x = x;
    this.y = y;
    this.size = isHover ? 25 : Math.random() * 20 + 5;
    this.maxSize = this.size * (isHover ? 8 : 4);
    this.color = Object.values(colors)[Math.floor(Math.random() * Object.values(colors).length)];
    this.speedY = isHover ? (Math.random() * 2 - 1) : -Math.random() * 0.3;
    this.speedX = isHover ? (Math.random() * 2 - 1) : (Math.random() - 0.5) * 0.5;
    this.age = 0;
    this.maxAge = 300;
    this.rotation = Math.random() * Math.PI * 2;
    this.rotationSpeed = (Math.random() - 0.5) * 0.02;
    this.points = this.generateOrganic();
    this.wobble = Math.random() * 0.1;
    this.time = Math.random() * 100;
  }

  generateOrganic(): Point[] {
    const points: Point[] = [];
    const numPoints = 12;
    for (let i = 0; i < numPoints; i++) {
      const angle = (i / numPoints) * Math.PI * 2;
      points.push({
        angle,
        variance: 0.8 + Math.random() * 0.4,
        wobbleSpeed: Math.random() * 0.05,
        offset: Math.random() * Math.PI * 2
      });
    }
    return points;
  }

  update(): void {
    this.age++;
    this.time += 0.03;
    this.size = Math.min(this.size * 1.02, this.maxSize);
    this.x += this.speedX + Math.sin(this.time) * this.wobble;
    this.y += this.speedY;
    this.rotation += this.rotationSpeed;
  }

  draw(ctx: CanvasRenderingContext2D): void {
    const alpha = Math.max(0, 1 - (this.age / this.maxAge));
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);

    ctx.beginPath();
    this.points.forEach((point, i) => {
      const currentVariance = point.variance + 
        Math.sin(this.time * point.wobbleSpeed + point.offset) * 0.2;
      const radius = this.size * currentVariance;
      const x = Math.cos(point.angle) * radius;
      const y = Math.sin(point.angle) * radius;
      
      if (i === 0) ctx.moveTo(x, y);
      else {
        const prevPoint = this.points[(i - 1 + this.points.length) % this.points.length];
        const prevRadius = this.size * prevPoint.variance;
        const prevX = Math.cos(prevPoint.angle) * prevRadius;
        const prevY = Math.sin(prevPoint.angle) * prevRadius;
        
        const cpX = (x + prevX) / 2;
        const cpY = (y + prevY) / 2;
        ctx.quadraticCurveTo(cpX, cpY, x, y);
      }
    });
    ctx.closePath();

    const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, this.size * 1.5);
    gradient.addColorStop(0, `${this.color}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`);
    gradient.addColorStop(0.5, `${this.color}${Math.floor(alpha * 127).toString(16).padStart(2, '0')}`);
    gradient.addColorStop(1, `${this.color}00`);
    
    ctx.fillStyle = gradient;
    ctx.fill();
    ctx.restore();
  }

  isDead(): boolean {
    return this.age >= this.maxAge;
  }
}

export const SurrealistLanding: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let drops: PaintDrop[] = [];

    function animate() {
      if (!canvas || !ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drops.forEach(drop => {
        drop.update();
        drop.draw(ctx);
      });

      drops = drops.filter(drop => !drop.isDead());

      if (Math.random() < 0.03) {
        drops.push(new PaintDrop(
          Math.random() * canvas.width,
          canvas.height + 20
        ));
      }

      requestAnimationFrame(animate);
    }

    animate();
    
    let isMouseDown = false;

    const handleMouseDown = () => {
      isMouseDown = true;
    };

    const handleMouseUp = () => {
      isMouseDown = false;
    };

    const handleMouseLeave = () => {
      isMouseDown = false;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (Math.random() < 0.3 || isMouseDown) {
        drops.push(new PaintDrop(x, y, true));
        if (isMouseDown) {
          for (let i = 0; i < 2; i++) {
            drops.push(new PaintDrop(
              x + (Math.random() - 0.5) * 40,
              y + (Math.random() - 0.5) * 40,
              true
            ));
          }
        }
      }
    };

    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (canvas) {
        canvas.removeEventListener('mousedown', handleMouseDown);
        canvas.removeEventListener('mouseup', handleMouseUp);
        canvas.removeEventListener('mouseleave', handleMouseLeave);
        canvas.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Canvas texture background with overlay */}
      <div className="absolute inset-0" style={{
        backgroundColor: '#f7f6f2',
        backgroundImage: `
          repeating-linear-gradient(
            -45deg,
            rgba(0, 0, 0, 0.06) 0px,
            rgba(0, 0, 0, 0.06) 1px,
            transparent 1px,
            transparent 2px
          ),
          repeating-linear-gradient(
            45deg,
            rgba(0, 0, 0, 0.06) 0px,
            rgba(0, 0, 0, 0.06) 1px,
            transparent 1px,
            transparent 2px
          ),
          repeating-linear-gradient(
            90deg,
            rgba(243, 242, 238, 0.8) 0px,
            rgba(243, 242, 238, 0.8) 1px,
            transparent 1px,
            transparent 3px
          ),
          repeating-linear-gradient(
            0deg,
            rgba(243, 242, 238, 0.8) 0px,
            rgba(243, 242, 238, 0.8) 1px,
            transparent 1px,
            transparent 3px
          )
        `,
        backgroundSize: '4px 4px, 4px 4px, 6px 6px, 6px 6px',
        backgroundPosition: '0 0, 0 0, 1px 1px, 1px 1px'
      }} />

      {/* Animated waves */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`wave-${i}`}
          className="absolute w-full opacity-5"
          style={{
            height: '1px',
            background: `linear-gradient(90deg, 
              transparent 0%, 
              #000 50%, 
              transparent 100%)`,
            top: `${30 + i * 20}%`,
          }}
          animate={{
            x: [-2000, 2000],
            opacity: [0.02, 0.05, 0.02],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Floating orbs */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full backdrop-blur-sm"
          style={{
            width: 100 + i * 50,
            height: 100 + i * 50,
            left: `${20 + i * 25}%`,
            top: '10%',
            background: i === 0 
              ? 'radial-gradient(circle at 30% 30%, #FF6B6B, #4ECDC4)'
              : i === 1
              ? 'radial-gradient(circle at 40% 40%, #FFE66D, #FF6B6B, #4ECDC4)'
              : 'radial-gradient(circle at 50% 50%, #A9E4EF, #81F5FF, #7A89FF)',
            opacity: 0.6,
            mixBlendMode: 'multiply'
          }}
          animate={{
            y: [-20, 20],
            x: [-10, 10],
            scale: [1, 1.1, 1],
            rotate: [0, 180]
          }}
          transition={{
            duration: 6 + i * 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}

      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full cursor-crosshair"
      />
      
      {/* Import Google Fonts */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Marcellus&family=Cormorant+Garamond:ital@1&family=Italiana&family=Tenor+Sans&display=swap');
        `}
      </style>

      <motion.div 
        className="relative z-10 flex flex-col items-center justify-center h-full text-center pointer-events-none"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <h1 className="font-['Marcellus'] text-6xl md:text-8xl tracking-tight mb-4 text-gray-900 leading-tight">
          LOST IN<br/>TROPEZ
        </h1>

        <motion.div 
          className="mt-12 flex space-x-8 pointer-events-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {['LISTEN', 'ABOUT'].map((text) => (
            <motion.button
              key={text}
              className="px-6 py-2 border border-gray-400 text-gray-600 text-lg font-light
                        hover:bg-gray-50 transition-colors"
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              {text}
            </motion.button>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};