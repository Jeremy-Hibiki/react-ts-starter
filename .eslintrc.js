module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: ['airbnb-base', 'plugin:@typescript-eslint/recommended', 'react-app', 'prettier'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'prettier', 'import'],
    rules: {
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/no-unresolved': 0,
        'import/order': [
            'error',
            {
                'newlines-between': 'never',
                groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
                pathGroups: [
                    {
                        pattern: '@/**',
                        group: 'internal',
                    },
                ],
            },
        ],
        'import/prefer-default-export': 0,
        'class-methods-use-this': 0,
        'max-classes-per-file': 0,
        'no-bitwise': 0,
        'no-nested-ternary': 0,
        'no-param-reassign': 0,
        'no-plusplus': 0,
        'no-shadow': 0,
        'no-unused-vars': ['warn', 'local'],
        'no-use-before-define': 'off',
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/no-inferrable-types': 0,
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-unused-vars': [
            'warn',
            { ignoreRestSiblings: true, argsIgnorePattern: '^_', varsIgnorePattern: '^(_|props?)|[iI]gnored' },
        ],
        '@typescript-eslint/no-use-before-define': ['error', { classes: true, functions: false, typedefs: false }],
        '@typescript-eslint/no-var-requires': 'off',
        'prettier/prettier': 1,
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
