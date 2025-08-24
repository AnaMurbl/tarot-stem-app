export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'title': ['Glass Antiqua', 'serif'],
        'body': ['Alegreya Sans', 'sans-serif'],
      },
      colors: {
        purple: {
          50: '#faf7ff',
          100: '#f3ebff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7c3aed',
          800: '#6b21a8',
          900: '#581c87',
        }
      }
    }
  }
}