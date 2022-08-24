import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Link } from '..';

export default {
    title: 'HTML-Like Component/Link',
    component: Link,
    argTypes: {},
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    to: '/',
    children: 'This is a Link',
};

export const ShowIcon = Template.bind({});
ShowIcon.args = {
    to: '/',
    children: 'This is a Link',
    showIcon: true,
};

export const A = Template.bind({});
A.args = {
    as: 'a',
    to: '/',
    children: 'This is a Link',
};

export const newTab = Template.bind({});
newTab.args = {
    to: 'https://design.opize.me',
    newTab: true,
    children: 'This is a Link',
};
