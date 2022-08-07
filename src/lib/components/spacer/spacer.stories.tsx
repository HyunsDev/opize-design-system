import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Spacer } from '.';
import styled from 'styled-components';

export default {
  title: 'Component/Spacer',
  component: Spacer,
  argTypes: {
  },
} as ComponentMeta<typeof Spacer>;

const BlackBox = styled.div`
  width: 100%;
  height: 30px;
  background-color: #E9ECEF;
`

const Template: ComponentStory<typeof Spacer> = (args) => <><BlackBox /><Spacer {...args} /><BlackBox /></>;

export const Primary = Template.bind({});
Primary.args = {
  height: 30
};