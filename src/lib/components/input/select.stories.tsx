import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Select } from '.';
import styled from 'styled-components';


export default {
  title: 'Library/input/Select',
  component: Select,
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Select>;


const Width500 = styled.div`
  width: 500px;
  margin: 0 auto;
`

const Template: ComponentStory<typeof Select> = (args) => <Width500>
    <Select {...args}>
        <Select.Option value="select1">select1</Select.Option>
        <Select.Option value="select2">select2</Select.Option>
        <Select.Option value="select3">select3</Select.Option>
        <Select.Option value="select4">select4</Select.Option>
    </Select>
</Width500>;

export const Primary = Template.bind({});
Primary.args = {

};