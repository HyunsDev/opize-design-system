import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DotsThreeVertical } from 'phosphor-react';
import styled from 'styled-components';

import { ActionBox } from '..';
import profileImg from '../../../assets/hyuns.jpg';

export default {
    title: 'Opize Component/ActionBox',
    component: ActionBox,
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ActionBox>;

const Template: ComponentStory<typeof ActionBox> = (args) => <ActionBox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Label',
    icon: <DotsThreeVertical />,
    overlay: 'Hello, world!',
};

export const OnlyLabel = Template.bind({});
OnlyLabel.args = {
    children: 'Label',
    overlay: 'Hello, world!',
};

export const OnlyIcon = Template.bind({});
OnlyIcon.args = {
    icon: <DotsThreeVertical />,
    overlay: 'Hello, world!',
};

const RightPos = styled.div`
    float: right;
`;

const TemplateRight: ComponentStory<typeof ActionBox> = (args) => (
    <RightPos>
        <ActionBox {...args} />
    </RightPos>
);
export const Right = TemplateRight.bind({});
Right.args = {
    icon: <DotsThreeVertical />,
    overlay: 'Hello, world!',
};

const ProfileImg = styled.img`
    width: 28px;
    height: 28px;
    border-radius: 28px;
`;

const AvatarRight: ComponentStory<typeof ActionBox> = (args) => (
    <RightPos>
        <ActionBox {...args} />
    </RightPos>
);
export const Avatar = AvatarRight.bind({});
Avatar.args = {
    icon: <ProfileImg src={profileImg} alt="" />,
    overlay: 'Hello, world!',
    variant: 'text',
};
