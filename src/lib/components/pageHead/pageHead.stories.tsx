import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PageHead } from '.';


export default {
  title: 'Library/PageHead',
  component: PageHead,
  argTypes: {
  },
} as ComponentMeta<typeof PageHead>;

const Template: ComponentStory<typeof PageHead> = (args) => <PageHead {...args} />;

export const Primary = Template.bind({});
Primary.args = {

};