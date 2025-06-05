/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { FlatCompat } from '@eslint/eslintrc'
import eslintJs from '@eslint/js'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: eslintJs.configs.recommended
})

export default [
    {
        ignores: [
            'node_modules',
            'dist',
            '.eslintrc.cjs'
        ]
    },
    ...compat.config({
        root: true,
        plugins: ['@typescript-eslint'],
        parser: '@typescript-eslint/parser',
        parserOptions: {
            project: true,
            tsconfigRootDir: __dirname
        },
        extends: [
            'eslint:recommended',
            'plugin:@typescript-eslint/recommended-type-checked',
            'plugin:@typescript-eslint/stylistic-type-checked'
        ],
        rules: {
            semi: 'off',
            '@typescript-eslint/semi': ['error', 'never'],
            quotes: 'off',
            '@typescript-eslint/quotes': ['error', 'single'],
            indent: 'off',
            '@typescript-eslint/indent': ['error', 4],
            '@typescript-eslint/member-delimiter-style': [
                'error',
                {
                    multiline: {
                        delimiter: 'none',
                        requireLast: false
                    },
                    singleline: {
                        delimiter: 'comma',
                        requireLast: false
                    }
                }
            ],
            '@typescript-eslint/no-non-null-assertion': 'off',
            '@typescript-eslint/explicit-function-return-type': ['warn'],
            '@typescript-eslint/restrict-template-expressions': 'off',
            '@typescript-eslint/require-await': 'off',
            '@typescript-eslint/no-unsafe-member-access': 'off',
            '@typescript-eslint/no-unsafe-call': 'off',
            '@typescript-eslint/consistent-indexed-object-style': 'off',
            '@typescript-eslint/prefer-nullish-coalescing': 'off'
        }
    })
]
