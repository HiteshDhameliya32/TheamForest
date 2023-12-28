/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  
  // theme: {
  //   extend: {
  //     backgroundImage: {
  //       'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  //       'gradient-conic':
  //         'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
  //     },
  //   },
  // },

  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    container: {
      center: true,
      padding: '1rem',
    },
    screens: {
      'sm': '540px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1172px',
    },
    colors: {
      transperent: 'transperent',
      current: 'currentColor',
      green: {    
        DEFAULT: "#3EC37D",
        light: "#EFFFFB",
        semilight: "#C5EDD8",
      },
      blue: '#4F98CA',
      dark: {
        DEFAULT: "#272727",
        light: "#7D7D7D",
        semilight: "#686868",
      },
      yellow: '#F9EBCA',
      muted: '#A9A9A9',
      light: '#DFDFDF',
      white: '#FFFFFF',
    },
    boxShadow: {
      "custom":
        "0px 16px 48px rgba(39, 39, 39, 0.1)",
    },
    extend: {},
  },
  plugins: [],
}
