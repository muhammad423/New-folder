/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 676px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },

   
    extend: {
      screens: {
        'xs': {'min':'300px', 'max':'675px'}, 
        // => @media (min-width: 992px) { ... }
      },

    },
  },
  plugins: [],
}
