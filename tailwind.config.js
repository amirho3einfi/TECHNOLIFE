/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {},
    screens:{
      'phone':'0px',
      'tablet':'640px',
      'laptop':'1000px',
      

      'desktop':'1380px',
      'bigdesktop':'1600px'


    },
     fontFamily:{
      yekan_reg: ["yekan-reg"],
      yekan_med:["yekan-med"]
      
    }
  },
  plugins: [],
}

