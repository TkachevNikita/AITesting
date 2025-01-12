const path = require('path');

module.exports = {
  extends: '../../.eslintrc.js',
  parserOptions: {
    project: path.resolve(__dirname, '../../tsconfig.eslint.json'),
  },
  rules: {
    'i18n/no-russian-character': 'off',
  },
};
