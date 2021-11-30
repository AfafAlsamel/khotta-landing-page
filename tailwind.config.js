module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero': "url('/bg-images/hero-bg.svg')",
        'heromb' : "url('/bg-images/mb-hero-bg.svg')",
        'siriusbg' : "url('/bg-images/rockets-bg.svg')",
        'footerbg' : "url('/bg-images/footer-bg.svg')",
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