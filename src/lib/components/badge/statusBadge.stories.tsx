import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { StatusBadge } from '..';

const meta: Meta<typeof StatusBadge> = {
    title: 'Opize Component/StatusBadge',
    component: StatusBadge,
};
export default meta;

type Story = StoryObj<typeof StatusBadge>;

export const Primary: Story = {
    args: {
        text: 'Text',
        color: 'green',
    },
};
