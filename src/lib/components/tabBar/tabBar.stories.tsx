import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TabBar } from '.';


export default {
  title: 'Library/TabBar',
  component: TabBar,
  argTypes: {
  },
} as ComponentMeta<typeof TabBar>;



const Template: ComponentStory<typeof TabBar> = (args) => <TabBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    selected: 'menu1',
    menu: {
        menu1: {
            text: 'menu',
            onClick: () => null
        }, menu2: {
            text: 'menu2',
            onClick: () => null
        },
    }
};

const ExampleTemplate: ComponentStory<typeof TabBar> = (args) => {
    const [selectedMenu, setSelectedMenu ] = useState('menu1')

    return <TabBar {...args} selected={selectedMenu} menu={{
        menu1: {
            text: 'menu',
            onClick: () => setSelectedMenu('menu1')
        }, menu2: {
            text: 'menu2',
            onClick: () => setSelectedMenu('menu2')
        },
    }} />
};
export const Example = ExampleTemplate.bind({});
