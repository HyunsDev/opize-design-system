import { Meta, StoryObj } from '@storybook/react';

import { H3 } from '..';

const meta: Meta<typeof H3> = {
    title: 'HTML-Like Component/Title/H3',
    component: H3,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
};
export default meta;

type Story = StoryObj<typeof H3>;

export const Primary: Story = {
    args: {
        children: 'Title H3',
    },
};
