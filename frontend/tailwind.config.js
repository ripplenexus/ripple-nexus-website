
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontWeight: {
        '100': '100',
        '200': '200',
        '300': '300',
        '450': '450',
        '500': '500',
        '600': '600',
        '700': '700',
        '800': '800',
        '900': '900',
      },
      lineHeight: {
        'extra-tight': '1.4',
        'extra-loose': '3rem',
      },
      colors: {
        'button-light-blue': '#457fd7',
      }
    },
  },
  plugins: [],
}
