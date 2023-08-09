import React from 'react';

import { Meta, StoryObj } from '@storybook/react';
import { Gear, UserCircle, X } from 'phosphor-react';

import { ItemsTable } from '..';

const meta: Meta<typeof ItemsTable> = {
    title: 'Opize Component/ItemsTable',
    component: ItemsTable,
};
export default meta;

type Story = StoryObj<typeof ItemsTable>;

export const Primary: Story = {
    args: {
        children: (
            <>
                <ItemsTable.Row>
                    <ItemsTable.Row.Avatar
                        icon={<UserCircle />}
                        name="name"
                        label="label"
                    />
                    <ItemsTable.Row.Text
                        text="text"
                        subText="subText"
                    />
                    <ItemsTable.Row.Status
                        status="good"
                        label="label"
                    />
                    <ItemsTable.Row.Component>Component</ItemsTable.Row.Component>
                    <ItemsTable.Row.Buttons
                        buttons={[
                            [
                                {
                                    label: 'label',
                                    icon: <Gear />,
                                    onClick: () => null,
                                },
                            ],
                            [
                                {
                                    label: 'delete',
                                    icon: <X />,
                                    onClick: () => null,
                                    color: 'red',
                                },
                            ],
                        ]}
                    />
                </ItemsTable.Row>
                <ItemsTable.Row>
                    <ItemsTable.Row.Avatar
                        icon={<UserCircle />}
                        name="name"
                        label="label"
                    />
                    <ItemsTable.Row.Text
                        text="text"
                        subText="subText"
                    />
                    <ItemsTable.Row.Status
                        status="good"
                        label="label"
                    />
                    <ItemsTable.Row.Component>Component</ItemsTable.Row.Component>
                    <ItemsTable.Row.Buttons
                        buttons={[
                            [
                                {
                                    label: 'label',
                                    icon: <Gear />,
                                    onClick: () => null,
                                },
                            ],
                            [
                                {
                                    label: 'delete',
                                    icon: <X />,
                                    onClick: () => null,
                                    color: 'red',
                                },
                            ],
                        ]}
                    />
                </ItemsTable.Row>
            </>
        ),
    },
};
