import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-onboarding',
        '@storybook/addon-interactions',
        '@storybook/addon-storysource',
        '@storybook/addon-styling',
        '@storybook/addon-docs',
        'storybook-addon-swc',
        'storybook-dark-mode',
        '@storybook/addon-mdx-gfm'
    ],
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },
    docs: {
        autodocs: 'tag',
    },
    typescript: {},
    staticDirs: ['./public'],
    managerHead: (head) => `
        ${head}
        <link rel='favicon' href='favicon.ico' />
        <link rel='icon' href='favicon.ico' />
        `,
};
export default config;
