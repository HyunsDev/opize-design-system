import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Avatar } from '..';
import Img from '../../../assets/opize.png';

export default {
    title: 'Component/Avatar',
    component: Avatar,
    argTypes: {
        size: {
            control: {
                type: 'range',
                min: 2,
                max: 96,
                step: 1,
            },
        },
    },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    src: Img,
};
