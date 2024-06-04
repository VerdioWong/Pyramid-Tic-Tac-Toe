module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Ensure Tailwind scans your src folder
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
