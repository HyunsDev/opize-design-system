import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { Text, ToolTip } from '..';

const meta: Meta<typeof ToolTip> = {
    title: 'Opize Component/ToolTip',
    component: ToolTip,
};
export default meta;

type Story = StoryObj<typeof ToolTip>;

export const Primary: Story = {
    args: {
        direction: 'bottom',
        text: 'text',
    },
    render: (args) => (
        <ToolTip {...args}>
            <Text>Element</Text>
        </ToolTip>
    ),
};
