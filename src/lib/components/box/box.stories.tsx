import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { Box } from '..';
import { TextField } from '../input';

const meta: Meta<typeof Box> = {
    title: 'Opize Component/Box',
    component: Box,
};
export default meta;

type Story = StoryObj<typeof Box>;

export const Primary: Story = {
    args: {
        children: 'Hello, World!',
    },
};

export const WithTitleAndFooter: Story = {
    args: {
        children: <>Hello, World!</>,
        title: 'Title',
        footerTemplate: {
            text: 'text',
            button: {
                children: 'label',
                variant: 'contained',
            },
        },
    },
};

export const WithHeader: Story = {
    args: {
        children: (
            <>
                Hello, World!
                <TextField
                    type="text"
                    value=""
                    onChange={() => null}
                />
            </>
        ),
        header: 'Hello, world!',
    },
};
