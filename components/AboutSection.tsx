'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

interface TechItem {
  name: string;
  category: 'backend' | 'frontend';
  color: string;
  icon: string;
}

interface Certificate {
  id: number;
  title: string;
  issuer: string;
}

const technologies: TechItem[] = [
  // Back-end / IA
  { name: 'Python', category: 'backend', color: 'from-blue-400 to-yellow-400', icon: '🐍' },
  { name: 'Java', category: 'backend', color: 'from-orange-400 to-red-500', icon: '☕' },
  { name: 'MySQL', category: 'backend', color: 'from-blue-500 to-cyan-400', icon: '🗄️' },
  // Front-end / Herramientas
  { name: 'JavaScript', category: 'frontend', color: 'from-yellow-300 to-yellow-500', icon: '⚡' },
  { name: 'CSS', category: 'frontend', color: 'from-blue-400 to-purple-500', icon: '🎨' },
  { name: 'GitHub', category: 'frontend', color: 'from-gray-300 to-gray-500', icon: '🐙' },
  { name: 'Git', category: 'frontend', color: 'from-orange-400 to-red-600', icon: '📦' },
];

const certificates: Certificate[] = [
  {
    id: 1,
    title: 'Principios SOLID y Patrones de Diseño',
    issuer: 'OpenWebinars',
  },
  {
    id: 2,
    title: 'Entornos de Desarrollo Avanzados',
    issuer: 'OpenWebinars',
  },
  {
    id: 3,
    title: 'Desarrollo Web Esencial',
    issuer: 'OpenWebinars',
  },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Variantes de animación para contenedores
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  // Variantes para el Bento Grid
  const bentoVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
      },
    },
  };

  return (
    <section
      ref={ref}
      id="about"
      className="relative w-full min-h-screen py-20 md:py-32 px-6 overflow-hidden"
    >
      {/* Background gradient orb */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -right-40 top-32 w-80 h-80 rounded-full bg-gradient-to-r from-accent-blue/20 via-accent-violet/20 to-accent-blue/20 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
          className="absolute -left-40 bottom-32 w-80 h-80 rounded-full bg-gradient-to-r from-accent-violet/20 via-accent-blue/20 to-accent-violet/20 blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-accent-violet to-accent-blue bg-clip-text text-transparent">
              Sobre mí
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Conoce mi historia, habilidades y certificaciones</p>
        </motion.div>

        {/* Bento Grid - Asymmetric Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-max"
        >
          {/* Block 1: My Story (2 columns on desktop) */}
          <motion.div
            variants={bentoVariants}
            className="md:col-span-2 group"
          >
            <div className="relative h-full p-8 md:p-10 rounded-3xl border border-white/10 backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/[0.02] hover:border-accent-violet/30 transition-all duration-300 overflow-hidden">
              {/* Animated background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent-violet/0 via-accent-blue/0 to-accent-violet/0 group-hover:from-accent-violet/5 group-hover:via-accent-blue/5 group-hover:to-accent-violet/5 transition-all duration-500 -z-10" />

              {/* Subtle border glow effect */}
              <motion.div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                animate={{
                  boxShadow: [
                    'inset 0 0 0px rgba(167, 139, 250, 0)',
                    'inset 0 0 20px rgba(167, 139, 250, 0.1)',
                    'inset 0 0 0px rgba(167, 139, 250, 0)',
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                  Un poco sobre mí
                </h3>
                <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                  Soy Técnico Superior en Desarrollo de Aplicaciones Multiplataforma (DAM) y Desarrollador de IA Junior. Me apasiona fusionar el desarrollo de software tradicional con la potencia de la Inteligencia Artificial y los Agentes Autónomos para crear soluciones que aporten un valor real.
                </p>
                <p className="text-gray-400 leading-relaxed text-base md:text-lg mt-4">
                  Fuera de las líneas de código, me encontrarás explorando nuevos videojuegos o aprendiendo de forma autodidacta las últimas tendencias tecnológicas.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Block 2: Tech Stack (Interactive) */}
          <motion.div
            variants={bentoVariants}
            className="row-span-2 flex flex-col"
          >
            <div className="h-full p-8 md:p-8 rounded-3xl border border-white/10 backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/[0.02] hover:border-accent-blue/30 transition-all duration-300 flex flex-col">
              <h3 className="text-2xl font-bold mb-8 text-white">Stack Tecnológico</h3>

              {/* Technologies Grid */}
              <div className="flex flex-col gap-4 flex-1">
                {/* Backend / IA */}
                <div>
                  <p className="text-xs uppercase tracking-widest text-accent-violet/80 font-semibold mb-3">
                    Back-end / IA
                  </p>
                  <div className="grid grid-cols-3 gap-3">
                    {technologies
                      .filter((t) => t.category === 'backend')
                      .map((tech, index) => (
                        <TechBadge key={index} tech={tech} />
                      ))}
                  </div>
                </div>

                {/* Frontend / Tools */}
                <div>
                  <p className="text-xs uppercase tracking-widest text-accent-blue/80 font-semibold mb-3 mt-4">
                    Front-end / Herramientas
                  </p>
                  <div className="grid grid-cols-3 gap-3">
                    {technologies
                      .filter((t) => t.category === 'frontend')
                      .map((tech, index) => (
                        <TechBadge key={index} tech={tech} />
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Block 3: Certificates */}
          <motion.div
            id="certifications"
            variants={bentoVariants}
            className="md:col-span-2"
          >
            <div className="h-full p-8 md:p-10 rounded-3xl border border-white/10 backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/[0.02] hover:border-accent-violet/30 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-8 text-white">Certificaciones</h3>

              {/* Certificates Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {certificates.map((cert) => (
                  <CertificateCard key={cert.id} certificate={cert} />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/**
 * TechBadge Component - Interactive technology badge with hover effects
 */
interface TechBadgeProps {
  tech: TechItem;
}

function TechBadge({ tech }: TechBadgeProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ scale: 1 }}
      whileHover={{
        scale: 1.15,
        y: -4,
      }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 10,
      }}
      className="relative"
    >
      <div className={`relative p-3 rounded-2xl backdrop-blur-sm bg-gradient-to-br ${tech.color} bg-opacity-10 border border-white/10 cursor-pointer group overflow-hidden transition-all duration-300 hover:border-white/20`}>
        {/* Animated background on hover */}
        <motion.div
          animate={{
            opacity: isHovered ? 0.2 : 0.05,
          }}
          className={`absolute inset-0 bg-gradient-to-br ${tech.color}`}
        />

        {/* Magnetic glow effect */}
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${tech.color} blur-xl -z-10 opacity-30`}
          />
        )}

        <div className="relative z-10 flex flex-col items-center gap-1.5">
          <motion.span
            animate={{
              scale: isHovered ? 1.3 : 1,
            }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 10,
            }}
            className="text-xl"
          >
            {tech.icon}
          </motion.span>
          <span className="text-xs font-semibold text-white text-center line-clamp-2 group-hover:text-white transition-colors">
            {tech.name}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

/**
 * CertificateCard Component - Flip 3D effect with light beam animation
 */
interface CertificateCardProps {
  certificate: Certificate;
}

function CertificateCard({ certificate }: CertificateCardProps) {
  const [isFlipped, setIsFlipped] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      onHoverStart={() => {
        setIsHovered(true);
        setIsFlipped(true);
      }}
      onHoverEnd={() => {
        setIsHovered(false);
        setIsFlipped(false);
      }}
      className="relative min-h-56 cursor-pointer group"
      style={{ perspective: '1200px' }}
    >
      {/* Card container with 3D flip effect */}
      <motion.div
        animate={{
          rotateY: isFlipped ? 180 : 0,
        }}
        transition={{
          duration: 0.6,
          ease: 'easeInOut',
        }}
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Front side */}
        <motion.div
          style={{
            backfaceVisibility: 'hidden',
          }}
          className="absolute inset-0 p-8 rounded-2xl border border-white/10 backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/[0.02] flex flex-col items-center justify-center text-center group-hover:border-accent-violet/30 transition-colors duration-300"
        >
          {/* Border beam effect */}
          <motion.div
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
            style={{
              backgroundImage: `linear-gradient(90deg, 
                transparent 0%, 
                rgba(167, 139, 250, 0.4) 50%, 
                transparent 100%)`,
              backgroundSize: '200% 200%',
              backgroundPosition: '0% 0%',
            }}
          />

          <div className="relative z-10">
            <motion.div
              animate={{
                y: isHovered ? -2 : 0,
              }}
              transition={{
                type: 'spring',
                stiffness: 300,
              }}
              className="text-3xl mb-3"
            >
              ✨
            </motion.div>
            <h4 className="text-sm md:text-base font-semibold text-white leading-snug line-clamp-3">
              {certificate.title}
            </h4>
          </div>
        </motion.div>

        {/* Back side */}
        <motion.div
          style={{
            backfaceVisibility: 'hidden',
            rotateY: 180,
          }}
          className="absolute inset-0 p-8 rounded-2xl border border-white/10 backdrop-blur-xl bg-gradient-to-br from-accent-violet/10 to-accent-blue/10 flex flex-col items-center justify-center text-center border-accent-violet/30"
        >
          {/* Animated gradient background */}
          <motion.div
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                'linear-gradient(45deg, rgba(167, 139, 250, 0.3), rgba(96, 165, 250, 0.3))',
              backgroundSize: '200% 200%',
            }}
          />

          <div className="relative z-10">
            <motion.p
              animate={{
                scale: isFlipped ? 1 : 0.95,
              }}
              className="text-sm text-accent-violet font-semibold mb-2"
            >
              Certificado por
            </motion.p>
            <p className="text-lg font-bold text-white">{certificate.issuer}</p>
            <p className="text-xs text-gray-300 mt-3">Código limpio</p>
            <p className="text-xs text-gray-300">Desarrollo profesional</p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
