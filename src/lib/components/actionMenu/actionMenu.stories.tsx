import React from 'react';

import { StoryObj, Meta } from '@storybook/react';
import { DotsThreeVertical, Gear, X } from 'phosphor-react';

import { ActionMenu, Flex } from '..';

const meta: Meta<typeof ActionMenu> = {
    title: 'Opize Component/ActionMenu',
    component: ActionMenu,
};
export default meta;

type Story = StoryObj<typeof ActionMenu>;

export const Primary: Story = {
    args: {
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
    },
};

export const OnlyLabel: Story = {
    args: {
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
    },
};

export const RightPosition: Story = {
    args: {
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
            ],
        ],
    },
    render: (args) => (
        <Flex.Between>
            <div />
            <ActionMenu {...args} />
        </Flex.Between>
    ),
};
