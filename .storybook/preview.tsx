import React from 'react';
import type { Preview } from '@storybook/react';
import { OpizeWrapper } from '../src';

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
    decorators: [
        (Story: any) => {
            return (
                <OpizeWrapper>
                    <Story />
                </OpizeWrapper>
            );
        },
    ],
};

export default preview;
