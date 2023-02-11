import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Callout, Text } from '..';

export default {
    title: 'Opize Component/Callout',
    component: Callout,
    argTypes: {},
} as ComponentMeta<typeof Callout>;

const Template: ComponentStory<typeof Callout> = (args) => <Callout {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'code',
    icon: '🎉',
};
