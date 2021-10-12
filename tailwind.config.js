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
        // TODO V2: This is for reference. Convert themes to RGB first.
        // 'activity-bg': withOpacity('--theme-activity-bg'),
        // 'activity-fg': withOpacity('--theme-activity-fg'),
        // 'activity-hover': withOpacity('--theme-activity-hover'),
        // 'activity-active': withOpacity('--theme-activity-active'),

        'activity-bg': 'var(--theme-activity-bg)',
        'activity-fg': 'var(--theme-activity-fg)',
        'activity-hover': 'var(--theme-activity-hover)',
        'activity-active': 'var(--theme-activity-active)',

        'search-bg': 'var(--theme-search-bg)',
        'search-fg': 'var(--theme-search-fg)',

        'editor-bg': 'var(--theme-editor-bg)',
        'editor-fg': 'var(--theme-editor-fg)',
        'editor-hover': 'var(--theme-editor-hover)',
        'editor-border': 'var(--theme-editor-border)',

        'card-bg': 'var(--theme-card-bg)',
        'card-fg': 'var(--theme-card-fg)',
        'preview-bg': 'var(--theme-preview-bg)',
        'preview-fg': 'var(--theme-preview-fg)',

        'status-bg': 'var(--theme-status-bg)',
        'status-fg': 'var(--theme-status-fg)',
        'status-hover': 'var(--theme-status-hover)',

        hyperlink: 'var(--theme-hyperlink)',

        'scrollbar-bg': 'var(--theme-scrollbar-bg)',
        'scrollbar-fg': 'var(--theme-scrollbar-fg)',

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
