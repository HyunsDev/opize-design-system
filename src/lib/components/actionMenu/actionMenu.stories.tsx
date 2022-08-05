import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DotsThreeVertical, Gear, X } from 'phosphor-react'

import { ActionMenu } from '.';
import styled from 'styled-components';

import profileImg from '../../../assets/hyuns.jpg'


export default {
  title: 'Library/actionMenu',
  component: ActionMenu,
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ActionMenu>;

const Template: ComponentStory<typeof ActionMenu> = (args) => <ActionMenu {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'Label',
    icon: <DotsThreeVertical />,
    actions: [
        [
            {
                label: 'Label',
                icon: <Gear />,
                onClick: () => null,
            }, {
                label: '라벨',
                icon: <Gear />,
                onClick: () => null,
            }, {
                label: '라벨',
                icon: <Gear />,
                onClick: () => null,
            }
        ], [
            {
                label: '삭제',
                icon: <X />,
                onClick: () => null,
                color: 'red'
            }
        ]
    ]
};

export const OnlyLabel = Template.bind({});
OnlyLabel.args = {
    label: 'Label',
    actions: [
        [
            {
                label: 'Label',
                icon: <Gear />,
                onClick: () => null,
            }, {
                label: '라벨',
                icon: <Gear />,
                onClick: () => null,
            }, {
                label: '라벨',
                icon: <Gear />,
                onClick: () => null,
            }
        ], [
            {
                label: '삭제',
                icon: <X />,
                onClick: () => null,
                color: 'red'
            }
        ]
    ]
};

export const OnlyIcon = Template.bind({});
OnlyIcon.args = {
    icon: <DotsThreeVertical />,
    actions: [
        [
            {
                label: 'Label',
                icon: <Gear />,
                onClick: () => null,
            }, {
                label: '라벨',
                icon: <Gear />,
                onClick: () => null,
            }, {
                label: '라벨',
                icon: <Gear />,
                onClick: () => null,
            }
        ], [
            {
                label: '삭제',
                icon: <X />,
                onClick: () => null,
                color: 'red'
            }
        ]
    ]
};

const RightPos = styled.div`
    float: right;
`

const TemplateRight: ComponentStory<typeof ActionMenu> = (args) => <RightPos><ActionMenu {...args} /></RightPos>;
export const Right = TemplateRight.bind({});
Right.args = {
    icon: <DotsThreeVertical />,
    actions: [
        [
            {
                label: 'Label',
                icon: <Gear />,
                onClick: () => null,
            }, {
                label: '라벨',
                icon: <Gear />,
                onClick: () => null,
            }, {
                label: '라벨',
                icon: <Gear />,
                onClick: () => null,
            }
        ], [
            {
                label: '삭제',
                icon: <X />,
                onClick: () => null,
                color: 'red'
            }
        ]
    ]
};

const ProfileImg = styled.img`
    width: 28px;
    height: 28px;
    border-radius: 28px;
`

const AvatarRight: ComponentStory<typeof ActionMenu> = (args) => <RightPos><ActionMenu {...args} /></RightPos>;
export const Avatar = AvatarRight.bind({});
Avatar.args = {
    icon: <ProfileImg src={profileImg} alt='' />,
    actions: [
        [
            {
                label: 'Label',
                icon: <Gear />,
                onClick: () => null,
            }, {
                label: '라벨',
                icon: <Gear />,
                onClick: () => null,
            }, {
                label: '라벨',
                icon: <Gear />,
                onClick: () => null,
            }
        ], [
            {
                label: '삭제',
                icon: <X />,
                onClick: () => null,
                color: 'red'
            }
        ]
    ]
};