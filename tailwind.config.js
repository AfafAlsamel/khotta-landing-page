module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'image': "url('/herobg.svg')",
        'image2' : "url('/mb-hero-bg.svg')",
        'siriusbg' : "url('/rockets-bg.svg')",
        'footerbg' : "url('/footerbg.svg')",
       }),

       backgroundColor: theme => ({
        'primary': '#42CA90',
        'black': '#1C1D22',
       }),
       borderColor: theme => ({
        'primary': '#42CA90',
       })
       
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}