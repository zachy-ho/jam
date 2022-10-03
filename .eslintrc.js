module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'prettier',
    'plugin:react/recommended',
    'plugin:import/typescript',
    'plugin:jest/recommended',
    'plugin:jest/style',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      // Resolves static imports
      node: {
        extensions: ['.ts', 'tsx'],
      },
      typescript: true,
    },
    'jest': {
      version: 29,
    },
  },
  plugins: ['react', '@typescript-eslint', 'jest'],
  rules: {
    'semi': 2, // Semi-colon
    'func-names': 0,
    'no-unused-vars': [
      1,
      {
        // no unused vars
        argsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
        varsIgnorePattern: 'React',
      },
    ],
    'quotes': [1, 'single'], // single quotes
    'quote-props': [0, 'consistent-as-needed'],
    'jsx-quotes': [1, 'prefer-single'],
    'no-useless-return': 0,
    'import/extensions': [
      1,
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
        js: 'never',
        jsx: 'never',
      },
    ],
    'no-use-before-define': [2, { functions: false }],
    'import/prefer-default-export': 0,
    'import/no-unresolved': 1,
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    // ----- React plugin -----
    'react/react-in-jsx-scope': 0,
    'react/jsx-filename-extension': [2, { extensions: ['.tsx'] }],
    'react/jsx-boolean-value': 0,
    'react/jsx-props-no-spreading': 0,
    'react/function-component-definition': [
      1,
      {
        namedComponents: ['arrow-function', 'function-declaration'],
        unnamedComponents: 'arrow-function',
      },
    ],
  },
};
