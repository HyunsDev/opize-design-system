import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { Callout, Text } from '..';

const meta: Meta<typeof Callout> = {
    title: 'Opize Component/Callout',
    component: Callout,
};
export default meta;

type Story = StoryObj<typeof Callout>;

export const Primary: Story = {
    args: {
        children: 'code',
        icon: '🎉',
    },
};
