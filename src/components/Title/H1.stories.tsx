import { Meta, StoryObj } from '@storybook/react';

import { H1 } from '..';

const meta: Meta<typeof H1> = {
    title: 'HTML-Like Component/Title/H1',
    component: H1,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
};
export default meta;

type Story = StoryObj<typeof H1>;

export const Primary: Story = {
    args: {
        children: 'Title H1',
    },
};
