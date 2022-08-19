import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Divider } from '..';

export default {
    title: 'HTML-Like Component/Divider',
    component: Divider,
    argTypes: {},
} as ComponentMeta<typeof Divider>;

const Template: ComponentStory<typeof Divider> = (args) => <Divider {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
