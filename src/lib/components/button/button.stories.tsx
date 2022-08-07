import React, { useRef, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Check } from 'phosphor-react'

import { Button } from '.';


export default {
  title: 'Library/Button',
  component: Button,
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: "hello, World!",
    onClick: () => null,
    width: '200px'
};

export const Link = Template.bind({});
Link.args = {
    label: "hello, World!",
    to: '/',
    width: '200px'
};

export const OnlyIcon = Template.bind({});
OnlyIcon.args = {
    icon: <Check />,
    width: '200px'
};

export const WithIcon = Template.bind({});
WithIcon.args = {
    icon: <Check />,
    label: "hello, World!",
    width: '200px'
};

const LoadingTemplate: ComponentStory<typeof Button> = (args) => {
  const [ loading, setLoading ] = useState(false)
  const timer = useRef<any>()

  const onClick = () => {
    setLoading(true)
    clearInterval(timer.current)
    timer.current = setTimeout(() => {
      setLoading(false)
    }, 2000)
  }

  return <Button {...args} onClick={onClick} isLoading={loading} />
};
export const Loading = LoadingTemplate.bind({});
Loading.args = {
    icon: <Check />,
    label: "hello, World!",
    width: '200px'
};