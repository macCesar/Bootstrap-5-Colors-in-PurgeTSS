// ./purgetss/config.js

// Bootstrap 5 Alpha 2 | Theme Colors
// https://v5.getbootstrap.com/docs/5.0/customize/color/#theme-colors

module.exports = {
  purge: {
    mode: 'all',
    method: 'sync', // set how to execute auto-purging: sync or async

    // These options are passed directly to PurgeTSS
    options: {
      missing: true, // Report missing classes
      widgets: false, // Purge widgets too
      safelist: require('./safelist'), // Array of classes to keep
      plugins: [] // Array of properties to ignore
    }
  },
  theme: {
    extend: {
      textColor: {
        white: '#fff',
        black: '#000',
        body: '#212529',
        muted: '#6c757d',
        'black-50': 'rgba(0, 0, 0, .5)',
        'white-50': 'rgba(255, 255, 255, .5)'
      },
      fontSize: { xxs: '.625rem' }
    },
    colors: {
      primary: '#0d6efd',
      secondary: '#6c757d',
      success: '#198754',
      danger: '#dc3545',
      warning: '#ffc107',
      info: '#0dcaf0',
      light: '#f8f9fa',
      dark: '#212529',
      white: '#FFFFFF',
      transparent: 'transparent',
      blue: {
        100: '#cfe2ff',
        200: '#9ec5fe',
        300: '#6ea8fe',
        400: '#3d8bfd',
        500: '#0d6efd',
        600: '#0a58ca',
        700: '#084298',
        800: '#052c65',
        900: '#031633',
        default: '#0d6efd'
      },
      indigo: {
        100: '#e0cffc',
        200: '#c29ffa',
        300: '#a370f7',
        400: '#8540f5',
        500: '#6610f2',
        600: '#520dc2',
        700: '#3d0a91',
        800: '#290661',
        900: '#140330',
        default: '#6610f2'
      },
      purple: {
        100: '#e2d9f3',
        200: '#c5b3e6',
        300: '#a98eda',
        400: '#8c68cd',
        500: '#6f42c1',
        600: '#59359a',
        700: '#432874',
        800: '#2c1a4d',
        900: '#160d27',
        default: '#6f42c1'
      },
      pink: {
        100: '#f7d6e6',
        200: '#efadce',
        300: '#e685b5',
        400: '#de5c9d',
        500: '#d63384',
        600: '#ab296a',
        700: '#801f4f',
        800: '#561435',
        900: '#2b0a1a',
        default: '#d63384'
      },
      red: {
        100: '#f8d7da',
        200: '#f1aeb5',
        300: '#ea868f',
        400: '#e35d6a',
        500: '#dc3545',
        600: '#b02a37',
        700: '#842029',
        800: '#58151c',
        900: '#2c0b0e',
        default: '#dc3545'
      },
      orange: {
        100: '#ffe5d0',
        200: '#fecba1',
        300: '#feb272',
        400: '#fd9843',
        500: '#fd7e14',
        600: '#ca6510',
        700: '#984c0c',
        800: '#653208',
        900: '#331904',
        default: '#fd7e14'
      },
      yellow: {
        100: '#fff3cd',
        200: '#ffe69c',
        300: '#ffda6a',
        400: '#ffcd39',
        500: '#ffc107',
        600: '#cc9a06',
        700: '#997404',
        800: '#664d03',
        900: '#332701',
        default: '#ffc107'
      },
      green: {
        100: '#d1e7dd',
        200: '#a3cfbb',
        300: '#75b798',
        400: '#479f76',
        500: '#198754',
        600: '#146c43',
        700: '#0f5132',
        800: '#0a3622',
        900: '#051b11',
        default: '#198754'
      },
      teal: {
        100: '#d2f4ea',
        200: '#a6e9d5',
        300: '#79dfc1',
        400: '#4dd4ac',
        500: '#20c997',
        600: '#1aa179',
        700: '#13795b',
        800: '#0d503c',
        900: '#06281e',
        default: '#20c997'
      },
      cyan: {
        100: '#cff4fc',
        200: '#9eeaf9',
        300: '#6edff6',
        400: '#3dd5f3',
        500: '#0dcaf0',
        600: '#0aa2c0',
        700: '#087990',
        800: '#055160',
        900: '#032830',
        default: '#0dcaf0'
      },
      gray: {
        100: '#f8f9fa',
        200: '#e9ecef',
        300: '#dee2e6',
        400: '#ced4da',
        500: '#adb5bd',
        600: '#6c757d',
        700: '#495057',
        800: '#343a40',
        900: '#212529',
        default: '#adb5bd'
      }
    },
    Window: {
      default: {
        backButtonTitle: '', apply: 'bar-indigo-500 extend-safe-area-false bg-white'
      },
      ios: {
        apply: 'translucent-false nav-tint-white title-attributes-white'
      },
      android: {
        apply: 'theme-titanium-light-solid'
      }
    },
    TabGroup: {
      default: {
        apply: 'tabs-bg-indigo-500 active-title-white active-tint-white'
      },
      ios: {
        apply: 'title-indigo-100 tint-indigo-100'
      },
      android: {
        apply: 'shift-mode-none android:style-tabs-bottom-navigation auto-tab-title'
      }
    },
    Tab: {
      android: {
        apply: 'bg-focused-indigo-600 title-white'
      }
    },
    ScrollView: {
      default: {
        apply: 'content-w-screen content-h-auto'
      },
      android: {
        apply: 'scroll-type-vertical'
      }
    },
    Button: {
      default: {
        apply: 'font-regular'
      },
      android: {
        apply: 'shadow-none'
      }
    },
    Label: {
      default: {
        apply: 'text-dark font-regular text-base'
      }
    },
    '.alert': {
      default: {
        apply: 'border-(3px) rounded-2'
      },
      heading: {
        apply: 'text-2xl'
      },
      primary: {
        apply: 'border-(#b6d4fe) bg-blue-100 text-blue-700'
      },
      secondary: {
        apply: 'text-(#41464b) bg-(#e2e3e5) border-(#d3d6d8)'
      },
      success: {
        apply: 'border-(#badbcc) bg-green-100 text-green-700'
      },
      danger: {
        apply: 'border-(#f5c2c7) bg-red-100 text-red-700'
      },
      warning: {
        apply: 'border-(#ffecb5) bg-yellow-100 text-yellow-800'
      },
      info: {
        apply: 'border-(#b6effb) bg-cyan-100 text-cyan-800'
      },
      light: {
        apply: 'text-(#636464) bg-(#fefefe) border-(#fdfdfe)'
      },
      dark: {
        apply: 'text-(#141619) bg-(#d3d3d4) border-(#bcbebf)'
      }
    },
    fontFamily: { mono: 'FiraCode-Regular' }
  }
}
