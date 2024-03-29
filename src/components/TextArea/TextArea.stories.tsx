import { Meta, StoryObj } from '@storybook/react';

import { TextArea } from '../..';

const meta: Meta<typeof TextArea> = {
    title: 'HTML-Like Component/TextArea',
    component: TextArea,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        width: {
            control: {
                type: 'text',
            },
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
    },
    args: {
        disabled: false,
        readOnly: false,
        width: '100%',
        minHeight: 'unset',
    },
};
export default meta;

type Story = StoryObj<typeof TextArea>;

export const Primary: Story = {
    args: {
        placeholder: 'Input',
        width: '400px',
        minHeight: '100px',
    },
};

export const Label: Story = {
    args: {
        placeholder: 'Input',
        label: 'Input Label',
        width: '400px',
        minHeight: '100px',
    },
};

export const Error: Story = {
    args: {
        placeholder: 'Input',
        error: 'Error Description',
        width: '400px',
        minHeight: '100px',
    },
};
