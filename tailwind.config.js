/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

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
        serif: ['var(--font-space)', ...fontFamily.serif],
        sans: ['var(--font-inter)', ...fontFamily.sans],
      },
      colors: {
        primary: '#190038',
        darkAccent: '#2E0067',
        darkerPrimary: '#06002E',
        lightaccent: '#5F077D',
        darkbg: '#06002E',
      },
    },
  },
  plugins: [],
};
