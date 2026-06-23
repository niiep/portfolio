'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const words = ['Inteligencia Artificial', 'Desarrollo Web', 'Soluciones SaaS'];

export default function HeroSection() {
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0"
    >
      {/* Radial gradient glow effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-accent-violet/20 via-accent-blue/20 to-accent-violet/20 blur-3xl -z-10"
        />
      </div>

      {/* Main content */}
      <div className="w-full max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left column - Text content */}
          <div className="flex flex-col items-start justify-center gap-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur border border-white/10 hover:border-accent-violet/30 transition-colors"
            >
              <Sparkles size={16} className="text-accent-violet" />
              <span className="text-sm text-gray-300">
                ✨ Disponible para nuevos retos laborales
              </span>
            </motion.div>

            {/* Main Title with character reveal */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-col gap-4"
            >
              <h1 className="flex flex-wrap items-baseline gap-x-4 gap-y-2 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <motion.span
                  className="inline-block"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
                >
                  Hola, soy
                </motion.span>
                <motion.span
                  className="block text-white drop-shadow-[0_0_24px_rgba(167,139,250,0.45)] sm:inline"
                  initial={{ opacity: 0, scale: 0.8, rotateZ: -10 }}
                  animate={{ opacity: 1, scale: 1, rotateZ: 0 }}
                  transition={{ delay: 0.8, duration: 0.8, ease: 'easeOut' }}
                >
                  Pedro José Mesa Herrera
                </motion.span>
              </h1>
            </motion.div>

            {/* Subtitle with typewriter effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-col gap-4"
            >
              <div className="flex items-center gap-x-3 gap-y-2 text-lg md:text-xl text-gray-400 flex-wrap">
                <span className="text-gray-300">Junior AI Developer @</span>
                <Image
                  src="/caleida-logo.png"
                  alt="Caleida"
                  width={240}
                  height={56}
                  priority
                  className="h-8 md:h-10 w-auto drop-shadow-[0_0_20px_rgba(167,139,250,0.4)]"
                />
              </div>
              <div className="min-h-12 text-lg md:text-xl text-gray-400">
                <span>Especialista en </span>
                <motion.span
                  key={currentWord}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-violet font-semibold"
                >
                  {words[currentWord]}
                </motion.span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="text-base md:text-lg text-gray-300 max-w-lg leading-relaxed"
            >
              Desarrollador apasionado por crear software inteligente, interfaces interactivas y
              soluciones multiplataforma de alto rendimiento. Combinando Machine Learning con
              diseño innovador.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
            {/* Primary Button */}
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleScrollToSection('projects')}
                className="group relative px-8 py-3 rounded-lg font-semibold text-white overflow-hidden"
              >
                {/* Gradient background */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent-violet via-accent-blue to-accent-violet bg-200% animate-pulse" />

                {/* Glow effect */}
                <motion.div
                  animate={{
                    boxShadow: [
                      '0 0 20px rgba(167, 139, 250, 0.5)',
                      '0 0 40px rgba(167, 139, 250, 0.8)',
                      '0 0 20px rgba(167, 139, 250, 0.5)',
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 rounded-lg bg-gradient-to-r from-accent-violet via-accent-blue to-accent-violet"
                />

                {/* Content */}
                <div className="relative flex items-center gap-2">
                  <span>Ver mis proyectos</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <ArrowRight size={18} />
                  </motion.div>
                </div>
              </motion.button>

              {/* Secondary Button */}
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleScrollToSection('contact')}
                className="px-8 py-3 rounded-lg font-semibold text-white border-2 border-accent-violet/50 hover:border-accent-violet hover:bg-white/5 transition-all duration-300"
              >
                Contactar
              </motion.button>
            </motion.div>
          </div>

          {/* Right column - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="hidden md:flex justify-center items-center"
          >
            <div className="relative w-full max-w-sm">
              {/* Gradient ring effect */}
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 40px rgba(167, 139, 250, 0.3)',
                    '0 0 60px rgba(96, 165, 250, 0.4)',
                    '0 0 40px rgba(167, 139, 250, 0.3)',
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-violet/20 via-accent-blue/20 to-accent-violet/20"
              />
              
              {/* Profile image container */}
              <div className="relative rounded-2xl overflow-hidden border border-accent-violet/30 bg-gradient-to-br from-accent-violet/10 to-accent-blue/10 p-1">
                <Image
                  src="/profile.png"
                  alt="Pedro José Mesa Herrera"
                  width={400}
                  height={500}
                  priority
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 md:bottom-16 flex flex-col items-center gap-2 text-gray-400"
        >
          <span className="text-sm hidden md:block">Desplázate hacia abajo</span>
          <motion.div
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-center justify-center"
          >
            <motion.div className="w-1 h-2 bg-gradient-to-b from-accent-violet to-accent-blue rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
