import React from 'react';
import { OpizeWrapper } from '../src/lib';
import { themes } from '@storybook/theming';
import { useDarkMode } from 'storybook-dark-mode';
import { ThemeSwitcher } from './components/ThemeSwitcher';
// import { DocsContainer } from './_DocsContainer';

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
};

const Link = React.forwardRef((props, ref) => {
    return (
        <a
            href={props?.to}
            ref={ref}
            {...props}
        >
            {props.children}
        </a>
    );
});

export const decorators = [
    (Story) => {
        return (
            <>
                <OpizeWrapper initLink={Link}>
                    <>
                        <ThemeSwitcher />
                        <Story />
                    </>
                </OpizeWrapper>
            </>
        );
    },
];
