import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { CodeBlock } from '..';

const meta: Meta<typeof CodeBlock> = {
    title: 'Opize Component/CodeBlock',
    component: CodeBlock,
};
export default meta;

type Story = StoryObj<typeof CodeBlock>;

export const Primary: Story = {
    args: {
        children: JSON.stringify(
            {
                key: 'value',
            },
            null,
            2
        ),
    },
};
