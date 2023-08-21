import { Meta, StoryObj } from '@storybook/react';
import { Box, Button, Flex, Text } from '..';

const meta: Meta<typeof Box> = {
    title: 'Opize Component/Box',
    component: Box,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    render: (args) => (
        <Flex width="500px">
            <Box {...args} />
        </Flex>
    ),
};

export default meta;
type Story = StoryObj<typeof Box>;

export const Primary: Story = {
    args: {
        children: 'Box',
    },
};

export const Header: Story = {
    args: {
        children: 'Box',
        header: 'Header',
    },
};

export const Footer: Story = {
    args: {
        children: 'Box',
        footer: (
            <>
                <Text>Footer</Text>
                <Button size="small">Button</Button>
            </>
        ),
    },
};

export const Title: Story = {
    args: {
        children: 'Box',
        title: 'Title',
    },
};
