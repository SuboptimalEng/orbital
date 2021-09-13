// NOTE: Use this to add transparency.
// function withOpacity(variableName) {
//   return ({ opacityValue }) => {
//     if (opacityValue === undefined) {
//       opacityValue = 1;
//     }
//     return `rgba(var(${variableName}), ${opacityValue})`;
//   };
// }

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // NOTE: This is for reference.
        // fg: withOpacity('--theme-foreground'),
        // bg: withOpacity('--theme-background'),

        'activity-bg': 'var(--theme-activity-bg)',
        'sidebar-bg': 'var(--theme-sidebar-bg)',
        'editor-bg': 'var(--theme-editor-bg)',

        red: 'var(--theme-red)',
        blue: 'var(--theme-blue)',
        green: 'var(--theme-green)',
        orange: 'var(--theme-orange)',
        purple: 'var(--theme-purple)',
        yellow: 'var(--theme-yellow)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar')],
};
