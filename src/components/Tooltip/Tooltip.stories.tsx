import { Meta, StoryObj } from '@storybook/react';

import { Button, Flex, Text, Tooltip } from '..';
import { ChatCenteredDots } from '@phosphor-icons/react';

const meta: Meta<typeof Tooltip> = {
    title: 'Opize Component/Tooltip',
    component: Tooltip,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
};
export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Primary: Story = {
    args: {
        content: 'text',
    },
    render: (args) => (
        <Tooltip {...args}>
            <Text>Element</Text>
        </Tooltip>
    ),
};

export const WithNode: Story = {
    args: {
        content: (
            <Flex.Row>
                <ChatCenteredDots /> Comment
            </Flex.Row>
        ),
    },
    render: (args) => (
        <Tooltip {...args}>
            <Text>Element</Text>
        </Tooltip>
    ),
};

export const WithButton: Story = {
    args: {
        content: (
            <Flex.Row>
                <ChatCenteredDots /> Comment
            </Flex.Row>
        ),
    },
    render: (args) => (
        <Tooltip {...args}>
            <Button>Button</Button>
        </Tooltip>
    ),
};
