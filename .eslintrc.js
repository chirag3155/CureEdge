module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended', // Use recommended React configuration
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended', // Accessibility rules
    'plugin:tailwindcss/recommended', // Tailwind CSS rules
  ],
  ignorePatterns: ['dist'],
  plugins: ['react', 'react-hooks', 'jsx-a11y', 'tailwindcss'], // Add required plugins
  rules: {
    'react/prop-types': 'off', // Disable prop-types rule if not using PropTypes
    'react-hooks/rules-of-hooks': 'error', // Enforce rules of hooks
    'react-hooks/exhaustive-deps': 'warn', // Check effect dependencies
  },
};
