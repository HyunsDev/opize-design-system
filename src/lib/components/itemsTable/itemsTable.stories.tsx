import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Gear, UserCircle, X } from 'phosphor-react';
import { ItemsTable } from '..';

export default {
    title: 'Opize Component/ItemsTable',
    component: ItemsTable,
    subcomponents: {
        'ItemsTable.Row': ItemsTable.Row,
        'ItemsTable.Row.Avatar': ItemsTable.Row.Avatar,
        'ItemsTable.Row.Status': ItemsTable.Row.Status,
        'ItemsTable.Row.Component': ItemsTable.Row.Component,
        'ItemsTable.Row.Buttons': ItemsTable.Row.Buttons,
    },
} as ComponentMeta<typeof ItemsTable>;

const Template: ComponentStory<typeof ItemsTable> = (args) => <ItemsTable {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: (
        <>
            <ItemsTable.Row>
                <ItemsTable.Row.Avatar icon={<UserCircle />} name="name" label="label" />
                <ItemsTable.Row.Text text="text" subText="subText" />
                <ItemsTable.Row.Status status="good" label="label" />
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
                <ItemsTable.Row.Avatar icon={<UserCircle />} name="name" label="label" />
                <ItemsTable.Row.Text text="text" subText="subText" />
                <ItemsTable.Row.Status status="good" label="label" />
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
};
