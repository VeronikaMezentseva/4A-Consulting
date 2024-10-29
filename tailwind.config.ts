import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'white': '#ffffff',
      'main-font': '#2D3242',
      'aqua': '#01B9C5',
      'accent': '#FD4D35',
      'warn': '#FD4D35',
      'link': '#2D97F9',
      'overlay': '#00000066',
      'last-chance-title': '#12191D',
      'light-border': '#E7EAF1',
      'radio-border': '#555965',
      gray: {
        100: '#F5F7F7',
        200: '#818798',
        300: '#95979F',
        400: '#2F4353',
        500: '#687078',
        600: '#D3D6DD'
      },

    },
    fontSize: {
      timer: '3.75rem', //60
      price: '3.125rem', //50
      salePercent: '1.167rem', //18.67
      title: '2.5rem', //40
      xl: '2.375rem', //38
      l: '1.875rem', //30
      m: '1.5rem', //24
      s: '1.25rem', //20
      xs: '1.125rem', //18
      xxs: '1rem', //16
      conditions: '0.875rem' //14
    },
    fontFamily: {
      'Rubik': ['Rubik', 'sans'],
      'PT-Root-UI_Bold': ['PT-Root-UI_Bold', 'sans'],
      'PT-Root-UI_Light': ['PT-Root-UI_Light', 'sans'],
      'PT-Root-UI_Medium': ['PT-Root-UI_Medium', 'sans'],
      'PT-Root-UI_Regular': ['PT-Root-UI_Regular', 'sans'],
      'Bebas-Neue': ['Bebas-Neue', 'sans']
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      gridTemplateColumns: {
        cardsWidth: 'repeat(3, minmax(0, 187px))',
        mainGrid: '0.82fr 1fr'
      },
      animation: {
        'disappearing': 'disappearing 1s linear forwards',
        'pulse': 'pulse 1s linear infinite',
        'appearance': 'appearance 1s linear forwards',
        'test': 'test 4s linear forwards'
      },
      keyframes: {
        pulse: {
          '0%, 100%': {
            opacity: '1'
          },
          '50%': {
            opacity: '.5'
          }
        },
        disappearing: {
          '0%': {
            opacity: '1'
          },
          '100%': {
            opacity: '0'
          }
        },
        appearance: {
           '0%': {
            opacity: '0'
           },
           '100%': {
            opacity: '1'
           }
        },
        test: {
          '0%': {
            opacity: '1'
          },
          '50%': {
            opacity: '0'
          },
          '100%': {
            opacity: '1'
          }
        }
      }
    },
  },
  plugins: [],
};
export default config;
