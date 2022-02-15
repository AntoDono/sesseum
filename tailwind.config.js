module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'redressed': ['Redressed', 'cursive']
      },
      colors: {
        'tdark': '#325863',
        'torange': '#D99A3D',
        'tred': '#F75151',
        'tdred': '#8F282B'
      }
    },
  },
  plugins: [],
}
