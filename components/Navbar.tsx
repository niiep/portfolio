'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Inicio', href: '#home' },
  { label: 'Sobre mí', href: '#about' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Certificaciones', href: '#certifications' },
  { label: 'Contacto', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    setActiveItem(href);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full z-50 hidden md:block"
      >
        <div className="backdrop-blur-md bg-white/5 border-b border-white/10 shadow-lg">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer"
            >
              <div className="text-2xl font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-violet via-accent-blue to-accent-violet">
                  &lt;PM /&gt;
                </span>
              </div>
            </motion.div>

            {/* Nav Links */}
            <div className="flex items-center gap-2">
              {navItems.map((item) => (
                <motion.button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="relative px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                  {activeItem === item.href && (
                    <motion.div
                      layoutId="navUnderline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-violet to-accent-blue"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* CTA Button */}
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 rounded-lg bg-gradient-to-r from-accent-violet to-accent-blue text-white font-medium text-sm hover:shadow-lg hover:shadow-accent-violet/50 transition-all duration-300"
            >
              Contactar
            </motion.a>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Button */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full z-50 md:hidden"
      >
        <div className="backdrop-blur-md bg-white/5 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-violet via-accent-blue to-accent-violet">
                &lt;PM /&gt;
              </span>
            </motion.div>

            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="backdrop-blur-md bg-white/5 border-b border-white/10"
            >
              <div className="flex flex-col gap-2 px-6 py-4">
                {navItems.map((item) => (
                  <motion.button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    whileHover={{ x: 10 }}
                    className="text-left px-4 py-2 text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                  >
                    {item.label}
                  </motion.button>
                ))}
                <motion.a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#contact');
                  }}
                  whileHover={{ x: 10 }}
                  className="text-left px-4 py-2 rounded-lg bg-gradient-to-r from-accent-violet to-accent-blue text-white font-medium hover:shadow-lg hover:shadow-accent-violet/50 transition-all"
                >
                  Contactar
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
