/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8E351C',
          50: '#FDF7F5',
          100: '#F9EDE9',
          200: '#F2D7CE',
          300: '#E7B5A5',
          400: '#B85D41',
          500: '#8E351C',
          600: '#7E2F18',
          700: '#692512',
          800: '#521D0E',
          900: '#3D1509',
        },
        dark: {
          DEFAULT: '#1F1513',
          card: '#291C19',
          border: '#3D2D29',
          muted: '#8A7B77',
          surface: '#18100E',
        },
        qhse: {
          DEFAULT: '#2E7D32',
          light: '#E8F5E9',
          50: '#F1F8F2',
          100: '#DDEEDF',
          500: '#2E7D32',
          600: '#256629',
          700: '#1B5E20',
          800: '#144618',
        },
        neutral: {
          soft: '#F8F6F4',
          border: '#EDE6E3',
          card: '#FFFFFF',
          text: '#2D2523',
          muted: '#6E6461',
        },
        accent: {
          copper: '#B85D41',
          gold: '#C28E35',
          warning: '#E65100',
        }
      },
      fontFamily: {
        heading: ['Syne', 'Montserrat', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'industrial': '0 4px 20px -2px rgba(31, 21, 19, 0.08), 0 2px 6px -1px rgba(31, 21, 19, 0.04)',
        'industrial-lg': '0 12px 35px -4px rgba(31, 21, 19, 0.12), 0 4px 12px -2px rgba(31, 21, 19, 0.06)',
        'industrial-copper': '0 10px 30px -5px rgba(142, 53, 28, 0.25)',
        'industrial-dark': '0 20px 40px -15px rgba(0, 0, 0, 0.5)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'industrial-pattern': 'radial-gradient(#EDE6E3 1px, transparent 1px)',
      }
    },
  },
  plugins: [],
}
