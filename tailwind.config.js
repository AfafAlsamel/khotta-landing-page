module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'image': "url('/frame.svg')"
       }),

       backgroundColor: theme => ({
        'primary': '#42CA90',
        'black': '#1C1D22',
       })
       
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}