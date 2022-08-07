import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Flex } from '.';
import styled from 'styled-components';


export default {
  title: 'Component/Flex',
  component: Flex,
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Flex>;


const Item = styled.div`
  width: 100px;
  height: 100px;
  background-color: #353535;
  border-radius: 4px;
`

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args}><Item /><Item /><Item /></Flex>;
export const FlexRow = Template.bind({});
FlexRow.args = {
  style: {gap: '8px'}
};