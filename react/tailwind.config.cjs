/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx',
            './index.html',],
  theme: {
    extend: {
      colors: { 
       
      },
      backgroundImage: {
      'nlw-gradient': 'linear-gradient(89.86deg, #9572FC 27.08%, #43E7AD 40.94%, #E1D55D 40.57%);',
        
        background: "url('/Fundo.svg')",
      'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
}
