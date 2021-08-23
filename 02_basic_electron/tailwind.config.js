function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      opacityValue = 1;
    }
    return `rgba(var(${variableName}), ${opacityValue})`;
  };
}

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // NOTE: This is for reference.
        // primary: 'var(--theme-primary)',
        // primary: ({ opacityValue }) => {
        //   if (opacityValue !== undefined) {
        //     return `rgba(var(--theme-primary), ${opacityValue})`;
        //   }
        //   return 'rgba(var(--theme-primary, 1))';
        // },
        primary: withOpacity('--theme-primary'),
        secondary: withOpacity('--theme-secondary'),
        'text-base': withOpacity('--theme-text-base'),
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
