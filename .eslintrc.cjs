module.exports = {
    root: true,
    env: {
        browser: true,
        es2020: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:storybook/recommended',
        'plugin:import/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs', 'storybook-static', 'node_modules'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh'],
    rules: {
        'react-refresh/only-export-components': 'off',
    },
    settings: {
        'import/resolver': {
            typescript: {},
        },
    },
};
