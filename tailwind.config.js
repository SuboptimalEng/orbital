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
        'activity-fg': 'var(--theme-activity-fg)',
        'activity-hover': 'var(--theme-activity-hover)',
        'activity-active': 'var(--theme-activity-active)',
        'activity-border': 'var(--theme-activity-border)',

        'sidebar-bg': 'var(--theme-sidebar-bg)',
        'sidebar-fg': 'var(--theme-sidebar-fg)',
        'sidebar-hover': 'var(--theme-sidebar-hover)',
        'sidebar-border': 'var(--theme-sidebar-border)',

        'editor-bg': 'var(--theme-editor-bg)',
        'editor-fg': 'var(--theme-editor-fg)',
        'editor-hover': 'var(--theme-editor-hover)',
        'editor-border': 'var(--theme-editor-border)',

        'status-bg': 'var(--theme-status-bg)',
        'status-fg': 'var(--theme-status-fg)',
        'status-hover': 'var(--theme-status-hover)',
        'status-border': 'var(--theme-status-border)',

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
