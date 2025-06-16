/** @type {import('tailwindcss').config} */

const ramps = ['wds','fccb','insurance', 'sendit', 'vtm', 'eft'];
const safelistPatterns = ramps.flatMap((ramp) => [
  {
  pattern: new RegExp(`bg-${ramp}-(50|100|200|300|400|500|600|700|800|900)`),
  },
  {
  pattern: new RegExp(`text-${ramp}-(50|100|200|300|400|500|600|700|800|900)`),
  }
  ]);

module.exports = {
  content: [
    "./src/**/*.{html,ts,tsx,js}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors:  {
        wds: {
          50:'#F3F4F8',
          100:'#E1E4ED',
          200:'#C5CADB',
          300:'#A6AEC6',
          400:'#8791AD',
          500:'#566483',
          600:'#4E5B77',
          700:'#414C65',
          800:'#343C50',
          900:'#262A38',
        },
        fccb:{
          50:'#F8E5E5',
          100:'#F1C8C8',
          200:'#EBAAAA',
          300:'#E38C8C',
          400:'#DC6E6E',
          500:'#D25A5A',
          600:'#B84D4D',
          700:'#9F4141',
          800:'#853636',
          900:'#6B2B2B',
        },
        ins:{
          50:'#E1EFF4',
          100:'#B9D7E5',
          200:'#8ABBD2',
          300:'#5C9EBE',
          400:'#2E7FA4',
          500:'#10435C',
          600:'#0F3F57',
          700:'#0C3245',
          800:'#092634',
          900:'#061A22',
        },
        sdi:{
          50:'#F3FBF9',
          100:'#E0F5EE',
          200:'#C3E9DE',
          300:'#A1D8C8',
          400:'#84C5B2',
          500:'#70B39F',
          600:'#5CA28D',
          700:'#4C917A',
          800:'#3B8167',
          900:'#2C6653',
        },
        vtm:{
          50:'#F0F2F6',
          100:'#E0E5EC',
          200:'#D7DEE5',
          300:'#BEC8D5',
          400:'#A3B2C7',
          500:'#95A5BC',
          600:'#8499B5',
          700:'#738EAE',
          800:'#657FA2',
          900:'#556686',
        },
        eft:{
          50:'#F2F2F2',
          100:'#E0E0E0',
          200:'#C4C4C4',
          300:'#A0A0A0',
          400:'#707070',
          500:'#4F4F4F',
          600:'#3A3A3A',
          700:'#2C2C2C',
          800:'#1A1A1A',
          900:'#000000',
          'accent':'#99866A',
        },

      },
      fontFamily: {
        sans: ['Lato', 'ui-sans-serif', 'system-ui'],
      }
    }
  },
  safelist: safelistPatterns,
  plugins: [],
}
