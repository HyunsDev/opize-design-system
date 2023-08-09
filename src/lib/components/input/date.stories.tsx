import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { Datetime } from '..';

import { Width500 } from './components/Width500';

const meta: Meta<typeof Datetime> = {
    title: 'HTML-Like Component/Form/Datetime',
    component: Datetime,
    argTypes: {
        type: {
            options: ['date', 'datetime-local', 'month', 'time', 'week'],
            control: { type: 'select' },
        },
    },
};
export default meta;

type Story = StoryObj<typeof Datetime>;

export const Primary: Story = {
    args: {
        type: 'date',
    },
    render: (args) => (
        <Width500>
            <Datetime {...args} />
        </Width500>
    ),
};
