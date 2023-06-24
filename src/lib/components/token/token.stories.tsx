import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Fish } from 'phosphor-react';

import { Token } from '..';

export default {
    title: 'Opize Component/Token',
    component: Token,
    argTypes: {},
} as ComponentMeta<typeof Token>;

const Template: ComponentStory<typeof Token> = (args) => <Token {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'token',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
    children: 'token',
    icon: <Fish />,
};
