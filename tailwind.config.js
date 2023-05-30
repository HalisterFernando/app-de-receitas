/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        "slide-down": {
          '0%': { opacity: 0, transform: 'translateY(-100%)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        "slide-up": {
          '0%': { opacity: 0, transform: 'translateY(100%)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        "show-alert": {
          '0%': { opacity: 0, transform: 'translateY(100%)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        }
      },
      animation: {
        'slide-down': 'slide-down 1s ease-in-out',
        'slide-up': 'slide-up 1s ease-in-out',
        'alert': 'slide-down 0.5s ease-in-out'
      }
    },
  },
  plugins: [],
};
