/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#f0f4ff',
          100: '#e0e9ff',
          200: '#c7d6ff',
          300: '#a5b8ff',
          400: '#7c8fff',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        },
        gold: {
          50:  '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        nova: {
          dark:  '#08080f',
          deeper:'#0d0d1a',
          card:  '#12121f',
          border:'#1e1e34',
          muted: '#6b6b8a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'skeuomorphic-dark': 'inset 0 1px 1px rgba(255,255,255,0.05), 0 10px 20px rgba(0,0,0,0.8)',
        'skeuomorphic-dark-sm': 'inset 0 1px 1px rgba(255,255,255,0.05), 0 8px 20px rgba(0,0,0,0.8)',
        'skeuomorphic-active': 'inset 0 1px 1px rgba(255,255,255,0.05), 0 4px 8px rgba(0,0,0,0.5)',
        'skeuomorphic-input': 'inset 0 2px 4px rgba(0,0,0,1), 0 1px 0 rgba(255,255,255,0.05)',
        'nova': '0 0 0 1px rgba(99,102,241,0.15), 0 4px 16px rgba(99,102,241,0.10)',
        'nova-lg': '0 0 0 1px rgba(99,102,241,0.2), 0 8px 32px rgba(99,102,241,0.15)',
        'gold': '0 0 20px rgba(251,191,36,0.25)',
      },
      backgroundImage: {
        'nova-gradient': 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a78bfa 100%)',
        'gold-gradient': 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)',
        'dark-mesh': 'radial-gradient(at 40% 20%, hsla(252,95%,60%,0.08) 0px, transparent 50%), radial-gradient(at 80% 80%, hsla(260,95%,55%,0.06) 0px, transparent 50%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'blob': 'blob 7s infinite',
        'gradient': 'gradient 4s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideUp: { '0%': { transform: 'translateY(20px)', opacity: '0' }, '100%': { transform: 'translateY(0)', opacity: '1' } },
        slideDown: { '0%': { transform: 'translateY(-20px)', opacity: '0' }, '100%': { transform: 'translateY(0)', opacity: '1' } },
        blob: {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '33%': { transform: 'translate(30px,-50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px,20px) scale(0.9)' },
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
}
