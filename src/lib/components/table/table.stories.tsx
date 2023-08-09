import React from 'react';

import { Meta, StoryObj } from '@storybook/react';
import { DotsThreeVertical } from 'phosphor-react';

import { ActionMenu, Checkbox, Table } from '..';

const meta: Meta<typeof Table> = {
    title: 'HTML-Like Component/Table',
    component: Table,
};
export default meta;

type Story = StoryObj<typeof Table>;

export const Primary: Story = {
    args: {
        children: (
            <>
                <Table.THead>
                    <Table.Row>
                        <Table.Head
                            width="40px"
                            $align="center"
                        >
                            <Checkbox checkBoxSize="small" />
                        </Table.Head>
                        <Table.Head>Head 2</Table.Head>
                        <Table.Head>Head 3</Table.Head>
                        <Table.Head
                            width="40px"
                            $align="center"
                        >
                            <ActionMenu
                                actions={[
                                    [
                                        {
                                            label: '액션',
                                            onClick: () => null,
                                        },
                                    ],
                                ]}
                                variant="text"
                                icon={<DotsThreeVertical />}
                            />
                        </Table.Head>
                    </Table.Row>
                </Table.THead>
                <Table.TBody>
                    <Table.Row>
                        <Table.Data
                            width="40px"
                            $align="center"
                        >
                            <Checkbox checkBoxSize="small" />
                        </Table.Data>
                        <Table.Data>Data 2</Table.Data>
                        <Table.Data>Data 3</Table.Data>
                        <Table.Data
                            width="40px"
                            $align="center"
                        >
                            <ActionMenu
                                actions={[
                                    [
                                        {
                                            label: '액션',
                                            onClick: () => null,
                                        },
                                    ],
                                ]}
                                variant="text"
                                icon={<DotsThreeVertical />}
                            />
                        </Table.Data>
                    </Table.Row>
                    <Table.Row>
                        <Table.Data
                            width="40px"
                            $align="center"
                        >
                            <Checkbox checkBoxSize="small" />
                        </Table.Data>
                        <Table.Data>Data 2</Table.Data>
                        <Table.Data>Data 3</Table.Data>
                        <Table.Data
                            width="40px"
                            $align="center"
                        >
                            <ActionMenu
                                actions={[
                                    [
                                        {
                                            label: '액션',
                                            onClick: () => null,
                                        },
                                    ],
                                ]}
                                variant="text"
                                icon={<DotsThreeVertical />}
                            />
                        </Table.Data>
                    </Table.Row>
                </Table.TBody>
            </>
        ),
    },
};
