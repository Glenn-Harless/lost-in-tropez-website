import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactSection = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeElement, setActiveElement] = useState<string | null>(null);
  
  // Setup visibility for staggered animations
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Submit form data to Netlify
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        "form-name": "contact",
        email,
        message
      }).toString()
    })
      .then(() => {
        console.log("Form successfully submitted");
        setSubmitted(true);
        setEmail("");
        setMessage("");
        
        setTimeout(() => {
          setSubmitted(false);
        }, 3000);
      })
      .catch((error) => {
        console.log("Form submission error:", error);
      });
  };

  // Animation variants
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
      filter: "drop-shadow(0 0 6px rgba(138, 138, 255, 0.7))",
      strokeWidth: 3,
      transition: { duration: 0.3 }
    }
  };

  // Animation variants for floating elements
  const floatingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.3,
        duration: 0.8
      }
    })
  };

  return (
    <div id="contact" className="py-10 relative overflow-hidden">
      {/* Background decorative elements - matching other components */}
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
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <motion.h2 
          className="text-3xl md:text-4xl text-center font-['Marcellus'] text-gray-900 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Connect With Us
        </motion.h2>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left side: Abstract artistic drawing */}
          <div className="flex-1 relative">
            <div className="relative w-full h-[350px]">
              <svg 
                width="100%" 
                height="100%" 
                viewBox="0 0 300 350" 
                style={{ overflow: 'visible' }}
              >
                {/* Center flowing wave */}
                <motion.path
                  id="centerWave"
                  d="M50,175 C90,145 130,195 170,175 C210,155 250,205 290,175"
                  stroke="#6c94db"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  custom={0}
                  initial="hidden"
                  animate={isVisible ? (activeElement === "centerWave" ? "highlighted" : "visible") : "hidden"}
                  variants={lineVariants}
                  onMouseEnter={() => setActiveElement("centerWave")}
                  onMouseLeave={() => setActiveElement(null)}
                />
                
                {/* Upper wave */}
                <motion.path
                  id="upperWave"
                  d="M30,120 C70,90 110,140 150,120 C190,100 230,150 270,130"
                  stroke="#6c94db"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  custom={1}
                  initial="hidden"
                  animate={isVisible ? (activeElement === "upperWave" ? "highlighted" : "visible") : "hidden"}
                  variants={lineVariants}
                  onMouseEnter={() => setActiveElement("upperWave")}
                  onMouseLeave={() => setActiveElement(null)}
                />
                
                {/* Lower wave */}
                <motion.path
                  id="lowerWave"
                  d="M70,230 C110,200 150,250 190,230 C230,210 270,260 310,230"
                  stroke="#6c94db"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  custom={2}
                  initial="hidden"
                  animate={isVisible ? (activeElement === "lowerWave" ? "highlighted" : "visible") : "hidden"}
                  variants={lineVariants}
                  onMouseEnter={() => setActiveElement("lowerWave")}
                  onMouseLeave={() => setActiveElement(null)}
                />
                
                {/* Connecting vertical lines */}
                <motion.path
                  id="connectLine1"
                  d="M90,90 C100,120 80,150 100,175 C120,200 90,230 100,260"
                  stroke="#6c94db"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  custom={3}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={lineVariants}
                />
                
                <motion.path
                  id="connectLine2"
                  d="M170,70 C180,100 160,130 170,175 C180,220 160,250 170,280"
                  stroke="#6c94db"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  custom={4}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={lineVariants}
                />
                
                <motion.path
                  id="connectLine3"
                  d="M250,90 C260,120 240,150 250,175 C260,200 240,230 250,260"
                  stroke="#6c94db"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  custom={5}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={lineVariants}
                />
                
                {/* Accent elements */}
                <motion.circle
                  id="accent1"
                  cx="90"
                  cy="175"
                  r="8"
                  fill="none"
                  stroke="#FF6B6B"
                  strokeWidth="2"
                  custom={6}
                  initial="hidden"
                  animate={isVisible ? (activeElement === "centerWave" ? "highlighted" : "visible") : "hidden"}
                  variants={lineVariants}
                />
                
                <motion.circle
                  id="accent2"
                  cx="170"
                  cy="175"
                  r="10"
                  fill="none"
                  stroke="#FF6B6B"
                  strokeWidth="2"
                  custom={6.2}
                  initial="hidden"
                  animate={isVisible ? (activeElement === "centerWave" ? "highlighted" : "visible") : "hidden"}
                  variants={lineVariants}
                />
                
                <motion.circle
                  id="accent3"
                  cx="250"
                  cy="175"
                  r="6"
                  fill="none"
                  stroke="#FF6B6B"
                  strokeWidth="2"
                  custom={6.4}
                  initial="hidden"
                  animate={isVisible ? (activeElement === "centerWave" ? "highlighted" : "visible") : "hidden"}
                  variants={lineVariants}
                />
                
                {/* Decorative abstract elements */}
                <motion.path
                  id="abstractShape1"
                  d="M50,300 C80,320 120,280 150,300"
                  stroke="#9B6EDC"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  custom={7}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={lineVariants}
                />
                
                <motion.path
                  id="abstractShape2"
                  d="M200,300 C230,280 260,320 290,300"
                  stroke="#9B6EDC"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  custom={7.2}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={lineVariants}
                />
                
                {/* Floating circles */}
                {[...Array(5)].map((_, i) => (
                  <motion.circle
                    key={`float-circle-${i}`}
                    cx={70 + i * 40}
                    cy={80 + (i % 3) * 30}
                    r={3 + (i % 3)}
                    fill="#6c94db"
                    opacity={0.7}
                    custom={8 + i * 0.2}
                    initial="hidden"
                    animate="visible"
                    variants={floatingVariants}
                  />
                ))}
                
                {/* Animated pulsing accent */}
                <motion.circle
                  cx="170"
                  cy="175"
                  r="20"
                  fill="none"
                  stroke="#FF6B6B"
                  strokeWidth="1"
                  opacity="0.5"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.2, 0.5, 0.2]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
              </svg>
            </div>
          </div>
          
          {/* Right side: Form */}
          <div className="flex-1">
            <motion.div 
              className="bg-white bg-opacity-70 backdrop-blur-sm rounded-lg p-6 md:p-8 shadow-sm pointer-events-auto"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 20 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div 
                    key="success"
                    className="p-6 text-gray-700 rounded text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                  >
                    <div className="mb-4">
                      <svg width="50" height="50" viewBox="0 0 50 50" className="mx-auto">
                        <motion.circle
                          cx="25"
                          cy="25"
                          r="20"
                          fill="none"
                          stroke="#9DC9B8"
                          strokeWidth="2"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.5 }}
                        />
                        <motion.path
                          d="M15,25 L22,32 L35,18"
                          fill="none"
                          stroke="#9DC9B8"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                        />
                      </svg>
                    </div>
                    <p className="font-['Cormorant_Garamond'] italic text-lg">
                      Thank you for your message. We'll be in touch soon.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                  >
                    {/* Hidden fields for Netlify Forms */}
                    <input type="hidden" name="form-name" value="contact" />
                    <p className="hidden">
                      <label>Don't fill this out if you're human: <input name="bot-field" /></label>
                    </p>

                    <div>
                      <label htmlFor="email" className="block text-sm font-['Tenor_Sans'] text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-skyBlue bg-white bg-opacity-80"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-['Tenor_Sans'] text-gray-700 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-skyBlue bg-white bg-opacity-80 h-32"
                        placeholder="Bookings, collaborations, or just to say hello..."
                        required
                      />
                    </div>
                    
                    <motion.button
                      type="submit"
                      className="w-full py-3 bg-gradient-to-r from-coral to-purple text-white rounded-md font-['Tenor_Sans']"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      SEND MESSAGE
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;