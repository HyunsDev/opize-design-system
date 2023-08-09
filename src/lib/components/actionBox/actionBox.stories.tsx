import React from 'react';

import { Meta, StoryObj } from '@storybook/react';
import { DotsThreeVertical } from 'phosphor-react';
import styled from 'styled-components';

import { ActionBox, Flex } from '..';
import profileImg from '../../../assets/hyuns.jpg';

const meta: Meta<typeof ActionBox> = {
    title: 'Opize Component/ActionBox',
    component: ActionBox,
};
export default meta;

type Story = StoryObj<typeof ActionBox>;
export const Primary: Story = {
    args: {
        children: 'Label',
        icon: <DotsThreeVertical />,
        overlay: 'Hello, world!',
    },
};

export const OnlyLabel: Story = {
    args: {
        children: 'Label',
        overlay: 'Hello, world!',
    },
};

export const OnlyIcon: Story = {
    args: {
        icon: <DotsThreeVertical />,
        overlay: 'Hello, world!',
    },
};

export const RightPosition: Story = {
    args: {
        children: 'Label',
        icon: <DotsThreeVertical />,
        overlay: 'Hello, world!',
    },
    render: (args) => {
        return (
            <Flex.Between>
                <div />
                <ActionBox {...args} />
            </Flex.Between>
        );
    },
};

const ProfileImg = styled.img`
    width: 28px;
    height: 28px;
    border-radius: 28px;
`;
export const Profile: Story = {
    args: {
        icon: (
            <ProfileImg
                src={profileImg}
                alt=""
            />
        ),
        overlay: 'Hello, world!',
        variant: 'text',
    },
    render: (args) => {
        return (
            <Flex.Between>
                <div />
                <ActionBox {...args} />
            </Flex.Between>
        );
    },
};
