import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Link } from './';


export default {
  title: 'Library/Link',
  component: Link,
  argTypes: {
  },
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    to: '/',
    children: 'This is a Link'
};

export const A = Template.bind({});
A.args = {
    href: '/',
    children: 'This is a Link'
};

export const OuterLink = Template.bind({});
OuterLink.args = {
    href: '/',
    newTab: true,
    showIcon: true,
    children: 'This is a Link'
};