import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Spinner } from './spinner';


export default {
  title: 'Library/Spinner',
  component: Spinner,
  argTypes: {
  },
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args) => <Spinner {...args} />;

export const Primary = Template.bind({});
Primary.args = {

};