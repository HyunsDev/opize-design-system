import { Meta, StoryObj } from '@storybook/react';

import { Button, Skeleton } from '../..';

const meta: Meta<typeof Skeleton> = {
    title: 'Opize Component/Skeleton',
    component: Skeleton,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
};
export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Primary: Story = {
    args: {
        width: '200px',
    },
};

export const Wrap: Story = {
    args: {
        children: <Button>Button</Button>,
    },
};
