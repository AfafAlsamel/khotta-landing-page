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
        'secondryblack': '#25262D',
        'mainbg':'#F6F8F9',
       }),
       borderColor: theme => ({
        'primary': '#42CA90',
       }),

       textColor: {
        'primary': '#42CA90',
        'black': '#1C1D22',
      }
       
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}