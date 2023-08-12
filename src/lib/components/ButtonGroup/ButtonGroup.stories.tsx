import { Meta, StoryObj } from '@storybook/react';
import { CaretDown, Minus, Plus } from 'phosphor-react';

import { ButtonGroup, Button, Flex, Popover, Menu } from '..';

const meta: Meta<typeof ButtonGroup> = {
    title: 'Opize Component/ButtonGroup',
    component: ButtonGroup,
};
export default meta;

type Story = StoryObj<typeof ButtonGroup>;

export const Primary: Story = {
    args: {},
    render: (args) => (
        <Flex.Column gap="16px">
            <ButtonGroup {...args}>
                <Button>Button 1</Button>
                <Button>Button 2</Button>
                <Button>Button 3</Button>
            </ButtonGroup>
            <ButtonGroup {...args}>
                <Button>
                    <Minus />
                </Button>
                <Button>
                    <Plus />
                </Button>
            </ButtonGroup>
            <ButtonGroup {...args}>
                <Button>Button 1</Button>
                <Popover>
                    <Popover.Trigger
                        suffix={
                            <CaretDown
                                weight="fill"
                                size={12}
                            />
                        }
                    >
                        Popover
                    </Popover.Trigger>
                    <Popover.Content>"Hello, Opize Design System!"</Popover.Content>
                </Popover>
                <Menu>
                    <Menu.Trigger
                        suffix={
                            <CaretDown
                                weight="fill"
                                size={12}
                            />
                        }
                    >
                        Menu
                    </Menu.Trigger>
                    <Menu.Content>
                        <Menu.Option onClick={() => alert('Option 1')}>Option 1</Menu.Option>
                        <Menu.Option onClick={() => alert('Option 2')}>Option 2</Menu.Option>
                    </Menu.Content>
                </Menu>
            </ButtonGroup>
            <ButtonGroup {...args}>
                <Button>Button 1</Button>
                <Menu>
                    <Menu.Trigger
                        suffix={
                            <CaretDown
                                weight="fill"
                                size={12}
                            />
                        }
                    >
                        Menu
                    </Menu.Trigger>
                    <Menu.Content>
                        <Menu.Option onClick={() => alert('Option 1')}>Option 1</Menu.Option>
                        <Menu.Option onClick={() => alert('Option 2')}>Option 2</Menu.Option>
                    </Menu.Content>
                </Menu>
            </ButtonGroup>
            <ButtonGroup {...args}>
                <Button>Button 1</Button>
                <Button>Button 2</Button>
                <Button>Button 3</Button>
            </ButtonGroup>
            <ButtonGroup {...args}>
                <Button variant="secondary">Button 1</Button>
                <Button variant="secondary">Button 2</Button>
                <Button variant="secondary">Button 3</Button>
            </ButtonGroup>
            <ButtonGroup {...args}>
                <Button variant="tertiary">Button 1</Button>
                <Button variant="tertiary">Button 2</Button>
                <Button variant="tertiary">Button 3</Button>
            </ButtonGroup>
        </Flex.Column>
    ),
};
