import { Meta, StoryObj } from '@storybook/react';

import { Flex, Input } from '..';
import { ArrowCircleUp } from '@phosphor-icons/react';

const meta: Meta<typeof Input> = {
    title: 'HTML-Like Component/Input',
    component: Input,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        type: {
            control: {
                type: 'select',
            },
            options: ['text', 'password', 'email', 'number', 'tel', 'url'],
        },
        size: {
            control: {
                type: 'inline-radio',
            },
            options: ['small', 'medium', 'large'],
        },
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
        type: 'text',
        size: 'medium',
        disabled: false,
        readOnly: false,
        isLoading: false,
        width: '100%',
    },
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Primary: Story = {
    args: {
        placeholder: 'Input',
    },
};

export const WithPrefix: Story = {
    args: {
        placeholder: 'Input',
        prefix: 'https://',
    },
};

export const WithSuffix: Story = {
    args: {
        placeholder: 'Input',
        suffix: (
            <Flex.Center onClick={() => alert('click')}>
                <ArrowCircleUp size={20} />
            </Flex.Center>
        ),
    },
};

export const Label: Story = {
    args: {
        placeholder: 'Input',
        label: 'Input Label',
    },
};

export const Error: Story = {
    args: {
        placeholder: 'Input',
        error: 'Error Description',
    },
};
