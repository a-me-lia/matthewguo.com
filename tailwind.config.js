/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      fontFamily: {
        space: ['var(--font-space-grotesk)'],
        sans: ['var(--font-inter)'],
      },
      colors: {
        primary: '#190038',
        darkAccent: '#2E0067',
        darkerPrimary: '#06002E',
        lightaccent: '#5F077D',
        darkbg: '#06002E',
      },
      animation: {
        marqueeSmall: 'marquee 30s linear infinite',
        marqueeLarge: 'marquee 40s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '25%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(-200%)' },
          '75%': { transform: 'translateX(-300%)' },
          '100%': { transform: 'translateX(-400%)' },
        },
      },
      rotate: {
        38: '38deg',
      },
    },
  },
  plugins: [],
};
