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
        'primaryDark': '#1e2328',
        'secondaryDark': '#2a2e34',
        'lightgray': '#3b3f46',
        'primaryYellow': '#f5a302',
        'secondaryYellow': '#f5b301',
        'lightyellow': '#f3d053',
      }
    },
  },
  plugins: [],
}
