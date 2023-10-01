/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
//     './src/components/**/*.{js,ts,jsx,tsx,mdx}',
//     './src/app/**/*.{js,ts,jsx,tsx,mdx}'
//   ],
//   theme: {
//     screens : {
//       xs : "375px",
//       sm : "600px",
//       md : "900px",
//       lg : "1200px",
//       xl : "1536px",
//     },
//     extend: {
//       backgroundImage: {
//         'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
//         'gradient-conic':
//           'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
//       }
//     },
//     fontFamily: {
//       IRANSansWeb: 'IRANSans'
//     }
//   },
//   plugins: []
// };




/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss'

const config: Config = {
  // prefix:'pw-',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
    },

    screens : {
      xs : "375px",
      sm : "600px",
      md : "900px",
      lg : "1200px",
      xl : "1536px",
    },
    // screens: {
    //   sm: '640px',
    //   md: '768px',
    //   lg: '1024px',
    //   xl: '1280px',
    //   '2xl': '1536px',
    // },
    colors: {
      'tahiti': {
        light: '#67e8f9',
        DEFAULT: '#06b6d4',
        dark: '#0e7490',
      },
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pinktest': {
        light: '#FFBFBF',
        DEFAULT: '#ff49db',
        dark: '#79155B'
      },
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    // spacing: {
    //   // DEFAULT: '6rem',
    //   px: '1px',
    //   0: '0px',
    //   0.5: '0.125rem',
    //   1: '0.25rem',
    //   1.5: '0.375rem',
    //   2: '0.5rem',
    //   2.5: '0.625rem',
    //   3: '0.75rem',
    //   3.5: '0.875rem',
    //   4: '1rem',
    //   5: '1.25rem',
    //   6: '1.5rem',
    //   7: '1.75rem',
    //   8: '2rem',
    //   9: '2.25rem',
    //   10: '2.5rem',
    //   11: '2.75rem',
    //   12: '3rem',
    //   14: '3.5rem',
    //   16: '4rem',
    //   20: '5rem',
    //   24: '6rem',
    //   28: '7rem',
    //   32: '8rem',
    //   36: '9rem',
    //   40: '10rem',
    //   44: '11rem',
    //   48: '12rem',
    //   52: '13rem',
    //   56: '14rem',
    //   60: '15rem',
    //   64: '16rem',
    //   72: '18rem',
    //   80: '20rem',
    //   96: '24rem',
    // },
    borderWidth: {
      DEFAULT: '10px',
      0: '0px',
      2: '2px',
      4: '4px',
      8: '8px',
    },
    boxShadow: {
      DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
      sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
      '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
      inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
      none: 'none',
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    //  fontFamily: {
    //   IRANSansWeb: 'IRANSans'
    // },
    minHeight: {
      0: '0px',
      full: '100%',
      screen: '100vh',
      svh: '100svh',
      lvh: '100lvh',
      dvh: '100dvh',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content',
    },
    minWidth: {
      0: '0px',
      full: '100%',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content',
    },
    width: {
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.666667%',
      '2/6': '33.333333%',
      '3/6': '50%',
      '4/6': '66.666667%',
      '5/6': '83.333333%',
      '1/12': '8.333333%',
      '2/12': '16.666667%',
      '3/12': '25%',
      '4/12': '33.333333%',
      '5/12': '41.666667%',
      '6/12': '50%',
      '7/12': '58.333333%',
      '8/12': '66.666667%',
      '9/12': '75%',
      '10/12': '83.333333%',
      '11/12': '91.666667%',
      full: '100%',
      screen: '100vw',
      svw: '100svw',
      lvw: '100lvw',
      dvw: '100dvw',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content',
    },
    borderRadius: {
      DEFAULT: '9999px',
      none: '0px',
      sm: '0.125rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
      '2xl': '1rem',
      '3xl': '1.5rem',
      // full: '9999px',
    },
    fontWeight: {
      // DEFAULT:'850',
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    animation: {
      none: 'none',
      spin: 'spin 1s linear infinite',
      ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
      pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      bounce: 'bounce 1s infinite',
    },
    blur: {
      0: '0',
      none: '0',
      sm: '4px',
      DEFAULT: '8px',
      md: '12px',
      lg: '16px',
      xl: '24px',
      '2xl': '40px',
      '3xl': '64px',
    },
    opacity: {
      0: '0',
      5: '0.05',
      10: '0.1',
      15: '0.15',
      20: '0.2',
      25: '0.25',
      30: '0.3',
      35: '0.35',
      40: '0.4',
      45: '0.45',
      50: '0.5',
      55: '0.55',
      60: '0.6',
      65: '0.65',
      70: '0.7',
      75: '0.75',
      80: '0.8',
      85: '0.85',
      90: '0.9',
      95: '0.95',
      100: '1',
    },

        extend: {
          backgroundColor : {
            // کد رنگ های 
            // سبز هدر بالای صفحات  DEF4EA  9BDFBF  69F2B2  27F494  1EF490  0CDA7B
            'ms-headers-green-15': '#DEF4EA',
            'ms-headers-green-25': '#69F2B2',
            'ms-headers-green-35': '#27F494',
            'ms-headers-green-44': '#1EF490',
            'ms-headers-green-55': '#0CDA7B',
            // کد رنگ  پس زمینه و کارت  FFFFFF  F8F8F8
            'ms-back-card-gray-12': '#F8F8F8',
            'ms-back-card-gray-22': '#FFFFFF',

            // کد رنگ های سبز دکمه ها F3FCF8 00D170 06AB5F
            'ms-btn-green-13': '#F3FCF8',
            'ms-btn-green-23': '#00D170',
            'ms-btn-green-33': '#06AB5F',
            // کد رنگ زرشکی
            'ms-crimson-11': '#B40000',
            // کد رنگ های زرد داخل صفحات
            'ms-yellow-14': '#FFF0C5',
            'ms-yellow-24': '#E0C653',
            'ms-yellow-33': '#F8C206',
            'ms-yellow-44': '#F5BB00',

            // شماره متن ها 11, 13, 14, 25
            "ms-text-xs-14" : "0.688rem",  //11px
            "ms-text-sm-24" : "0.75rem",   //12px
            "ms-text-lg-34" : "0.813rem",  //13px
            "ms-text-xl-44" : "0.875rem",  //14px

          },

          // کد رنگ های فونت
          colors : {
              "ms-white"       : "#FFFFFF",
              "ms-yellow"      : "#F5BB00",
              "ms-crimson"     : "#B40000",
              "ms-green"       : "#03693A",
              "ms-gray-light"  : "#ACAEAB",
              "ms-gray"        : "#878787",
              "ms-thick-green24" : "#1B3D13",
          },

          fontFamily: {
            'ms-iranSansMobile': ['IRANSansMobile', "sans-serif"],
        },

          fontWeight: {
            "ms-UltraLight": "200",
            "ms-light":      "300",
            "ms-regular":    "400",
            "ms-medium":     "500",
            "ms-bold":       "700",
            "ms-black":      "900",
          },




   

         fontSize: {
            'ms-xs':   '.69rem',    // 11 px
            'ms-sm':   '.813rem',   // 13 px
            'ms-lg':   '.875rem',   // 14 px
            'ms-xl':   '.1.563rem', // 25 px
          },
    },
  },
  plugins: [],
}
export default config
