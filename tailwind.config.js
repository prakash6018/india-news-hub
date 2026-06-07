/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#C41E3A',
          saffron: '#FF6B35',
          navy: '#1A1A2E',
          dark: '#16213E',
        },
      },
      fontFamily: {
        headline: ['Georgia', 'Times New Roman', 'serif'],
      },
    },
  },
  plugins: [],
};
