import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { Spinner } from '..';
import { cv } from '../..';

const meta: Meta<typeof Spinner> = {
    title: 'Opize Component/Spinner',
    component: Spinner,
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: {
                type: 'select',
                options: ['small', 'medium', 'large'],
            },
        },
        color: {
            control: {
                type: 'color',
            },
        },
        weight: {
            control: {
                type: 'number',
            },
        },
    },
    args: {
        weight: 4,
        color: cv.foreground,
        size: 32,
    },
};
export default meta;

type Story = StoryObj<typeof Spinner>;

export const Primary: Story = {};
