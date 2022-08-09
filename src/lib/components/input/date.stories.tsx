import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Datetime } from '..';
import styled from 'styled-components';


export default {
  title: 'Component/Form/Datetime',
  component: Datetime,
  argTypes: {
    type: {
      options: ['date', 'datetime-local', 'month', 'time', 'week'],
      control: { type: 'select' }
    },
    label: {
      control: { type: 'text' }
    }
  },
} as ComponentMeta<typeof Datetime>;


const Width500 = styled.div`
  width: 500px;
  margin: 0 auto;
`

const Template: ComponentStory<typeof Datetime> = (args) => <Width500><Datetime {...args} /></Width500>;

export const Primary = Template.bind({});
Primary.storyName = 'date'
Primary.args = {
  type: 'date'
};

export const DateTime = Template.bind({});
DateTime.args = {
  type: 'datetime-local'
};
DateTime.storyName = 'datetime'

export const Month = Template.bind({});
Month.args = {
  type: 'month'
};

export const Time = Template.bind({});
Time.args = {
  type: 'time'
};

export const Week = Template.bind({});
Week.args = {
  type: 'week'
};