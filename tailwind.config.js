// See https://tailwindcss.com/docs/configuration for details
const selectorParser = require('postcss-selector-parser');
const hexToRgb = require('hex-to-rgb');

const breakpoints = require('./tailwind/breakpoints');
const spacing = require('./tailwind/spacing');
const fontSize = require('./tailwind/font-size');
const colors = require('./tailwind/colors');

const screens = Object.assign(
  {},
  ...Object.keys(breakpoints).map((breakpoint) => ({
    [breakpoint]: `${breakpoints[breakpoint]}px`,
  }))
);

module.exports = {
  theme: {
    screens,
    spacing,
    minHeight: spacing,
    maxWidth: spacing,
    fontSize,
    letterSpacing: {
      tightest: '-3px',
      tighter: '-2px',
      tight: '-1px',
      normal: '0',
      wide: '1px',
      wider: '2px',
      widest: '3px',
    },
    extend: {
      colors,
      opacity: {
        important: '1 !important',
      },
    },
    fontFamily: {
      sans: [
        "'Open Sans'",
        '-apple-system',
        'BlinkMacSystemFont',
        'Helvetica Neue',
        'Arial',
        'sans-serif',
      ],
    },
  },
  variants: {
    opacity: ['group-hover', 'hover', 'responsive'],
    backgroundColor: ['group-hover'],
    width: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.transition': {
          transition: 'all 0.2s ease-in-out',
        },
        '.shift-0': {
          transform: `translateY(${spacing['0']})`,
        },
        '.shift-y-16': {
          transform: `translateY(${spacing['16']})`,
        },
        '.-shift-y-64': {
          transform: `translateY(-${spacing['64']})`,
        },
        '.-shift-y-96': {
          transform: `translateY(-${spacing['96']})`,
        },
        '.gradient-y-transparent-lightgrey': {
          background: `linear-gradient(to bottom, rgba(${hexToRgb(
            colors.lightgrey
          ).join(', ')}, 0), ${colors.lightgrey})`,
        },
        '.gradient-y-transparent-darkgrey': {
          background: `linear-gradient(to bottom, rgba(${hexToRgb(
            colors.darkgrey
          ).join(', ')}, 0), ${colors.darkgrey})`,
        },
        '.gradient-y-lightgrey-transparent': {
          background: `linear-gradient(to top, rgba(${hexToRgb(
            colors.lightgrey
          ).join(', ')}, 0), ${colors.lightgrey})`,
        },
        '.gradient-y-darkgrey-transparent': {
          background: `linear-gradient(to top, rgba(${hexToRgb(
            colors.darkgrey
          ).join(', ')}, 0), ${colors.darkgrey})`,
        },
      };

      addUtilities(newUtilities, [
        'responsive',
        'hover',
        'group-hover',
        'group-2-hover',
      ]);
    },
    function ({ addVariant }) {
      addVariant('group-2-hover', ({ modifySelectors, separator }) => {
        return modifySelectors(({ selector }) => {
          return selectorParser((selectors) => {
            selectors.walkClasses((sel) => {
              sel.value = `group-2-hover${separator}${sel.value}`;
              sel.parent.insertBefore(
                sel,
                selectorParser().astSync('.group-2:hover ')
              );
            });
          }).processSync(selector);
        });
      });
    },
  ],
};
