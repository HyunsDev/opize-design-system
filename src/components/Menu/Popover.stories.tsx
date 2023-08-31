import { Meta, StoryObj } from '@storybook/react';

import { Menu } from '..';
import { CaretDown, TrashSimple } from '@phosphor-icons/react';

const meta: Meta<typeof Menu> = {
    title: 'Opize Component/Menu',
    component: Menu,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
};
export default meta;

type Story = StoryObj<typeof Menu>;

export const Primary: Story = {
    args: {},
    render: (args) => (
        <Menu {...args}>
            <Menu.Trigger>Trigger</Menu.Trigger>
            <Menu.Content>
                <Menu.Option>Option 1</Menu.Option>
                <Menu.Option>Option 2</Menu.Option>
                <Menu.Option>Option 3</Menu.Option>
                <Menu.Option variant="danger">Danger</Menu.Option>
                <Menu.Option disabled>disabled</Menu.Option>
                <Menu.Option isLoading>isLoading</Menu.Option>
                <Menu.Option
                    variant="danger"
                    isLoading
                >
                    isLoading
                </Menu.Option>
            </Menu.Content>
        </Menu>
    ),
};

export const WithPrefix: Story = {
    args: {},
    render: (args) => (
        <Menu {...args}>
            <Menu.Trigger suffix={<CaretDown />}>Trigger</Menu.Trigger>
            <Menu.Content>
                <Menu.Option prefix="🍔">Option 1</Menu.Option>
                <Menu.Option prefix="🍕">Option 2</Menu.Option>
                <Menu.Option prefix="🍟">Option 3</Menu.Option>
                <Menu.Option
                    prefix={<TrashSimple />}
                    variant="danger"
                >
                    Option 4
                </Menu.Option>
            </Menu.Content>
        </Menu>
    ),
};

export const WithSuffix: Story = {
    args: {},
    render: (args) => (
        <Menu {...args}>
            <Menu.Trigger suffix={<CaretDown />}>Trigger</Menu.Trigger>
            <Menu.Content>
                <Menu.Option suffix="🍔">Option 1</Menu.Option>
                <Menu.Option suffix="🍕">Option 2</Menu.Option>
                <Menu.Option suffix="🍟">Option 3</Menu.Option>
                <Menu.Option
                    prefix={<TrashSimple />}
                    variant="danger"
                >
                    Option 4
                </Menu.Option>
            </Menu.Content>
        </Menu>
    ),
};
