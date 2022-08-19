import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import styled from 'styled-components';
import { ActionList } from '..';

export default {
    title: 'Opize Component/ActionList',
    component: ActionList,
    argTypes: {
        isSticky: {
            type: 'boolean',
        },
    },
} as ComponentMeta<typeof ActionList>;

const Template: ComponentStory<typeof ActionList> = (args) => (
    <ActionList {...args}>
        <ActionList.Item to="/">Item</ActionList.Item>
        <ActionList.Item to="/">Item</ActionList.Item>
        <ActionList.Divider />
        <ActionList.Item to="/">Item</ActionList.Item>
    </ActionList>
);

export const Primary = Template.bind({});
Primary.args = {};

const StickyDiv = styled.div`
    position: relative;
    max-width: 300px;
    padding-top: 128px;
    margin: 0 auto;
    height: 3000px;
`;

const StickyTemplate: ComponentStory<typeof ActionList> = (args) => (
    <StickyDiv>
        <ActionList {...args}>
            <ActionList.Item to="/">Item</ActionList.Item>
            <ActionList.Item to="/">Item</ActionList.Item>
            <ActionList.Divider />
            <ActionList.Item to="/">Item</ActionList.Item>
        </ActionList>
    </StickyDiv>
);

export const Sticky = StickyTemplate.bind({});
Sticky.args = {
    isSticky: true,
};
