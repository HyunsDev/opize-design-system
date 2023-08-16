import { Meta, StoryObj } from '@storybook/react';

import { Error } from '..';

const meta: Meta<typeof Error> = {
    title: 'Opize Component/Error',
    component: Error,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
};
export default meta;

type Story = StoryObj<typeof Error>;

export const Primary: Story = {
    args: {
        children: 'Hello World!',
    },
};

export const LongText: Story = {
    args: {
        children:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
    },
};

export const CustomLabel: Story = {
    args: {
        children: 'Hello, World',
        label: 'Error',
    },
};
