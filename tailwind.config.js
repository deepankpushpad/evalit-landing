module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        bold: 700,
        extrabold: 800,
      },
      colors: {
        primary: '#2C8800',
        secondary: '#176C88',
        tertiary: '#DFF6FE',
        green:{
          50:'#29BF53',
        },
        gray: {
          55:'#555555',
          72:'#727272',
        }
      },
      //create a gradient color

      gradientColorStops: (theme) => ({
        ...theme('colors'),
        primary: '#2C8800',
        secondary: '#176C88',
        tertiary: '#DFF6FE',
      }),
      //create a gradient color
      backgroundImage: (theme) => ({
        'gradient-primary': 'linear-gradient(45deg, #176C88 0%, #29BF53 100%)',
      }),
      textGradientColorStops: (theme) => theme('gradientColorStops'),
    },
    fontFamily: {
        kalam: ['Kalam', 'regular'],
        roboto: ['Roboto Slab', 'regular'],
        karma: ['Karma', 'regular'],
        inter: ['Inter', 'regular'],
    },
    screens: {
      xs:'400px',
      sm:'768px',
      md:'1024px',
      lg:'1280px',
      xl:'1536px',

    },
  },
  plugins: [],
};