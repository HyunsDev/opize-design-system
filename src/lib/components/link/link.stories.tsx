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

export const A = Template.bind({});
A.args = {
    to: '/',
    hideIcon: false,
    children: 'This is a Link',
};

export const OuterLink = Template.bind({});
OuterLink.args = {
    to: 'https://design.opize.me',
    newTab: true,
    children: 'This is a Link',
};
