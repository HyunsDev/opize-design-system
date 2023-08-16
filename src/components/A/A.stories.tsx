import { Meta, StoryObj } from '@storybook/react';

import { A } from '..';

const meta: Meta<typeof A> = {
    title: 'HTML-Like Component/A',
    component: A,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
};
export default meta;

type Story = StoryObj<typeof A>;

export const Primary: Story = {
    args: { href: '/', children: 'This is a A', target: '_blank' },
};
