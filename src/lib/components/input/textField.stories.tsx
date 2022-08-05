import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PaperPlaneTilt } from 'phosphor-react'

import { TextField } from './';
import styled from 'styled-components';


export default {
  title: 'Library/input/TextField',
  component: TextField,
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof TextField>;


const Width500 = styled.div`
  width: 500px;
  margin: 0 auto;
`

const Template: ComponentStory<typeof TextField> = (args) => <Width500><TextField {...args} /></Width500>;

export const Primary = Template.bind({});
Primary.args = {

};

export const Addon = Template.bind({});
Addon.args = {
  leftAddon: 'https://',
  rightAddon: '/opize'
};

export const AddonButton = Template.bind({});
AddonButton.args = {
  rightAddon: {
    type: 'button',
    onClick: () => null,
    label: 'button'
  }
};

export const AddonIconButton = Template.bind({});
AddonIconButton.args = {
  rightAddon: {
    type: 'button',
    onClick: () => null,
    icon: <PaperPlaneTilt />
  }
};