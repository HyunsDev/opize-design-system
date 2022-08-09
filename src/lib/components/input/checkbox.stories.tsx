import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Checkbox } from '..';
import styled from 'styled-components';


export default {
  title: 'Component/Form/Checkbox',
  component: Checkbox,
  argTypes: {
    label: {
      control: { type: 'text' }
    },
    text: {
      control: { type: 'text' }
    }
  },
} as ComponentMeta<typeof Checkbox>;


const Width500 = styled.div`
  width: 500px;
  margin: 0 auto;
`

const Template: ComponentStory<typeof Checkbox> = (args) => <Width500><Checkbox {...args} /></Width500>;

export const Primary = Template.bind({});
Primary.args = {

};