module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'image': "url('/frame2.svg')",
        'image2' : "url('/rocketsbg.svg')",
        'footerbg' : "url('/footerbg.svg')",
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