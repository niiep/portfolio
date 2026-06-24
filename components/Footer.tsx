'use client';

import { motion } from 'framer-motion';
import { BriefcaseBusiness, GitBranch, Mail } from 'lucide-react';
import Link from 'next/link';

const navigationLinks = [
  { label: 'Inicio', href: '#home' },
  { label: 'Sobre m\u00ed', href: '#about' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Contacto', href: '#contact' },
];

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/pedro-jos%C3%A9-mesa-herrera-03301933b',
    icon: BriefcaseBusiness,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/niiep',
    icon: GitBranch,
  },
  {
    label: 'Email',
    href: 'mailto:pedrojosemesaherrera@gmail.com',
    icon: Mail,
  },
];

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6 }}
      className="relative z-10 border-t border-white/10 bg-white/5 px-6 py-12 backdrop-blur-md md:py-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 text-center md:grid-cols-3 md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <Link href="#home" className="mb-4 inline-flex text-2xl font-bold">
              <span className="bg-gradient-to-r from-accent-violet via-accent-blue to-accent-violet bg-clip-text text-transparent">
                &lt;PM /&gt;
              </span>
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-gray-400">
              Junior AI Developer | Multi-platform Software Engineer | AI Agents
              & SaaS Solutions
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase text-gray-200">
              Navegaci&oacute;n
            </h2>
            <nav className="flex flex-col items-center gap-3 md:items-start">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group relative text-sm text-gray-400 transition-colors hover:text-accent-violet"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent-violet transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase text-gray-200">
              S&iacute;gueme
            </h2>
            <div className="flex justify-center gap-4 md:justify-start">
              {socialLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                    aria-label={link.label}
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="rounded-lg border border-white/10 bg-white/5 p-3 text-gray-400 transition-colors hover:border-accent-violet/30 hover:text-accent-violet"
                  >
                    <Icon className="size-6" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-8 text-center text-sm text-gray-400 md:flex-row md:items-center md:justify-between md:text-left">
          <p>(c) 2026 Pedro Jos&eacute; Mesa. Todos los derechos reservados.</p>
          <div className="flex flex-col gap-2 md:items-end">
            <div className="flex justify-center gap-5 md:justify-end">
              <Link
                href="#contact"
                className="transition-colors hover:text-accent-violet"
              >
                Privacy Policy
              </Link>
              <Link
                href="#contact"
                className="transition-colors hover:text-accent-violet"
              >
                Terms of Service
              </Link>
            </div>
            <p>Ultima actualizacion: 2026-06-24</p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
