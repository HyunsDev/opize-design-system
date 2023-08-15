import { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { TabNav, TabNavProps } from '..';

const meta: Meta<typeof TabNav> = {
    title: 'Opize Component/TabNav',
    component: TabNav,
    tags: ['autodocs'],
    argTypes: {
        selected: {
            control: {
                type: 'text',
            },
        },
        setSelected: {
            control: {
                type: 'object',
            },
        },
        tabs: {
            control: {
                type: 'object',
            },
        },
    },
};
export default meta;

type Story = StoryObj<typeof TabNav>;

export const Primary: Story = {
    args: {
        selected: 'Menu1',
        tabs: [
            {
                title: 'Menu1',
                value: 'Menu1',
            },
            {
                title: 'Menu2',
                value: 'Menu2',
            },
            {
                title: 'Menu3',
                value: 'Menu3',
                disabled: true,
            },
            {
                title: 'Menu4',
                value: 'Menu4',
            },
        ],
    },
};

const ExampleTemplate = (args: TabNavProps) => {
    const [selectedMenu, setSelectedMenu] = useState('Menu1');

    return (
        <TabNav
            {...args}
            selected={selectedMenu}
            setSelected={setSelectedMenu}
            tabs={[
                {
                    title: 'Menu1',
                    value: 'Menu1',
                },
                {
                    title: 'Menu2',
                    value: 'Menu2',
                },
                {
                    title: 'Menu3',
                    value: 'Menu3',
                    disabled: true,
                },
                {
                    title: 'Menu4',
                    value: 'Menu4',
                },
            ]}
        />
    );
};

export const Example: Story = {
    render: ExampleTemplate,
};
