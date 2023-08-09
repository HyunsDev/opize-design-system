import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { Select } from '..';

import { Width500 } from './components/Width500';

const meta: Meta<typeof Select> = {
    title: 'HTML-Like Component/Form/Select',
    component: Select,
};
export default meta;

type Story = StoryObj<typeof Select>;

export const Primary: Story = {
    render: (args) => (
        <Width500>
            <Select {...args}>
                <Select.Option value="select1">select1</Select.Option>
                <Select.Option value="select2">select2</Select.Option>
                <Select.Option value="select3">select3</Select.Option>
                <Select.Option value="select4">select4</Select.Option>
            </Select>
        </Width500>
    ),
};
