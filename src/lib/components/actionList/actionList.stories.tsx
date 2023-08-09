import React from 'react';

import { Meta, StoryObj } from '@storybook/react';
import styled from 'styled-components';

import { ActionList } from '..';

const meta: Meta<typeof ActionList> = {
    title: 'Opize Component/ActionList',
    component: ActionList,
    // subcomponents: {
    //     [ActionList.Item]: ActionList.Item,
    //     [ActionList.Divider]: ActionList.Divider,
    // },
    argTypes: {
        isSticky: {
            type: 'boolean',
        },
    },
};
export default meta;

type Story = StoryObj<typeof ActionList>;

export const Primary: Story = {
    args: {},
    render: (args) => (
        <ActionList {...args}>
            <ActionList.Item
                selected
                href="/"
            >
                Item
            </ActionList.Item>
            <ActionList.Item href="/">Item</ActionList.Item>
            <ActionList.Divider />
            <ActionList.Item href="/">Item</ActionList.Item>
        </ActionList>
    ),
};

const StickyDiv = styled.div`
    position: relative;
    max-width: 300px;
    padding-top: 128px;
    margin: 0 auto;
    height: 3000px;
`;

export const Sticky: Story = {
    args: {
        isSticky: true,
    },
    render: (args) => (
        <StickyDiv>
            <ActionList {...args}>
                <ActionList.Item
                    selected
                    href="/"
                >
                    Item
                </ActionList.Item>
                <ActionList.Item href="/">Item</ActionList.Item>
                <ActionList.Divider />
                <ActionList.Item href="/">Item</ActionList.Item>
            </ActionList>
        </StickyDiv>
    ),
};
