module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'prettier', 'import', 'react', 'react-compiler'],
    extends: ['airbnb-typescript', 'plugin:prettier/recommended'],
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    parserOptions: {
        project: './tsconfig.json',
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: 'variable',
                modifiers: ['const'],
                format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
            },
        ],
        '@typescript-eslint/consistent-type-imports': 'error',
        '@typescript-eslint/consistent-type-exports': 'error',
        '@typescript-eslint/lines-between-class-members': 'off',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-use-before-define': ['error', { functions: false }],
        'class-methods-use-this': 'off',
        'comma-dangle': ['error', 'always-multiline'],
        'comma-spacing': ['error', { before: false, after: true }],
        'import/no-unused-modules': 'error',
        'newline-per-chained-call': 'off',
        'no-console': 'off',
        'no-debugger': 'off',
        'object-curly-spacing': ['error', 'always'],
        'react-compiler/react-compiler': 'error',
        'react-hooks/exhaustive-deps': 'off',
        'prettier/prettier': 'error',
    },
};
