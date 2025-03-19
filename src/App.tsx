import { Layout } from '@/components/layout/Layout'
import MusicPlayer from '@/components/MusicPlayer/MusicPlayer'
import ArtistSection from '@/components/ArtistSection/ArtistSection'
import StreamingLinks from '@/components/StreamingLinks/StreamingLinks'
import LatestRelease from '@/components/LatestRelease/LatestRelease'
import ContactSection from '@/components/ContactSection/ContactSection'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Section types
type SectionType = 'home' | 'about' | 'music' | 'release' | 'streaming' | 'contact';

function App() {
  const [activeSection, setActiveSection] = useState<SectionType>('home');
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const showSection = (section: SectionType) => {
    if (section === 'home') {
      setIsPanelOpen(false);
      setActiveSection('home');
    } else {
      setActiveSection(section);
      setIsPanelOpen(true);
    }
  };

  return (
    <Layout>
      {/* Main landing content - always visible */}
      <div className={`absolute inset-0 flex flex-col items-center justify-center text-center transition-all duration-500 ${isPanelOpen ? 'md:left-0 md:right-1/2 md:transform-none' : ''}`}
        style={{ pointerEvents: 'none' }} // Make this container transparent to pointer events
      >
        <h1 className="font-['Marcellus'] text-6xl md:text-8xl tracking-tight mb-4 text-gray-900 leading-tight">
          LOST IN<br/>TROPEZ
        </h1>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <motion.button
            onClick={() => showSection('music')}
            className="px-6 py-2 border border-gray-400 text-gray-600 text-lg font-light
                      hover:bg-gray-50 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            LISTEN
          </motion.button>
          
          <motion.button
            onClick={() => showSection('about')}
            className="px-6 py-2 border border-gray-400 text-gray-600 text-lg font-light
                      hover:bg-gray-50 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            ABOUT
          </motion.button>

          <motion.button
            onClick={() => showSection('release')}
            className="px-6 py-2 border border-gray-400 text-gray-600 text-lg font-light
                      hover:bg-gray-50 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            RELEASES
          </motion.button>

          <motion.button
            onClick={() => showSection('streaming')}
            className="px-6 py-2 border border-gray-400 text-gray-600 text-lg font-light
                      hover:bg-gray-50 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            PLATFORMS
          </motion.button>

          <motion.button
            onClick={() => showSection('contact')}
            className="px-6 py-2 border border-gray-400 text-gray-600 text-lg font-light
                      hover:bg-gray-50 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            CONNECT
          </motion.button>
        </div>
      </div>

      {/* Side panel for content */}
      <AnimatePresence>
        {isPanelOpen && (
          <motion.div 
            className="absolute inset-0 md:left-1/2 backdrop-blur-sm p-4 md:p-8 overflow-auto pointer-events-auto"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25 }}
          >
            {/* Close button - visible on mobile and optionally on desktop */}
            <button 
              onClick={() => showSection('home')}
              className="fixed top-4 right-4 z-50 w-10 h-10 rounded-full bg-white bg-opacity-70 flex items-center justify-center shadow-md pointer-events-auto"
            >
              ✕
            </button>

            {/* Dynamic content based on active section */}
            <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-5 md:p-8 h-full overflow-auto">
              {activeSection === 'about' && <ArtistSection />}
              {activeSection === 'music' && <MusicPlayer />}
              {activeSection === 'release' && <LatestRelease />}
              {activeSection === 'streaming' && <StreamingLinks />}
              {activeSection === 'contact' && <ContactSection />}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  )
}

export default App