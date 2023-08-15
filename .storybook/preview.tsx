import React from 'react';
import type { Preview } from '@storybook/react';
import { OpizeWrapper } from '../src';
import { themes } from '@storybook/theming';
import { ThemeSwitcher } from './components/ThemeSwitcher';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        darkMode: {
            dark: { ...themes.dark },
            light: { ...themes.normal },
        },
    },
    decorators: [
        (Story: any) => {
            return (
                <OpizeWrapper>
                    <ThemeSwitcher />
                    <Story />
                </OpizeWrapper>
            );
        },
    ],
};

export default preview;
