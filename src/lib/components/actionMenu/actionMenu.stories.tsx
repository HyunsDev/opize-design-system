import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DotsThreeVertical, Gear, X } from 'phosphor-react';
import styled from 'styled-components';

import { ActionMenu, Avatar as AvatarTag } from '..';
import profileImg from '../../../assets/hyuns.jpg';

export default {
    title: 'Opize Component/ActionMenu',
    component: ActionMenu,
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ActionMenu>;

const Template: ComponentStory<typeof ActionMenu> = (args) => <ActionMenu {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Label',
    icon: <DotsThreeVertical />,
    actions: [
        [
            {
                label: 'Label',
                icon: <Gear />,
                onClick: () => null,
            },
            {
                label: '라벨',
                icon: <Gear />,
                onClick: () => null,
            },
            {
                label: '라벨',
                icon: <Gear />,
                onClick: () => null,
            },
        ],
        [
            {
                label: '삭제',
                icon: <X />,
                onClick: () => null,
                color: 'red',
            },
        ],
    ],
};

export const OnlyLabel = Template.bind({});
OnlyLabel.args = {
    children: 'Label',
    actions: [
        [
            {
                label: 'Label',
                icon: <Gear />,
                onClick: () => null,
            },
            {
                label: '라벨',
                icon: <Gear />,
                onClick: () => null,
            },
            {
                label: '라벨',
                icon: <Gear />,
                onClick: () => null,
            },
        ],
        [
            {
                label: '삭제',
                icon: <X />,
                onClick: () => null,
                color: 'red',
            },
        ],
    ],
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
            },
            {
                label: '라벨',
                icon: <Gear />,
                onClick: () => null,
            },
            {
                label: '라벨',
                icon: <Gear />,
                onClick: () => null,
            },
        ],
        [
            {
                label: '삭제',
                icon: <X />,
                onClick: () => null,
                color: 'red',
            },
        ],
    ],
};

const RightPos = styled.div`
    float: right;
`;

const TemplateRight: ComponentStory<typeof ActionMenu> = (args) => (
    <RightPos>
        <ActionMenu {...args} />
    </RightPos>
);
export const Right = TemplateRight.bind({});
Right.args = {
    icon: <DotsThreeVertical />,
    actions: [
        [
            {
                label: 'Label',
                icon: <Gear />,
                onClick: () => null,
            },
            {
                label: '라벨',
                icon: <Gear />,
                onClick: () => null,
            },
            {
                label: '라벨',
                icon: <Gear />,
                onClick: () => null,
            },
        ],
        [
            {
                label: '삭제',
                icon: <X />,
                onClick: () => null,
                color: 'red',
            },
        ],
    ],
};

const AvatarRight: ComponentStory<typeof ActionMenu> = (args) => (
    <RightPos>
        <ActionMenu {...args} />
    </RightPos>
);
export const Avatar = AvatarRight.bind({});
Avatar.args = {
    icon: <AvatarTag src={profileImg} alt="" size={28} />,
    variant: 'text',
    actions: [
        [
            {
                label: 'Label',
                icon: <Gear />,
                onClick: () => null,
            },
            {
                label: '라벨',
                icon: <Gear />,
                onClick: () => null,
            },
            {
                label: '라벨',
                icon: <Gear />,
                onClick: () => null,
            },
        ],
        [
            {
                label: '삭제',
                icon: <X />,
                onClick: () => null,
                color: 'red',
            },
        ],
    ],
};
