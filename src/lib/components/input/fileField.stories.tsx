import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FileField } from '..';
import styled from 'styled-components';


export default {
  title: 'Component/Form/FileField',
  component: FileField,
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof FileField>;


const Width500 = styled.div`
  width: 500px;
  margin: 0 auto;
`

const Template: ComponentStory<typeof FileField> = (args) => <Width500><FileField {...args} /></Width500>;

export const Primary = Template.bind({});
Primary.args = {

};