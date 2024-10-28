import React from 'react';
import { motion } from 'framer-motion';

export const RetroWaveLanding = () => {
  const colors = {
    cream: '#F5E6D3',
    coral: '#FF6B6B',
    navy: '#2D3047',
    orange: '#FF9F1C',
    skyBlue: '#A8E0FF',
    sunset: '#FF9671', // Added new colors
    oceanBlue: '#48ABC9',
    // New psychedelic sunset colors
    purple: '#9B6EDC',
    deepPink: '#FF1B6B',
    goldenYellow: '#FFD93D',
    magenta: '#FF00FF',
    // Updated vintage psychedelic palette
    sage: '#96A886',
    terracotta: '#C76D4E',
    sand: '#D4B483',
    mint: '#9DC9B8',
    dustyRose: '#C98986',
    mustard: '#D4A373',
    retroBlue: '#4B99D0',
    retroOrange: '#E85D24',
    retroCream: '#F7E5A4',
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-b from-terracotta via-sand to-skyBlue overflow-hidden">
      {/* Sun */}
      <motion.div
        className="absolute w-48 h-48 rounded-full bg-orange"
        style={{
          top: '15%',
          right: '10%',
          boxShadow: '0 0 100px rgba(255, 159, 28, 0.6)',
        }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Ocean waves - replacing your original circular waves */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`wave-${i}`}
          className="absolute w-[200%]"
          style={{
            height: '100px',
            background: `linear-gradient(180deg, 
              ${colors.oceanBlue}${90 - i * 20} 0%, 
              ${colors.skyBlue}${80 - i * 20} 100%)`,
            bottom: `${i * 60}px`,
            left: '-50%',
          }}
          animate={{
            x: [0, -100, 0],
          }}
          transition={{
            duration: 8 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}

{/* Animated wave curves */}
<motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              background: 'none',
              border: `8px solid ${Object.values(colors)[i % 5]}`,
              borderRadius: '50%',
              left: '30%',
              top: '20%',
              width: '140%',
              height: '140%',
              opacity: 0.6,
            }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0],
              x: [0, 20, -20, 0],
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </motion.div>

      {/* Floating bubbles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`bubble-${i}`}
          className="absolute rounded-full bg-white/30"
          style={{
            width: `${30 + i * 10}px`,
            height: `${30 + i * 10}px`,
            left: `${10 + i * 8}%`,
            top: `${40 + i * 5}%`,
          }}
          animate={{
            y: [-20, 20],
            x: [-10, 10],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2,
          }}
        />
      ))}

      {/* Keeping your existing spinning shape but making it more sunset-colored
      <motion.div 
        className="absolute right-0 top-0 w-64 h-64"
        style={{
          background: colors.sunset,
          borderRadius: '50% 0 50% 50%',
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      /> */}

      {/* Your original content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <h1 className="text-8xl font-bold mb-8 text-cream">
            Lost in Tropez
          </h1>
          
          <motion.div
            className="flex space-x-8 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {['LISTEN', 'WATCH', 'EXPERIENCE'].map((text) => (
              <motion.button
                key={text}
                className="px-8 py-3 rounded-full text-lg font-medium border-2 text-cream border-cream"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: colors.cream,
                  color: colors.navy,
                }}
                transition={{ duration: 0.2 }}
              >
                {text}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Keeping your animated gradient lines but adjusting colors */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute left-0 h-px w-full"
          style={{
            background: `linear-gradient(90deg, 
              transparent 0%, 
              ${colors.cream} 50%, 
              transparent 100%)`,
            top: `${30 + i * 20}%`,
          }}
          animate={{
            x: [-2000, 2000],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: i * 2,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};