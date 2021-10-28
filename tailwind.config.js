module.exports = {
  purge: ['./assets/app/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#ffffff',
      black: '#151414',
      coral: {
        100: '#530408',
        90: '#750C12',
        80: '#97181E',
        70: '#B9272E',
        60: '#DB3A42',
        50: '#FD5059',
        40: '#FF9FA4',
        30: '#FFC6C9'
      },
      gray: {
        100: '#2D344A',
        90: '#444D67',
        80: '#9DA5BF',
        70: '#C1C8DC',
        60: '#E8ECF9',
        50: '#EFF2FC',
        40: '#F7F9FE',
        30: '#FDFDFF'
      },
      purple: {
        100: '#090442',
        90: '#120C64',
        80: '#1F1786',
        70: '#2F26A8',
        60: '#4338CA',
        50: '#5A4EEC',
        40: '#8379FB',
        30: '#A8A1FF'
      },
      tail: {
        100: '#005C57',
        90: '#037E77',
        80: '#10A098',
        70: '#22C2B9',
        60: '#38E4DA',
        50: '#52FFF4',
        40: '#79FFF7',
        30: '#A0FFF9'
      },
      brown: {
        100: '#522600',
        90: '#7B3900',
        80: '#A34C00',
        70: '#CC6000'
      },
      orange: {
        60: '#F57301',
        50: '#FF902F',
        40: '#FFA85C',
        30: '#FFC18A'
      }
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
}
