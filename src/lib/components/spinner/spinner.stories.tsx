import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Spinner } from '..';


export default {
  title: 'Component/Spinner',
  component: Spinner,
  argTypes: {
  },
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args) => <Spinner {...args} />;

export const Primary = Template.bind({});
Primary.args = {

};