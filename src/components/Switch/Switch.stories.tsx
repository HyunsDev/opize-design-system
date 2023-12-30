import { Meta, StoryObj } from '@storybook/react';

import { Switch } from '../..';

const meta: Meta<typeof Switch> = {
    title: 'HTML-Like Component/Switch',
    component: Switch,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
};
export default meta;

type Story = StoryObj<typeof Switch>;

export const Primary: Story = {
    args: {
        children: 'Switch',
    },
};

export const WithLabel: Story = {
    args: {
        children: 'Switch',
        label: 'Switch Label',
        size: 'regular',
    },
};
