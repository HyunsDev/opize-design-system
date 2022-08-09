import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Radio, RadioGroup } from '..';
import styled from 'styled-components';


export default {
  title: 'Component/Form/Radio',
  component: Radio,
  argTypes: {
    label: {
        control: { type: 'text' }
    }
  },
} as ComponentMeta<typeof Radio>;

const Width500 = styled.div`
  width: 500px;
  margin: 0 auto;
`

const Template: ComponentStory<typeof Radio> = (args) => <Width500>
    <RadioGroup>
        <Radio {...args} name='a' value='select1'></Radio>
        <Radio {...args} name='a' value="select2"></Radio>
        <Radio {...args} name='a' value="select3"></Radio>
        <Radio {...args} name='a' value="select4"></Radio>
    </RadioGroup>
</Width500>;

export const Primary = Template.bind({});
Primary.args = {

};