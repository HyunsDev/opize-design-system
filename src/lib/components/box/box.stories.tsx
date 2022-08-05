import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Box } from '.';
import { TextField } from '../input';


export default {
  title: 'Library/Box',
  component: Box,
  argTypes: {
  },
} as ComponentMeta<typeof Box>;



const Template: ComponentStory<typeof Box> = (args) => <Box {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Hello, World!'
};


export const WithTitle = Template.bind({});
WithTitle.args = {
    children: <>
        Hello, World!
        <TextField type='text' value='' onChange={() => null}  />
    </>,
    title: 'Title'
};