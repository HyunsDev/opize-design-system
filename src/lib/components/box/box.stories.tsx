import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Box } from '.';
import { TextField } from '../input';


export default {
  title: 'Component/Box',
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

export const WithFooter = Template.bind({});
WithFooter.args = {
    children: <>
        Hello, World!
        <TextField type='text' value='' onChange={() => null}  />
    </>,
    title: 'Title',
    footerTemplate: {
        text: 'text',
        button: {
            label: 'label',
            variant: 'contained',
            to: '/'
        }
    }
};

export const WithHeader = Template.bind({});
WithHeader.args = {
    children: <>
        Hello, World!
        <TextField type='text' value='' onChange={() => null}  />
    </>,
    header: 'Hello, world!' 
};