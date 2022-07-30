import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ToolTip } from '.';
import styled from 'styled-components';


export default {
  title: 'Library/ToolTip',
  component: ToolTip,
  argTypes: {
  },
} as ComponentMeta<typeof ToolTip>;

const Obj = styled.div`

`

const Template: ComponentStory<typeof ToolTip> = (args) => <ToolTip {...args}><Obj>Element</Obj></ToolTip>;

export const Primary = Template.bind({});
Primary.args = {
    direction: 'bottom',
    text: 'text'
};