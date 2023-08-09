import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { Switch } from '..';

import { Width500 } from './components/Width500';

const meta: Meta<typeof Switch> = {
    title: 'HTML-Like Component/Form/Switch',
    component: Switch,
};
export default meta;

type Story = StoryObj<typeof Switch>;

export const Primary: Story = {
    render: (args) => (
        <Width500>
            <Switch {...args} />
        </Width500>
    ),
};
