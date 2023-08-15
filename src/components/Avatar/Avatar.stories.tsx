import { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '..';

const meta: Meta<typeof Avatar> = {
    title: 'Opize Component/Avatar',
    component: Avatar,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    args: {
        src: 'https://avatars.githubusercontent.com/u/46562466?v=4',
    },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
    args: {
        size: '64px',
    },
};
