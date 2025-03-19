import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  
  // Tracks using local audio files (place MP3s in your public folder)
  const tracks = [
    {
      title: "Lag",
      file: "/audio/lag_final.mp3", // Path relative to public folder
      duration: "3:45",
      coverArt: "/images/release_junak.png" // Optional
    },
    {
      title: "Pero Te Dije",
      file: "/audio/perotedije.mp3",
      duration: "3:25",
      coverArt: "/images/release_junak.png" // Optional
    },
    {
      title: "Junak",
      file: "/audio/junak.mp3",
      duration: "3:12",
      coverArt: "/images/release_junak.png" // Optional
    }
  ];

  // Initialize visibility for animation sequencing
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  // Update progress bar during playback
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      if (!isDragging) { // Only update progress if not dragging
        const currentProgress = (audio.currentTime / audio.duration) * 100;
        setProgress(isNaN(currentProgress) ? 0 : currentProgress);
      }
    };

    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('play', () => setIsPlaying(true));
    audio.addEventListener('pause', () => setIsPlaying(false));
    audio.addEventListener('ended', handleNextTrack);

    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
      audio.removeEventListener('play', () => setIsPlaying(true));
      audio.removeEventListener('pause', () => setIsPlaying(false));
      audio.removeEventListener('ended', handleNextTrack);
    };
  }, [currentTrack, isDragging]);

  // Handle track change
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    
    // Load the new track
    audio.load();
    if (isPlaying) {
      const playPromise = audio.play();
      
      // Handle autoplay restrictions
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log("Autoplay prevented:", error);
          setIsPlaying(false);
        });
      }
    }
  }, [currentTrack]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(error => {
        console.log("Play prevented:", error);
      });
    }
  };

  const handlePrevTrack = () => {
    setCurrentTrack(prev => (prev - 1 + tracks.length) % tracks.length);
  };

  const handleNextTrack = () => {
    setCurrentTrack(prev => (prev + 1) % tracks.length);
  };

  const changeTrack = (index: number) => {
    setCurrentTrack(index);
  };

  // Progress bar scrubbing functionality
  const calculateProgress = (clientX: number) => {
    const progressBar = progressBarRef.current;
    if (!progressBar) return 0;
    
    const rect = progressBar.getBoundingClientRect();
    const position = clientX - rect.left;
    const percentage = (position / rect.width) * 100;
    return Math.max(0, Math.min(100, percentage));
  };

  const updateAudioPosition = (percentage: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    
    const time = (percentage / 100) * audio.duration;
    if (!isNaN(time)) {
      audio.currentTime = time;
    }
  };

  const handleProgressBarClick = (e: React.MouseEvent) => {
    const newProgress = calculateProgress(e.clientX);
    setProgress(newProgress);
    updateAudioPosition(newProgress);
  };

  const handleDragStart = () => {
    setIsDragging(true);
  };

  // Add mouse move and mouse up listeners to window for smooth dragging
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const newProgress = calculateProgress(e.clientX);
        setProgress(newProgress);
      }
    };

    const handleMouseUp = () => {
      if (isDragging) {
        updateAudioPosition(progress);
        setIsDragging(false);
      }
    };

    // Add touch event handlers for mobile
    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging && e.touches.length > 0) {
        const newProgress = calculateProgress(e.touches[0].clientX);
        setProgress(newProgress);
      }
    };

    const handleTouchEnd = () => {
      if (isDragging) {
        updateAudioPosition(progress);
        setIsDragging(false);
      }
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging, progress]);

  // Visualizer animation variants
  const barVariants = {
    playing: (i: number) => ({
      height: [5, 15 + Math.random() * 20, 5],
      transition: {
        repeat: Infinity,
        duration: 0.8 + Math.random() * 0.5,
        delay: i * 0.1,
      },
    }),
    paused: {
      height: 5,
    },
  };

  // Animation variants for SVG paths
  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (custom: number) => ({ 
      pathLength: 1, 
      opacity: 1,
      transition: { 
        pathLength: { type: "spring", duration: 2, bounce: 0, delay: custom * 0.2 },
        opacity: { duration: 0.6, delay: custom * 0.2 }
      }
    }),
    highlighted: {
      filter: "drop-shadow(0 0 5px rgba(255, 255, 255, 0.7))",
      strokeWidth: 3,
      transition: { duration: 0.3 }
    }
  };

  // Animation variants for record rotation
  const recordVariants = {
    paused: { 
      rotate: 0
    },
    playing: { 
      rotate: 360,
      transition: {
        duration: 3,
        ease: "linear",
        repeat: Infinity
      }
    }
  };

  return (
    <div className="py-10 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 grid-background opacity-20"></div>
      
      {/* Floating blobs */}
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
      
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Left side: Album art with decorative SVG art */}
          <div className="md:w-2/5 relative">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* SVG art container */}
              <svg 
                width="100%" 
                height="100%" 
                viewBox="0 0 300 300" 
                style={{ overflow: 'visible' }}
                className="absolute inset-0"
              >
                {/* Decorative circle frame */}
                <motion.circle
                  cx="150"
                  cy="150"
                  r="130"
                  fill="none"
                  stroke="#6c94db"
                  strokeWidth="1"
                  custom={0}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={lineVariants}
                />
                
                <motion.circle
                  cx="150"
                  cy="150"
                  r="140"
                  fill="none"
                  stroke="#6c94db"
                  strokeWidth="0.5"
                  custom={0.2}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={lineVariants}
                />
                
                {/* Rotating record outer circle */}
                <motion.g
                  variants={recordVariants}
                  animate={isPlaying ? "playing" : "paused"}
                  style={{ originX: "150px", originY: "150px" }}
                >
                  <motion.circle
                    cx="150"
                    cy="150"
                    r="120"
                    fill="none"
                    stroke="#6c94db"
                    strokeWidth="1"
                    custom={0.5}
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                    variants={lineVariants}
                  />
                  
                  {/* Record grooves */}
                  {[...Array(8)].map((_, i) => (
                    <motion.circle
                      key={`groove-${i}`}
                      cx="150"
                      cy="150"
                      r={110 - i * 12}
                      fill="none"
                      stroke="#6c94db"
                      strokeWidth="0.5"
                      strokeDasharray={Math.random() < 0.5 ? "3 1" : "1 2"}
                      custom={0.8 + i * 0.1}
                      initial="hidden"
                      animate={isVisible ? "visible" : "hidden"}
                      variants={lineVariants}
                    />
                  ))}
                  
                  {/* Center hole */}
                  <motion.circle
                    cx="150"
                    cy="150"
                    r="8"
                    fill="none"
                    stroke="#6c94db"
                    strokeWidth="1"
                    custom={1.5}
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                    variants={lineVariants}
                  />
                </motion.g>
                
                {/* Decorative elements */}
                <motion.path
                  d="M30,150 C30,70 70,30 150,30"
                  stroke="#FF6B6B"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  custom={2}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={lineVariants}
                />
                
                <motion.path
                  d="M270,150 C270,230 230,270 150,270"
                  stroke="#FF6B6B"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  custom={2.2}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={lineVariants}
                />
                
                {/* Album cover mask */}
                <clipPath id="albumCoverClip">
                  <circle cx="150" cy="150" r="110" />
                </clipPath>
              </svg>
              
              {/* Cover art inside */}
              {tracks[currentTrack].coverArt && (
                <div 
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ clipPath: "circle(110px at center)" }}
                >
                  <motion.img 
                    src={tracks[currentTrack].coverArt} 
                    alt={`${tracks[currentTrack].title} cover`}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isVisible ? 1 : 0 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                    style={{ 
                      transform: isPlaying ? 'rotate(360deg)' : 'rotate(0deg)',
                      transition: isPlaying ? 'transform 3s linear infinite' : 'none'
                    }}
                  />
                </div>
              )}
            </div>
          </div>
          
          {/* Right side: Player controls */}
          <motion.div 
            className="md:w-3/5 bg-white bg-opacity-80 backdrop-blur-sm rounded-lg p-6 relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h3 className="text-xl font-['Tenor_Sans'] text-gray-800 mb-4">Featured Tracks</h3>
            
            {/* Audio visualizer */}
            <div className="relative mb-6">
              {/* SVG elements over visualizer */}
              <svg 
                width="100%" 
                height="80" 
                className="absolute inset-0 pointer-events-none"
                style={{ overflow: 'visible' }}
              >
                {/* Decorative sound wave arcs */}
                <motion.path
                  d="M20,60 C60,20 120,20 160,60 C200,100 260,100 300,60"
                  stroke="#6c94db"
                  strokeWidth="1"
                  fill="none"
                  strokeLinecap="round"
                  custom={3}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={lineVariants}
                />
                
                <motion.path
                  d="M350,60 C390,20 450,20 490,60"
                  stroke="#6c94db"
                  strokeWidth="1"
                  fill="none"
                  strokeLinecap="round"
                  custom={3.3}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={lineVariants}
                />
              </svg>
              
              {/* Traditional bar visualizer */}
              <div className="flex items-end justify-center h-20 space-x-1 relative z-10">
                {[...Array(30)].map((_, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    variants={barVariants}
                    animate={isPlaying ? "playing" : "paused"}
                    className="w-1 bg-gradient-to-t from-coral to-skyBlue rounded-t"
                  />
                ))}
              </div>
            </div>
            
            {/* Controls */}
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm font-light text-gray-600">
                {tracks[currentTrack].title}
              </div>
              <div className="flex items-center space-x-4 pointer-events-auto">
                <button 
                  onClick={handlePrevTrack}
                  className="text-gray-600 hover:text-deepPink transition-colors"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19 20L9 12L19 4V20Z" />
                    <line x1="5" y1="19" x2="5" y2="5" />
                  </svg>
                </button>
                <button 
                  onClick={togglePlay}
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-coral to-purple text-white"
                >
                  {isPlaying ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="6" y="4" width="4" height="16" fill="white" />
                      <rect x="14" y="4" width="4" height="16" fill="white" />
                    </svg>
                  ) : (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="5,3 19,12 5,21" fill="white" />
                    </svg>
                  )}
                </button>
                <button 
                  onClick={handleNextTrack}
                  className="text-gray-600 hover:text-deepPink transition-colors"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 4L15 12L5 20V4Z" />
                    <line x1="19" y1="5" x2="19" y2="19" />
                  </svg>
                </button>
              </div>
              <div className="text-sm font-light text-gray-600">
                {tracks[currentTrack].duration}
              </div>
            </div>
            
            {/* Interactive Progress bar */}
            <div className="relative mb-8">
              {/* SVG decorative arrow */}
              <svg 
                width="100%" 
                height="20" 
                className="absolute -top-6 pointer-events-none"
              >
                <motion.path
                  d={`M${progress}%,15 L${progress + 1}%,5 L${progress + 2}%,15`}
                  stroke="#FF6B6B"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              
              <div 
                ref={progressBarRef}
                className="w-full h-4 bg-gray-200 rounded-full overflow-hidden pointer-events-auto cursor-pointer relative"
                onClick={handleProgressBarClick}
                onMouseDown={handleDragStart}
                onTouchStart={handleDragStart}
                style={{ touchAction: 'none' }} // Prevents scrolling while dragging on mobile
              >
                <motion.div 
                  className="h-full bg-gradient-to-r from-deepPink to-purple"
                  style={{ width: `${progress}%` }}
                />
                {/* Draggable handle indicator */}
                <div 
                  className={`absolute top-0 bottom-0 w-4 h-4 bg-white rounded-full shadow-md transform -translate-y-0 -translate-x-1/2 pointer-events-none ${
                    isDragging ? 'scale-110' : ''
                  }`}
                  style={{ 
                    left: `${progress}%`,
                    display: isDragging || (progressBarRef.current && progressBarRef.current.matches(':hover')) ? 'block' : 'none',
                    transition: 'transform 0.1s ease'
                  }}
                />
              </div>
            </div>
            
            {/* Track list with decorative elements */}
            <div className="space-y-2 relative">
              {/* Decorative line */}
              <svg 
                width="100%" 
                height="100%" 
                className="absolute top-0 left-0 pointer-events-none z-0"
                style={{ overflow: 'visible' }}
              >
                <motion.line
                  x1="0"
                  y1="10"
                  x2="100%"
                  y2="10"
                  stroke="#6c94db"
                  strokeWidth="0.5"
                  strokeDasharray="2 4"
                  custom={4}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={lineVariants}
                />
              </svg>
              
              {tracks.map((track, i) => (
                <motion.div 
                  key={i}
                  onClick={() => changeTrack(i)}
                  className={`p-3 cursor-pointer flex justify-between items-center pointer-events-auto ${
                    currentTrack === i ? "bg-cream bg-opacity-50" : "hover:bg-cream hover:bg-opacity-30"
                  } transition-colors rounded-md relative z-10`}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <div className="flex items-center">
                    {/* Track indicator */}
                    {currentTrack === i && (
                      <motion.div 
                        className="absolute left-0 top-0 bottom-0 w-1 bg-purple rounded-l-md"
                        layoutId="trackIndicator"
                      />
                    )}
                    <div className="w-6 text-gray-500 flex justify-center">{i + 1}</div>
                    <div className="ml-2">{track.title}</div>
                  </div>
                  <div className="text-sm text-gray-500">{track.duration}</div>
                </motion.div>
              ))}
            </div>
            
            {/* HTML5 Audio Element */}
            <audio ref={audioRef}>
              <source src={tracks[currentTrack].file} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;