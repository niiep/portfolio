import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0B0F19',
        'dark-gray': '#1a1f2e',
        'card-dark': '#0f1419',
        accent: {
          violet: '#a78bfa',
          'violet-dark': '#7c3aed',
          blue: '#60a5fa',
          'blue-dark': '#3b82f6',
          glow: '#a78bfa',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'aurora': 'radial-gradient(circle at 50% 50%, rgba(167, 139, 250, 0.15) 0%, transparent 50%)',
      },
      backdropBlur: {
        xs: '2px',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'var(--font-geist-mono)'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(10px)' },
        },
        glow: {
          '0%, 100%': { 
            boxShadow: '0 0 5px rgba(167, 139, 250, 0.5), 0 0 10px rgba(167, 139, 250, 0.3)' 
          },
          '50%': { 
            boxShadow: '0 0 20px rgba(167, 139, 250, 0.8), 0 0 30px rgba(167, 139, 250, 0.5)' 
          },
        },
        'pulse-glow': {
          '0%, 100%': { 
            opacity: '1',
            boxShadow: '0 0 20px rgba(167, 139, 250, 0.5)',
          },
          '50%': { 
            opacity: '0.8',
            boxShadow: '0 0 30px rgba(167, 139, 250, 0.8)',
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
