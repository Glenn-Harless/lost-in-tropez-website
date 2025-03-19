import { useState, useRef, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';

// Platform interface
interface Platform {
  name: string;
  url: string;
  mainColor: string;
  secondaryColor: string;
  accentColor: string;
  pathId: string;
  nodePosition: { x: number, y: number }
}

// Main component
const StreamingLinks = () => {
  const [activeStroke, setActiveStroke] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);
  
  // Define platforms with richer color schemes and path associations
  const platforms: Platform[] = [
    {
      name: 'Spotify',
      url: 'https://open.spotify.com/artist/096eAkqw7ujpqZSDcELHlE',
      mainColor: '#1DB954',
      secondaryColor: '#1ED760',
      accentColor: '#B3F0CA',
      pathId: 'face-outline',
      nodePosition: { x: 240, y: 200 }
    },
    {
      name: 'Soundcloud',
      url: 'https://soundcloud.com/lost-in-tropez',
      mainColor: '#FF7700',
      secondaryColor: '#FF8800',
      accentColor: '#FFD1A9',
      pathId: 'hair-line',
      nodePosition: { x: 95, y: 210 }
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/channel/UC8117gg7ZoJ9lXtXPW2xcxQ',
      mainColor: '#FF0000',
      secondaryColor: '#FF3D3D',
      accentColor: '#FFCFCF',
      pathId: 'shoulder-line',
      nodePosition: { x: 260, y: 420 }
    },
    {
      name: 'Bandcamp',
      url: 'https://lost-in-tropez.bandcamp.com',
      mainColor: '#629aa9',
      secondaryColor: '#4FA8BB',
      accentColor: '#C5E0E6',
      pathId: 'ear-detail',
      nodePosition: { x: 300, y: 180 }
    }
  ];

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      
      controls.start({ 
        x: x * 20, 
        y: y * 20,
        transition: { type: 'spring', stiffness: 100, damping: 30 }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [controls]);

  // Initialize visibility for animation sequencing
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  // Animation variants
  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (custom: number) => ({ 
      pathLength: 1, 
      opacity: 1,
      transition: { 
        pathLength: { type: "spring", duration: 2.5, bounce: 0, delay: custom * 0.2 },
        opacity: { duration: 0.8, delay: custom * 0.2 }
      }
    }),
    highlighted: {
      filter: "drop-shadow(0 0 6px rgba(255, 255, 255, 0.7))",
      strokeWidth: 2.5,
      transition: { duration: 0.3 }
    }
  };
  
  const nodeVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (custom: number) => ({ 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 20,
        delay: custom * 0.2 + 0.6
      }
    }),
    highlighted: {
      scale: 1.2,
      filter: "drop-shadow(0 0 10px rgba(255, 255, 255, 0.8))",
      transition: { type: "spring", stiffness: 500, damping: 15 }
    }
  };

  return (
    <div className="py-10 relative overflow-hidden" ref={containerRef}>
      {/* Background decorative elements - matching LatestRelease style */}
      <div className="absolute inset-0 grid-background opacity-20"></div>
      
      <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-2 font-['Tenor_Sans']">Join Us</h4>

      {/* Floating blobs - matching LatestRelease style */}
      <motion.div 
        className="absolute top-20 left-10 w-40 h-40 rounded-full bg-skyBlue opacity-10"
        animate={{
          x: [0, 10, 0],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div 
        className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-purple opacity-10"
        animate={{
          x: [0, -15, 0],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      {/* Main content container */}
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        {/* Content container */}
        <div className="relative">
          {/* Illustration container */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-2xl h-[500px] md:h-[600px]">
              {/* SVG illustration */}
              <svg 
                width="100%" 
                height="100%" 
                viewBox="0 0 500 600" 
                style={{ overflow: 'visible' }}
                className="absolute inset-0"
              >
                {/* Face outline */}
                <motion.path
                  id="face-outline"
                  d="M170,130 C180,90 240,80 280,110 C320,140 340,190 335,240 C330,290 310,330 280,360 C250,390 210,395 180,380 C150,365 135,330 140,290 C145,250 160,170 170,130 Z"
                  stroke={platforms[0].secondaryColor}
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  custom={0}
                  initial="hidden"
                  animate={isVisible ? (activeStroke === "face-outline" ? "highlighted" : "visible") : "hidden"}
                  variants={lineVariants}
                  onMouseEnter={() => setActiveStroke("face-outline")}
                  onMouseLeave={() => setActiveStroke(null)}
                  className="cursor-pointer"
                />
                
                {/* Hair lines */}
                <motion.path
                  id="hair-line"
                  d="M170,130 C160,110 140,100 110,105 C90,110 80,130 85,150 C90,170 100,190 90,220 C80,250 60,260 50,280 C30,320 40,340 60,350 C80,360 110,350 130,325"
                  stroke={platforms[1].secondaryColor}
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  custom={1}
                  initial="hidden"
                  animate={isVisible ? (activeStroke === "hair-line" ? "highlighted" : "visible") : "hidden"}
                  variants={lineVariants}
                  onMouseEnter={() => setActiveStroke("hair-line")}
                  onMouseLeave={() => setActiveStroke(null)}
                  className="cursor-pointer"
                />
                
                {/* Shoulder line */}
                <motion.path
                  id="shoulder-line"
                  d="M140,400 C170,440 210,460 260,450 C310,440 350,410 370,380"
                  stroke={platforms[2].secondaryColor}
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  custom={2}
                  initial="hidden"
                  animate={isVisible ? (activeStroke === "shoulder-line" ? "highlighted" : "visible") : "hidden"}
                  variants={lineVariants}
                  onMouseEnter={() => setActiveStroke("shoulder-line")}
                  onMouseLeave={() => setActiveStroke(null)}
                  className="cursor-pointer"
                />
                
                {/* Ear detail */}
                <motion.path
                  id="ear-detail"
                  d="M310,200 C320,190 325,180 320,170 C315,160 305,160 295,165 C285,170 280,180 285,190"
                  stroke={platforms[3].secondaryColor}
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  custom={3}
                  initial="hidden"
                  animate={isVisible ? (activeStroke === "ear-detail" ? "highlighted" : "visible") : "hidden"}
                  variants={lineVariants}
                  onMouseEnter={() => setActiveStroke("ear-detail")}
                  onMouseLeave={() => setActiveStroke(null)}
                  className="cursor-pointer"
                />
                
                {/* Additional detail lines */}
                <motion.path
                  d="M210,200 C220,195 230,195 240,200"
                  stroke="#8396b0"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  custom={4}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={lineVariants}
                />
                
                <motion.path
                  d="M265,195 C275,190 285,190 295,195"
                  stroke="#8396b0"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  custom={5}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={lineVariants}
                />
                
                <motion.path
                  d="M250,220 C255,235 255,250 250,265"
                  stroke="#8396b0"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  custom={6}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={lineVariants}
                />
                
                {/* Lips - highlight with a vibrant color */}
                <motion.path
                  d="M220,290 C235,300 265,300 280,290"
                  stroke="#FF6B6B"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  custom={7}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={lineVariants}
                />
                
                {/* Small details */}
                <motion.path
                  d="M225,185 C225,180 223,177 220,177"
                  stroke="#8396b0"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  custom={8}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={lineVariants}
                />
                
                <motion.path
                  d="M280,183 C280,178 282,175 285,175"
                  stroke="#8396b0"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  custom={9}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={lineVariants}
                />
                
                {/* Platform nodes */}
                {platforms.map((platform, index) => {
                  const pathId = platform.pathId;
                  const position = platform.nodePosition;
                  
                  return (
                    <motion.g
                      key={platform.name}
                      custom={index + 4}
                      initial="hidden"
                      animate={isVisible ? 
                        (activeStroke === pathId ? "highlighted" : "visible") : "hidden"}
                      variants={nodeVariants}
                      className="cursor-pointer"
                      onClick={() => window.open(platform.url, '_blank')}
                    >
                      {/* Platform node background with glow effect */}
                      <defs>
                        <radialGradient id={`grad-${platform.name}`} cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                          <stop offset="0%" stopColor={platform.accentColor} stopOpacity="0.8" />
                          <stop offset="100%" stopColor={platform.mainColor} stopOpacity="0.2" />
                        </radialGradient>
                      </defs>
                      
                      {/* Glowing background circle */}
                      <circle 
                        cx={position.x} 
                        cy={position.y} 
                        r="28" 
                        fill={`url(#grad-${platform.name})`} 
                        opacity="0.7"
                      />
                      
                      {/* Platform node foreground */}
                      <circle 
                        cx={position.x} 
                        cy={position.y} 
                        r="22" 
                        fill="white" 
                        className="drop-shadow-sm"
                      />
                      
                      {/* Platform node border */}
                      <circle 
                        cx={position.x} 
                        cy={position.y} 
                        r="20" 
                        fill="white" 
                        stroke={activeStroke === pathId ? platform.mainColor : platform.secondaryColor}
                        strokeWidth="1.5"
                      />
                      
                      {/* Platform name */}
                      <text 
                        x={position.x} 
                        y={position.y + 5}
                        textAnchor="middle" 
                        fontFamily="'Tenor Sans', sans-serif" 
                        fontSize="10" 
                        fill={activeStroke === pathId ? platform.mainColor : "#6c94db"}
                        className="uppercase"
                      >
                        {platform.name}
                      </text>
                      
                      {/* Ripple effect */}
                      <AnimatePresence>
                        {activeStroke === pathId && (
                          <motion.circle
                            cx={position.x}
                            cy={position.y}
                            r="20"
                            fill="none"
                            stroke={platform.secondaryColor}
                            strokeWidth="1.5"
                            initial={{ scale: 1, opacity: 1 }}
                            animate={{ scale: 1.8, opacity: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1, repeat: Infinity }}
                          />
                        )}
                      </AnimatePresence>
                    </motion.g>
                  );
                })}
                
                {/* Clothing accent */}
                <motion.path
                  d="M195,450 C200,470 210,500 230,520 C245,535 260,540 270,530"
                  stroke="#9B6EDC"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  custom={10}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={lineVariants}
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StreamingLinks;