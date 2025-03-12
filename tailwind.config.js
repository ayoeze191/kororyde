module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        fontFamily: {
          geist: ['var(--font-geist-mono)', 'monospace'],
          Bricolage_Grotesque: ['var(--font-bricolage-grotesque)', 'sans-serif'],
          Montserrat: ['var(--font-montserrat)', 'sans-serif'],
        },
      },
    },
    plugins: [],
  };