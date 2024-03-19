const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { nextui } = require('@nextui-org/react');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'app/**/*!(*.stories|*.spec).{ts,tsx,html}'),
    join(__dirname, 'components/**/*!(*.stories|*.spec).{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
    join(
      __dirname,
      '../..',
      'node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
    ),
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [
    nextui({
      layout: {
        spacingUnit: 4, // in px
        disabledOpacity: 0.5, // this value is applied as opacity-[value] when the component is disabled
        dividerWeight: '1px', // h-divider the default height applied to the divider component
        fontSize: {
          tiny: '0.75rem', // text-tiny
          small: '0.875rem', // text-small
          medium: '1rem', // text-medium
          large: '1.125rem', // text-large
        },
        lineHeight: {
          tiny: '1rem', // text-tiny
          small: '1.25rem', // text-small
          medium: '1.5rem', // text-medium
          large: '1.75rem', // text-large
        },
        radius: {
          small: '8px', // rounded-small
          medium: '12px', // rounded-medium
          large: '14px', // rounded-large
        },
        borderWidth: {
          small: '1px', // border-small
          medium: '2px', // border-medium (default)
          large: '3px', // border-large
        },
      },
      themes: {
        light: {
          colors: {
            primary: '#FFFFFF',
          },
        },
        dark: {
          colors: {
            primary: '#000000',
          },
        },
      },
    }),
  ],
};
