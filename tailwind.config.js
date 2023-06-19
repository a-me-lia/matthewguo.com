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
        'inter' : ['Inter', 'sans-serif'],
        'space' : ['Space Grotesk', 'sans-serif'],
      },
      
      colors: {
        primary: '#190038',
        darkAccent: '#2E0067',
        darkerPrimary: '#06002E',
        lightaccent: '#5F077D',
        darkbg: '#06002E'
      },
    },
  },
  plugins: [],
}
