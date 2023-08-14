import { Meta, StoryObj } from '@storybook/react';

import { Flex, Select } from '../..';
import { ArrowCircleUp, CaretCircleDown } from 'phosphor-react';

const meta: Meta<typeof Select> = {
    title: 'HTML-Like Component/Select',
    component: Select,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
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
    },
    args: {
        size: 'medium',
        disabled: false,
        width: '100%',
        children: (
            <>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
            </>
        ),
    },
};
export default meta;

type Story = StoryObj<typeof Select>;

export const Primary: Story = {
    args: {
        placeholder: 'Select',
    },
};

export const WithPrefix: Story = {
    args: {
        placeholder: 'Select',
        prefix: 'https://',
    },
};

export const WithSuffix: Story = {
    args: {
        placeholder: 'Select',
        suffix: <CaretCircleDown size={20} />,
    },
};

export const label: Story = {
    args: {
        placeholder: 'Select',
        label: 'Select Label',
    },
};

export const error: Story = {
    args: {
        placeholder: 'Select',
        error: 'Error Description',
    },
};
