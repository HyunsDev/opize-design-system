import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { Code, Text } from '..';

const meta: Meta<typeof Code> = {
    title: 'HTML-Like Component/Code',
    component: Code,
};
export default meta;

type Story = StoryObj<typeof Code>;

export const Primary: Story = {
    args: {
        children: 'code',
    },
    render: (args) => (
        <Text>
            This is <Code {...args} /> Component
        </Text>
    ),
};
