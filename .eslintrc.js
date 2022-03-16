module.exports = {
  env: {
    browser: false,
    es6: true,
    node: true,
    jquery: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  globals: {
    window: true,
    document: true,
    fetch: false,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  plugins: [ 'react', 'jsx-a11y' ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'array-bracket-spacing': [ 'error', 'always' ],
    'arrow-parens': [ 'error', 'always' ],
    'arrow-spacing': [ 'error', { before: true, after: true } ],
    'brace-style': [ 'error', '1tbs' ],
    camelcase: [ 'error', { properties: 'never' } ],
    'comma-dangle': [ 'error', 'always-multiline' ],
    'comma-spacing': 'error',
    'comma-style': 'error',
    'computed-property-spacing': [ 'error', 'always' ],
    'eol-last': 'error',
    'func-call-spacing': 'error',
    indent: [ 'error', 2, { SwitchCase: 1 } ],
    'key-spacing': [ 'error', { afterColon: true } ],
    'max-len': [ 'error', { code: 80 } ],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-duplicate-imports': 'error',
    'no-else-return': 'error',
    'no-extra-parens': 'error',
    'no-extra-semi': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-spaces': 'error',
    'no-redeclare': 'error',
    'no-trailing-spaces': 'error',
    'no-useless-return': 'error',
    'no-whitespace-before-property': 'error',
    'object-curly-spacing': [ 'error', 'always' ],
    quotes: [ 'error', 'single' ],
    'quote-props': [ 'error', 'as-needed' ],
    semi: [ 'error', 'never' ],
    'semi-spacing': 'error',
    'space-before-blocks': [ 'error', 'always' ],
    'space-before-function-paren': [
      'error',
      { anonymous: 'always', named: 'never', asyncArrow: 'always' },
    ],
    'space-in-parens': [ 'error', 'always', { exceptions: [ '{}' ] } ],
    'space-unary-ops': [ 'error', { words: true, nonwords: false } ],
    'template-curly-spacing': [ 'error', 'always' ],
    'react/display-name': 'off',
    'react/jsx-curly-spacing': [
      'error',
      { when: 'always', children: true, spacing: { objectLiterals: 'never' } },
    ],
    'react/jsx-equals-spacing': 'error',
    'react/jsx-indent': [ 'error', 2 ],
    'react/jsx-key': 'error',
    'jsx-quotes': [ 'error', 'prefer-double' ],
    'react/jsx-tag-spacing': 'error',
    'react/no-children-prop': 'off',
    'react/no-find-dom-node': 'warn',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
  },
}
