import { Meta, StoryObj } from '@storybook/react';

import { Flex, Menu, Table } from '..';
import { DotsThreeVertical } from '@phosphor-icons/react';

const meta: Meta<typeof Table> = {
    title: 'HTML-Like Component/Table',
    component: Table,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
};
export default meta;

type Story = StoryObj<typeof Table>;

export const Primary: Story = {
    args: {},
    render: (args) => (
        <Flex width="500px">
            <Table {...args}>
                <Table.Head>
                    <Table.Row>
                        <Table.Column>Column 1</Table.Column>
                        <Table.Column>Column 2</Table.Column>
                        <Table.Column align="right">Column 3</Table.Column>
                    </Table.Row>
                </Table.Head>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>Cell 1</Table.Cell>
                        <Table.Cell>Cell 2</Table.Cell>
                        <Table.Cell align="right">
                            <Menu>
                                <Menu.Trigger
                                    variant="tertiary"
                                    size="small"
                                    shape="round"
                                    iconOnly
                                >
                                    <DotsThreeVertical />
                                </Menu.Trigger>
                                <Menu.Content>
                                    <Menu.Option>Option 1</Menu.Option>
                                    <Menu.Option>Option 1</Menu.Option>
                                    <Menu.Option>Option 1</Menu.Option>
                                </Menu.Content>
                            </Menu>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Cell 4</Table.Cell>
                        <Table.Cell>Cell 5</Table.Cell>{' '}
                        <Table.Cell align="right">
                            <Menu>
                                <Menu.Trigger
                                    variant="tertiary"
                                    size="small"
                                    shape="round"
                                    iconOnly
                                >
                                    <DotsThreeVertical />
                                </Menu.Trigger>
                                <Menu.Content>
                                    <Menu.Option>Option 1</Menu.Option>
                                    <Menu.Option>Option 1</Menu.Option>
                                    <Menu.Option>Option 1</Menu.Option>
                                </Menu.Content>
                            </Menu>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Cell 7</Table.Cell>
                        <Table.Cell>Cell 8</Table.Cell>{' '}
                        <Table.Cell align="right">
                            <Menu>
                                <Menu.Trigger
                                    variant="tertiary"
                                    size="small"
                                    shape="round"
                                    iconOnly
                                >
                                    <DotsThreeVertical />
                                </Menu.Trigger>
                                <Menu.Content>
                                    <Menu.Option>Option 1</Menu.Option>
                                    <Menu.Option>Option 1</Menu.Option>
                                    <Menu.Option>Option 1</Menu.Option>
                                </Menu.Content>
                            </Menu>
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </Flex>
    ),
};
