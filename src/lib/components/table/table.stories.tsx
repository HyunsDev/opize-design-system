import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DotsThree, DotsThreeVertical, Gear, UserCircle, X } from 'phosphor-react';
import { ActionMenu, Checkbox, Table } from '..';

export default {
    title: 'HTML-Like Component/Table',
    component: Table,
    subcomponents: {
        'Table.Data': Table.Data,
        'Table.Head': Table.Head,
        'Table.Row': Table.Row,
        'Table.THead': Table.THead,
        'Table.TBody': Table.TBody,
    },
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    children: (
        <>
            <Table.THead>
                <Table.Row>
                    <Table.Head width="40px" $align="center">
                        <Checkbox checkBoxSize="small" />
                    </Table.Head>
                    <Table.Head>Head 2</Table.Head>
                    <Table.Head>Head 3</Table.Head>
                    <Table.Head width="40px" $align="center">
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
                    <Table.Data width="40px" $align="center">
                        <Checkbox checkBoxSize="small" />
                    </Table.Data>
                    <Table.Data>Data 2</Table.Data>
                    <Table.Data>Data 3</Table.Data>
                    <Table.Data width="40px" $align="center">
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
                    <Table.Data width="40px" $align="center">
                        <Checkbox checkBoxSize="small" />
                    </Table.Data>
                    <Table.Data>Data 2</Table.Data>
                    <Table.Data>Data 3</Table.Data>
                    <Table.Data width="40px" $align="center">
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
};
