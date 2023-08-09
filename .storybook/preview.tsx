import React from 'react';
import type { Preview } from '@storybook/react';
import { OpizeWrapper } from '../src/lib';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
};

export default preview;

export const decorators = [
    (Story: any) => {
        return (
            <>
                <OpizeWrapper>
                    <Story />
                </OpizeWrapper>
            </>
        );
    },
];
