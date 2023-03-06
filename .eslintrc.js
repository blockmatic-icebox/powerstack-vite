module.exports = {
  extends: 'standard-with-typescript',
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
  },
}

// module.exports = {
//   extends: ['standard-with-typescript', 'prettier'],
//   plugins: ['prettier'],
//   parserOptions: {
//     parser: '@typescript-eslint/parser',
//     project: './tsconfig.json',
//     tsconfigRootDir: __dirname,
//   },
//   rules: {
//     '@typescript-eslint/explicit-function-return-type': 'off',
//     '@typescript-eslint/naming-convention': 'off', // TODO: turn it back on
//     '@typescript-eslint/strict-boolean-expressions': 'off',
//     'prettier/prettier': 'error',
//   },
// }
