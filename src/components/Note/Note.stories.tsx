import { Meta, StoryObj } from '@storybook/react';

import { Button, Note } from '..';

const meta: Meta<typeof Note> = {
    title: 'Opize Component/Note',
    component: Note,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
};
export default meta;

type Story = StoryObj<typeof Note>;

export const Primary: Story = {
    args: {
        children: 'Hello World!',
    },
};

export const LongText: Story = {
    args: {
        children:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
    },
};

export const WithAction: Story = {
    args: {
        children:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
        action: <Button>Click me!</Button>,
    },
};
