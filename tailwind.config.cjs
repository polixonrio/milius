const config = {
  darkMode: 'media',
  mode: "jit",

	content: [
	  "./src/**/*.{html,js,svelte,ts}",
	  "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
	  "./node_modules/flowbite-svelte-blocks/**/*.{html,js,svelte,ts}",

	],


	theme: {
    extend: {
      backgroundImage: (theme) => ({
        'image-one':
          "url('/images/whaite.webp')",
        'image-two':
          "url('/images/ver.svg')",
      }),
      colors: {
        primary: {"50":"#fff1f2","100":"#ffe4e6","200":"#fecdd3","300":"#fda4af","400":"#fb7185","500":"#f43f5e","600":"#e11d48","700":"#be123c","800":"#9f1239","900":"#881337"},
        'fresh-eggplant': {
          '50': '#fff1fe',
          '100': '#ffe1fe',
          '200': '#ffc3fe',
          '300': '#ff94f9',
          '400': '#ff54f6',
          '500': '#ff16f4',
          '600': '#f500ff',
          '700': '#d100d9',
          '800': '#ad00b1',
          '900': '#800080',
          '950': '#620063',
      },
      }
    },
    fontFamily: {
      'body': [
      'Inter',
      'ui-sans-serif',
      'system-ui',
      '-apple-system',
      'system-ui',
      'Segoe UI',
      'Roboto',
      'Helvetica Neue',
      'Arial',
      'Noto Sans',
      'sans-serif',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
      'Noto Color Emoji'
  ],
    'sans': [
    'Inter',
    'ui-sans-serif',
    'system-ui',
    '-apple-system',
    'system-ui',
    'Segoe UI',
    'Roboto',
    'Helvetica Neue',
    'Arial',
    'Noto Sans',
    'sans-serif',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'Noto Color Emoji'
  ]
    }
  },
  variants: {
    extend: {
      backgroundImage: ['dark'],
    },
  },
  
	plugins: [
    require('@tailwindcss/aspect-ratio'),
	  require('flowbite/plugin'),
    require('tailwind-scrollbar'),


	],
	darkMode: 'class',
  };
  
  module.exports = config;
  