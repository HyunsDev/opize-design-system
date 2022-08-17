import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Code, Text } from '..';

export default {
    title: 'Component/Code',
    component: Code,
    argTypes: {},
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => (
    <Text>
        This is <Code {...args} /> Component
    </Text>
);

export const Primary = Template.bind({});
Primary.args = {
    children: 'code',
};
