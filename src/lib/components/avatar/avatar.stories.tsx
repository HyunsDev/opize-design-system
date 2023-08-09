import React from 'react';

import { ComponentStory, ComponentMeta, Meta, StoryObj } from '@storybook/react';

import { Avatar } from '..';
import Img from '../../../assets/opize.png';

const meta: Meta<typeof Avatar> = {
    title: 'HTML-Like Component/Avatar',
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
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
    args: {
        src: Img,
    },
};
