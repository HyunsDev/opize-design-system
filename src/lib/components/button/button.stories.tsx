import React from 'react';
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
    onClick: () => null
};

export const Link = Template.bind({});
Link.args = {
    label: "hello, World!",
    to: '/'
};

export const OnlyIcon = Template.bind({});
OnlyIcon.args = {
    icon: <Check />
};

export const WithIcon = Template.bind({});
WithIcon.args = {
    icon: <Check />,
    label: "hello, World!"
};