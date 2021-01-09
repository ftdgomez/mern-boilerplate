
module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './layout/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    
    extend: {
      colors: {
       primary: '#6875f5',
        secondary: '#42389d'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
