
module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js','./pages/**/*.jsx', './components/**/*.jsx'],
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
