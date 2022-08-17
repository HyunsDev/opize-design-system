import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PaperPlaneTilt } from 'phosphor-react'

import { Autocomplete } from '..';
import styled from 'styled-components';


export default {
  title: 'Component/Form/Autocomplete',
  component: Autocomplete,
  argTypes: {
    label: {
      control: { type: 'text' }
    }
  },
} as ComponentMeta<typeof Autocomplete>;


const Width500 = styled.div`
  width: 500px;
  margin: 0 auto;
`

const Template: ComponentStory<typeof Autocomplete> = (args) => {
  const [value, setValue] =  useState('')

  return (
    <Width500>
      <Autocomplete {...args} value={value} onChange={e => setValue(e.target.value)} />
      <p style={{textAlign: 'right'}}>{value}</p>
    </Width500>
  )
};

export const Primary = Template.bind({});
Primary.args = {
  items: [
    {
      text: 'html',
      id: 1,
    },
    {
      text: 'css',
      id: 2,
    },
    {
      text: 'javascript',
      id: 3,
    },
    {
      text: 'css-in-javascript',
      id: 4,
    }
  ]
};