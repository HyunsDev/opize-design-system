import React, { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { TabNav } from '..';

const meta: Meta<typeof TabNav> = {
    title: 'Opize Component/TabNav',
    component: TabNav,
};
export default meta;

type Story = StoryObj<typeof TabNav>;

export const Primary: Story = {
    args: {
        selected: 'Menu1',
        menu: {
            Menu1: {
                text: 'Menu1',
                onClick: () => null,
            },
            Menu2: {
                text: 'Menu2',
                onClick: () => null,
            },
        },
    },
};

const ExampleTemplate = (args: any) => {
    const [selectedMenu, setSelectedMenu] = useState('Menu1');

    return (
        <TabNav
            {...args}
            selected={selectedMenu}
            menu={{
                Menu1: {
                    text: 'Menu1',
                    onClick: () => setSelectedMenu('Menu1'),
                },
                Menu2: {
                    text: 'Menu2',
                    onClick: () => setSelectedMenu('Menu2'),
                },
            }}
        />
    );
};

export const Example: Story = {
    render: ExampleTemplate,
};
