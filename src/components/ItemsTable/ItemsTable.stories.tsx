import { Meta, StoryObj } from '@storybook/react';
import { UserCircle } from 'phosphor-react';

import { ItemsTable, Menu } from '..';

const meta: Meta<typeof ItemsTable> = {
    title: 'Opize Component/ItemsTable',
    component: ItemsTable,
    tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof ItemsTable>;

export const Primary: Story = {
    args: {
        children: (
            <>
                <ItemsTable.Row>
                    <ItemsTable.Row.Avatar
                        icon={<UserCircle size={32} />}
                        name="name"
                        label="label"
                    />
                    <ItemsTable.Row.Text
                        text="text"
                        subText="subText"
                    />
                    <ItemsTable.Row.Component>Component</ItemsTable.Row.Component>
                    <ItemsTable.Row.Menu>
                        <Menu.Option>Option</Menu.Option>
                    </ItemsTable.Row.Menu>
                </ItemsTable.Row>
                <ItemsTable.Row>
                    <ItemsTable.Row.Avatar
                        icon={<UserCircle size={32} />}
                        name="name"
                        label="label"
                    />
                    <ItemsTable.Row.Text
                        text="text"
                        subText="subText"
                    />
                    <ItemsTable.Row.Component>Component</ItemsTable.Row.Component>
                    <ItemsTable.Row.Menu>
                        <Menu.Option>Option</Menu.Option>
                    </ItemsTable.Row.Menu>
                </ItemsTable.Row>
            </>
        ),
    },
};
