import { Meta, StoryObj } from '@storybook/react';

import { H2 } from '..';

const meta: Meta<typeof H2> = {
    title: 'HTML-Like Component/Title/H2',
    component: H2,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
};
export default meta;

type Story = StoryObj<typeof H2>;

export const Primary: Story = {
    args: {
        children: 'Title H2',
    },
};
