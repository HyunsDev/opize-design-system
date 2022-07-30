import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DotsThreeVertical, Gear, X } from 'phosphor-react'

import { ActionMenu } from '.';
import styled from 'styled-components';



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