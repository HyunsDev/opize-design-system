import React from 'react';
import { OpizeWrapper } from '../src/lib';
import { themes } from '@storybook/theming';
import { useDarkMode } from 'storybook-dark-mode';
import { ThemeSwitcher } from './components/ThemeSwitcher';
import { DocsContainer } from './DocsContainer';

const baseTheme = {
    brandTitle: 'Opize Storybook',
    brandUrl: 'https://design.opize.me',
    brandTarget: '_self',
};

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    darkMode: {
        dark: {
            ...themes.dark,
            ...baseTheme,
            appBg: '#303236',
            appContentBg: '#26272b',
            barBg: '#303236',
            inputBg: '#3c3e46',
            brandImage: 'https://media.discordapp.net/attachments/761930839893606400/1024845006483238953/unknown.png',
        },
        light: {
            ...themes.normal,
            ...baseTheme,
            brandImage: 'https://media.discordapp.net/attachments/761930839893606400/1002916670710497332/unknown.png',
        },
        stylePreview: false,
    },
    docs: {
        container: DocsContainer,
    },
};

const Link = React.forwardRef((props, ref) => {
    return (
        <a href={props?.to} ref={ref} {...props}>
            {props.children}
        </a>
    );
});

export const decorators = [
    (Story) => {
        return (
            <>
                <ThemeSwitcher />
                <OpizeWrapper initLink={Link}>
                    <Story />
                </OpizeWrapper>
            </>
        );
    },
];
