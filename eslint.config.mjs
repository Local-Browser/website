import globals from 'globals'
import pluginJs from '@eslint/js'

export default [
    {
        languageOptions: {
            globals: { ...globals.browser, ...globals.node },
        },
        rules: {
            'quotes': ['error', 'single'],
            'semi': ['error', 'never'],
            'indent': ['error', 4],
            'no-trailing-spaces': ['error', { 'skipBlankLines': false, 'ignoreComments': false }],
            'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1, maxBOF: 0 }]
        }
    },
    pluginJs.configs.recommended,
    {
        ignores: ['dist/']
    },
]
