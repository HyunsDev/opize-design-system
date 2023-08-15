import { Meta, StoryObj } from '@storybook/react';

import { Popover } from '..';

const meta: Meta<typeof Popover> = {
    title: 'Opize Component/Popover',
    component: Popover,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
};
export default meta;

type Story = StoryObj<typeof Popover>;

export const Primary: Story = {
    args: {},
    render: (args) => (
        <Popover {...args}>
            <Popover.Trigger>Trigger</Popover.Trigger>
            <Popover.Content>PopoverContent</Popover.Content>
        </Popover>
    ),
};
