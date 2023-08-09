import React from 'react';

import { Meta, StoryObj } from '@storybook/react';
import { Fish } from 'phosphor-react';

import { Token } from '..';

const meta: Meta<typeof Token> = {
    title: 'Opize Component/Token',
    component: Token,
};
export default meta;

type Story = StoryObj<typeof Token>;

export const Primary: Story = {
    args: {
        children: 'token',
    },
};

export const Icon: Story = {
    args: {
        children: 'token',
        icon: <Fish />,
    },
};
