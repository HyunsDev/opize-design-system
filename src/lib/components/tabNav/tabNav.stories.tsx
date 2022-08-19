import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TabNav } from '..';

export default {
    title: 'Opize Component/TabNav',
    component: TabNav,
    argTypes: {},
} as ComponentMeta<typeof TabNav>;

const Template: ComponentStory<typeof TabNav> = (args) => <TabNav {...args} />;

export const Primary = Template.bind({});
Primary.args = {
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
};

const ExampleTemplate: ComponentStory<typeof TabNav> = (args) => {
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
export const Example = ExampleTemplate.bind({});
