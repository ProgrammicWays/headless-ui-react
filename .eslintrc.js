module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module'
  },
  env: { es6: true },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect'
    }
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended'
  ],
  plugins: ['react', 'simple-import-sort', '@typescript-eslint', 'prettier', '@stylexjs'],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module' // Allows for the use of imports
  },
  rules: {
    'simple-import-sort/imports': 'warn',
    'simple-import-sort/exports': 'warn',
    'sort-imports': 'off',
    'import/first': 'warn',
    'import/newline-after-import': 'warn',
    'import/no-duplicates': 'warn',
    'import/order': 'off',
    'prettier/prettier': 2,
    '@typescript-eslint/explicit-function-return-type': 0,
    'no-console': 2,
    'ban-ts-ignore': 0,
    'react/prop-types': 0,
    'react/display-name': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'sort-keys': [1, 'asc', { caseSensitive: true, natural: false, minKeys: 2 }],
    'react-hooks/exhaustive-deps': 0,
    'no-case-declarations': 0,
    '@stylexjs/valid-styles': ['error', { ...options }]
  },
  globals: { React: 'writable' }
};
