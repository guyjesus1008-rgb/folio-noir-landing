/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep':    '#0F1419',
        'mid':     '#1A1F2E',
        'dark':    '#0A0E14',
        'cream':   '#F5F1E8',
        'olive':   '#A8B5A0',
        'gold':    '#D4AF37',
        'gold-lt': '#E8C547',
      },
      fontFamily: {
        serif:  ['Cormorant Garamond', 'Georgia', 'serif'],
        sans:   ['Manrope', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest': '0.2em',
        'editorial': '0.08em',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      fontSize: {
        'display': ['clamp(72px, 9vw, 128px)', { lineHeight: '1.05', fontWeight: '400' }],
        'headline': ['clamp(48px, 6vw, 84px)', { lineHeight: '1.1', fontWeight: '400' }],
      },
    },
  },
  plugins: [],
}
