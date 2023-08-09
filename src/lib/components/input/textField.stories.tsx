import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { TextField } from '..';

import { Width500 } from './components/Width500';

const meta: Meta<typeof TextField> = {
    title: 'HTML-Like Component/Form/TextField',
    component: TextField,
    argTypes: {
        readOnly: {
            control: { type: 'boolean' },
        },
    },
};
export default meta;

type Story = StoryObj<typeof TextField>;

export const Primary: Story = {
    args: {
        placeholder: 'PlaceHolder',
    },
    render: (args) => (
        <Width500>
            <TextField {...args} />
        </Width500>
    ),
};
