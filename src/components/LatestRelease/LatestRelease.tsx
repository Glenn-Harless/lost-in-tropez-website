import { motion } from 'framer-motion';

const LatestRelease = () => {
  // Latest release details - replace with actual data
  const release = {
    title: "Pieces EP",
    releaseDate: "2023",
    coverArt: "/images/full2552release.png", // Fixed path (removed "public/")
    description: "A 3-track journey through a sunny psychadellic carnival.",
    spotifyLink: "https://open.spotify.com/album/4D9KOJauJjpBoxBGJo27ge?si=9QZ3rTiCR9SeJh1745H6Mg",
    // appleMusicLink: "#",
    bandcampLink: "https://lost-in-tropez.bandcamp.com",
    tracklist: [
      "Pieces",
      "Au Revoir",
      "Pero te Dije"
    ]
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
      
      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-2 font-['Tenor_Sans']">Latest Release</h4>
          <h2 className="text-4xl md:text-5xl font-['Marcellus'] text-gray-900">{release.title}</h2>
          <p className="mt-2 text-gray-600">{release.releaseDate}</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Album artwork - REDUCED SIZE */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, rotateY: 30 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative mx-auto w-48 h-48 md:w-64 md:h-64">
              {/* Decorative frame */}
              <div className="absolute inset-0 border-2 border-gray-300 rounded-lg transform -rotate-3"></div>
              <div className="absolute inset-0 border-2 border-goldenYellow rounded-lg transform rotate-3"></div>
              
              {/* Album cover */}
              <motion.div 
                className="absolute inset-0 bg-gray-100 rounded-lg overflow-hidden"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img 
                  src={release.coverArt} 
                  alt={release.title} 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
          
          {/* Release details */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700">{release.description}</p>
            
            {/* Tracklist */}
            <div>
              <h3 className="text-lg font-['Tenor_Sans'] mb-3">Tracklist:</h3>
              <ol className="space-y-2">
                {release.tracklist.map((track, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-center text-gray-700"
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + (index * 0.1) }}
                    viewport={{ once: true }}
                  >
                    <span className="w-6 text-gray-400">{index + 1}.</span>
                    {track}
                  </motion.li>
                ))}
              </ol>
            </div>
            
            {/* Listen buttons */}
            <div className="pt-4 flex flex-wrap gap-3 pointer-events-auto">
              <motion.a 
                href={release.spotifyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-mint text-gray-800 rounded-md inline-flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Spotify</span>
              </motion.a>
              
              {release.bandcampLink && (
                <motion.a 
                  href={release.bandcampLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-skyBlue text-gray-800 rounded-md inline-flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Bandcamp</span>
                </motion.a>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LatestRelease;