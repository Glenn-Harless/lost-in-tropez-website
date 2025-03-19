import { motion } from 'framer-motion';

const ArtistSection = () => {
  return (
    <div className="py-10 relative overflow-hidden">
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
      
      <motion.div 
        className="w-full max-w-4xl mx-auto py-16 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <motion.h2 
              className="text-3xl md:text-4xl font-['Italiana'] mb-6 text-gray-900"
              initial={{ x: -20 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              LOST IN TROPEZ
            </motion.h2>
            
            <motion.div
              className="space-y-4 text-gray-700 font-['Cormorant_Garamond'] text-lg"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p>
                Electronic music duo crafting immersive sonic landscapes inspired by the Mediterranean coastline and surrealist art.  
              </p>
              <p>
                Lost In Tropez blends organic textures with pulsing rhythms, creating a distinctive sound that evokes dreamlike escapes and neon-lit nights.  
              </p>
              <p>
                Influenced by Polo & Pan, ODESZA, Louis The Child, Lane 8, and Nora En Pure, their music fuses French house, ambient tones, and cinematic nostalgia.  
              </p>
              <p>
                Based in Southern California with releases dating back to 2020, Lost In Tropez continues to shape sonic journeys with new music on the way.  
              </p>
            </motion.div>
            
            <motion.div 
              className="mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {/* Optional contact button removed as in original code */}
            </motion.div>
          </div>
          
          <motion.div 
            className="order-1 md:order-2 relative h-64 md:h-96"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {/* Decorative layered effect */}
            <div className="absolute inset-4 bg-gradient-to-br from-retroBlue to-retroOrange opacity-70 rounded"></div>
            <div className="absolute inset-0 border-2 border-sand rounded"></div>
            <div className="absolute inset-8 border border-white rounded"></div>
            
            {/* Actual artist logo image */}
            <div className="absolute inset-0 rounded overflow-hidden flex items-center justify-center">
              <img 
                src="/images/logo.png" 
                alt="Lost in Tropez Logo" 
                className="object-contain w-full h-full p-4"
              />
            </div>
            
            {/* Decorative elements */}
            <motion.div 
              className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple opacity-30 rounded-full"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ArtistSection;