import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StatusBadge } from './';


export default {
  title: 'Library/StatusBadge',
  component: StatusBadge,
  argTypes: {
  },
} as ComponentMeta<typeof StatusBadge>;

const Template: ComponentStory<typeof StatusBadge> = (args) => <StatusBadge {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    text: 'Text',
    color: 'green'
};