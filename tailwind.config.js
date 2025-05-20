/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,html,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      tablet: { max: '768px' },
      mobile: { max: '600px' },
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      poppins: "'Poppins', sans-serif;",
      jakarta: "'Plus Jakarta Sans', 'sans-serif'",
      paytone: "'Paytone One', 'sans-serif'",
    },
    extend: {
      padding: {
        102: '408px',
        108: '432px',
        116: '464px',
      },
      fontSize: {
        '4.5xl': '40px',
      },
      colors: {
        'primary-color': '#087BB4',
        'secondary-color': '#FE892A',
        title: '#151E22',
        body: '#2F3E45',
        small: '#6E777C',
        'card-background': '#E5F0F5',
        'error-state': '#FF3B3B',
        'warning-state': '#FFCC00',
        'info-state': '#0063F7',
        'success-state': '#06C270',
        'audemy-blue': '#087BB4',
      },
      keyframes: {
        'fade-slide-in': {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-slide-out': {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'fade-slide-in': 'fade-slide-in 0.2s ease-out forwards',
        'fade-slide-out': 'fade-slide-out 0.2s ease-in forwards',
      },
    },
  },

  plugins: [],
};
