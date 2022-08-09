import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StatusBadge } from '..';


export default {
  title: 'Component/StatusBadge',
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