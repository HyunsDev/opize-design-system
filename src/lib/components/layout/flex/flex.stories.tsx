import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Check } from 'phosphor-react'

import { FlexBetween as FlexBetweenComp, FlexCenter as FlexCenterComp, FlexColumn as FlexColumnComp, FlexRow as FlexRowComp } from '.';
import styled from 'styled-components';


export default {
  title: 'Library/FlexLayout',
  component: FlexRowComp,
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof FlexRowComp>;


const Item = styled.div`
  width: 100px;
  height: 100px;
  background-color: #353535;
  border-radius: 4px;
`

const Template: ComponentStory<typeof FlexRowComp> = (args) => <FlexRowComp {...args}><Item /><Item /><Item /></FlexRowComp>;
export const FlexRow = Template.bind({});
FlexRow.args = {

};

const FlexColumnTemplate: ComponentStory<typeof FlexColumnComp> = (args) => <FlexColumnComp {...args}><Item /><Item /><Item /></FlexColumnComp>;
export const FlexColumn = FlexColumnTemplate.bind({});
FlexColumn.args = {

};

const FlexCenterCompTemplate: ComponentStory<typeof FlexCenterComp> = (args) => <FlexCenterComp {...args}><Item /><Item /><Item /></FlexCenterComp>;
export const FlexCenter = FlexCenterCompTemplate.bind({});
FlexCenter.args = {

};

const FlexBetweenCompTemplate: ComponentStory<typeof FlexBetweenComp> = (args) => <FlexBetweenComp {...args}><Item /><Item /><Item /></FlexBetweenComp>;
export const FlexBetween = FlexBetweenCompTemplate.bind({});
FlexBetween.args = {

};