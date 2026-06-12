'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const words = ['Inteligencia Artificial', 'Desarrollo Web', 'Soluciones SaaS'];

export default function HeroSection() {
  const canvasRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
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
      <div className="max-w-4xl mx-auto px-6 py-20 md:py-32 flex flex-col items-start justify-center gap-8">
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
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
            >
              Hola, soy{' '}
            </motion.span>
            <motion.span
              className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-accent-violet via-accent-blue to-accent-violet"
              initial={{ opacity: 0, scale: 0.8, rotateZ: -10 }}
              animate={{ opacity: 1, scale: 1, rotateZ: 0 }}
              transition={{ delay: 0.8, duration: 0.8, ease: 'easeOut' }}
            >
              Pedro José Mesa
            </motion.span>
          </h1>
        </motion.div>

        {/* Subtitle with typewriter effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="h-20 md:h-24 flex flex-col gap-2"
        >
          <div className="text-xl md:text-2xl text-gray-400 min-h-12">
            <span className="text-gray-300">Junior AI Developer @ </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-violet to-accent-blue font-semibold">
              Caleida
            </span>
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
          className="text-base md:text-lg text-gray-300 max-w-2xl leading-relaxed"
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
          className="flex flex-col md:flex-row gap-4 pt-4"
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
