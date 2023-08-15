import { Meta, StoryObj } from '@storybook/react';

import { Divider } from '..';

const meta: Meta<typeof Divider> = {
    title: 'HTML-Like Component/Divider',
    component: Divider,
    parameters: {
        layout: 'centered',
    },
};
export default meta;

type Story = StoryObj<typeof Divider>;

export const Primary: Story = {
    args: {
        width: '300px',
    },
};
