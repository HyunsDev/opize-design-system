import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { TextArea } from '..';

import { Width500 } from './components/Width500';

const meta: Meta<typeof TextArea> = {
    title: 'HTML-Like Component/Form/TextArea',
    component: TextArea,
};
export default meta;

type Story = StoryObj<typeof TextArea>;

export const Primary: Story = {
    render: (args) => (
        <Width500>
            <TextArea {...args} />
        </Width500>
    ),
};
