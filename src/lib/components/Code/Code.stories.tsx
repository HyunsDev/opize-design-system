import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { Code } from '..';

const meta: Meta<typeof Code> = {
    title: 'HTML-Like Component/Code',
    component: Code,
    parameters: {
        layout: 'centered',
    },
};
export default meta;

type Story = StoryObj<typeof Code>;

export const Primary: Story = {
    args: {
        children: 'code',
    },
    render: (args) => (
        <p>
            This is <Code {...args} /> Component
        </p>
    ),
};
