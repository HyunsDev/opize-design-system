import { Meta, StoryObj } from '@storybook/react';

import { Date } from '../..';

const meta: Meta<typeof Date> = {
    title: 'HTML-Like Component/Date',
    component: Date,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        type: {
            control: {
                type: 'select',
            },
            options: ['date', 'datetime-local', 'month', 'week', 'time'],
        },
        disabled: {
            control: {
                type: 'boolean',
            },
        },
        readOnly: {
            control: {
                type: 'boolean',
            },
        },
        width: {
            control: {
                type: 'text',
            },
        },
    },
};
export default meta;

type Story = StoryObj<typeof Date>;

export const Primary: Story = {
    args: {},
};

export const Label: Story = {
    args: {
        label: 'Date Label',
    },
};

export const Error: Story = {
    args: {
        error: 'Error Description',
    },
};
