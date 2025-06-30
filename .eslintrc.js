module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
        'react',
        'react-hooks',
        'import',
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:import/typescript',
        'prettier',
    ],
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    settings: {
        react: {
            version: 'detect',
        },
        'import/resolver': {
            typescript: {
                project: ['./tsconfig.json'],
            },
        },
    },
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
    },
};