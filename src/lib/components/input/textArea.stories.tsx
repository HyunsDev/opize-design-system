import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Check } from 'phosphor-react'

import { TextArea } from '.';
import styled from 'styled-components';


export default {
  title: 'Library/input/TextArea',
  component: TextArea,
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof TextArea>;


const Width500 = styled.div`
  width: 500px;
  margin: 0 auto;
`

const Template: ComponentStory<typeof TextArea> = (args) => <Width500><TextArea {...args} /></Width500>;

export const Primary = Template.bind({});
Primary.args = {

};