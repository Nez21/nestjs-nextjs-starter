module.exports = {
   plugins: ['import'],
   settings: {
      'import/parsers': {
         '@typescript-eslint/parser': ['.js', '.ts', '.tsx'],
      },
      'import/resolver': {
         typescript: {
            alwaysTryTypes: true,
            project: ['./tsconfig.json', './next.tsconfig.json'],
         },
         'eslint-import-resolver-custom-alias': {
            alias: {
               '~': '.',
            },
            extensions: ['.js', '.ts', '.tsx'],
         },
      },
   },
   parserOptions: {
      warnOnUnsupportedTypeScriptVersion: false,
   },
   plugins: ['@typescript-eslint/eslint-plugin'],
   extends: [
      'plugin:import/recommended',
      'plugin:import/typescript',
      'prettier',
      'next/core-web-vitals',
   ],
   root: true,
   env: {
      node: true,
      jest: true,
   },
   ignorePatterns: ['.eslintrc.js'],
   rules: {
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'import/no-unresolved': 'error',
   },
}
