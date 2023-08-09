import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { FileField } from '..';

import { Width500 } from './components/Width500';

const meta: Meta<typeof FileField> = {
    title: 'HTML-Like Component/Form/FileField',
    component: FileField,
};
export default meta;

type Story = StoryObj<typeof FileField>;

export const Primary: Story = {
    render: (args) => (
        <Width500>
            <FileField {...args} />
        </Width500>
    ),
};
