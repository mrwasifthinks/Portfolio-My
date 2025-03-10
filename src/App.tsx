<<<<<<< HEAD
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, ArrowUp } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
=======
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, ArrowUp } from 'lucide-react';
>>>>>>> 43d3cfc (Replaced files with new project files)
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Education from './components/Education';
<<<<<<< HEAD
import SmokeCursor from './components/SmokeCursor';
import ThemeToggle from './components/ThemeToggle';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const navRef = useRef(null);

  useEffect(() => {
    // GSAP animation for navbar
    const navAnimation = gsap.from(navRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power4.out"
    });

    // Smooth scroll setup
    const smoothScroll = (e: Event) => {
      e.preventDefault();
      const href = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
      if (href && href.startsWith('#')) {
        const element = document.querySelector(href);
        if (element) {
          gsap.to(window, {
            duration: 1,
            scrollTo: element,
            ease: "power4.inOut"
          });
        }
      }
    };

    // Apply smooth scroll to all navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', smoothScroll);
    });

    // Scroll to top visibility
=======

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
>>>>>>> 43d3cfc (Replaced files with new project files)
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
<<<<<<< HEAD
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', smoothScroll);
      });
    };
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`${isDark ? 'bg-gray-900' : 'bg-gray-50'} text-white relative min-h-screen transition-colors duration-500`}>
      <SmokeCursor />
      <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
      
      {/* Universe stars background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute inset-0 ${isDark ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 3}px`,
                height: `${Math.random() * 3}px`,
                animation: `twinkle ${2 + Math.random() * 3}s infinite ${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      <nav ref={navRef} className={`fixed w-full ${isDark ? 'bg-gray-900/80' : 'bg-white/80'} backdrop-blur-sm z-50 transition-colors duration-500`}>
=======
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="bg-gray-900 text-white relative">
      <nav className="fixed w-full bg-gray-900/80 backdrop-blur-sm z-50">
>>>>>>> 43d3cfc (Replaced files with new project files)
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
<<<<<<< HEAD
              className={`text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600`}
=======
              className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
>>>>>>> 43d3cfc (Replaced files with new project files)
            >
              Portfolio
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex space-x-3 sm:space-x-6"
            >
<<<<<<< HEAD
              {['About', 'Education', 'Projects', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`text-sm sm:text-base ${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors relative group`}
                  whileHover={{ scale: 1.05 }}
                >
                  {item}
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
                    initial={false}
                  />
                </motion.a>
              ))}
=======
              <a href="#about" onClick={handleNavClick} className="text-sm sm:text-base hover:text-blue-400 transition-colors">About</a>
              <a href="#education" onClick={handleNavClick} className="text-sm sm:text-base hover:text-blue-400 transition-colors">Education</a>
              <a href="#projects" onClick={handleNavClick} className="text-sm sm:text-base hover:text-blue-400 transition-colors">Projects</a>
              <a href="#contact" onClick={handleNavClick} className="text-sm sm:text-base hover:text-blue-400 transition-colors">Contact</a>
>>>>>>> 43d3cfc (Replaced files with new project files)
            </motion.div>
          </div>
        </div>
      </nav>

      <main>
<<<<<<< HEAD
        <Hero isDark={isDark} />
        <About isDark={isDark} />
        <Education />
        <Projects isDark={isDark} />
        <Contact isDark={isDark} />
      </main>

      <footer className={`${isDark ? 'bg-gray-800' : 'bg-gray-100'} py-8 transition-colors duration-500`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm sm:text-base`}>
              © 2024 Portfolio. All rights reserved.
            </div>
            <div className="flex space-x-4">
              {[
                { icon: Github, href: "https://github.com/wasifthinks" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/wasif-azim-390a3434a" },
                { icon: Mail, href: "mailto:your.email@example.com" }
              ].map(({ icon: Icon, href }) => (
                <motion.a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={24} />
                </motion.a>
              ))}
=======
        <Hero />
        <About />
        <Education />
        <Projects />
        <Contact />
      </main>

      <footer className="bg-gray-800 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-gray-400 text-sm sm:text-base">© 2024 Portfolio. All rights reserved.</div>
            <div className="flex space-x-4">
              <motion.a
                href="https://github.com/wasifthinks"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/wasif-azim-390a3434a"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                href="mailto:your.email@example.com"
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={24} />
              </motion.a>
>>>>>>> 43d3cfc (Replaced files with new project files)
            </div>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
<<<<<<< HEAD
            onClick={() => {
              gsap.to(window, {
                duration: 1,
                scrollTo: 0,
                ease: "power4.inOut"
              });
            }}
            className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg transition-all hover:shadow-xl z-50 group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp size={24} className="transform group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>

      <style jsx global>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `}</style>
=======
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg transition-colors z-50"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
>>>>>>> 43d3cfc (Replaced files with new project files)
    </div>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> 43d3cfc (Replaced files with new project files)
