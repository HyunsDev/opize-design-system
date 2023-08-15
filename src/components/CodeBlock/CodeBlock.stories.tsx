import { Meta, StoryObj } from '@storybook/react';

import { CodeBlock } from '..';

const meta: Meta<typeof CodeBlock> = {
    title: 'Opize Component/CodeBlock',
    component: CodeBlock,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
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
        width: '500px',
        title: 'CodeBlock',
    },
};
