import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import styled from 'styled-components';
import { PageLayout } from '..';

export default {
    title: 'Component/PageLayout',
    component: PageLayout,
    argTypes: {},
} as ComponentMeta<typeof PageLayout>;

const Blank = styled.div<{ height: number }>`
    background-color: #363636;
    width: 100%;
    color: #ffffff;
    height: ${(props) => props.height}px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Template: ComponentStory<typeof PageLayout> = (args) => {
    return (
        <PageLayout {...args}>
            <PageLayout.Header>
                <Blank height={100}>PageLayout.Header</Blank>
            </PageLayout.Header>
            <PageLayout.Content>
                <Blank height={500}>PageLayout.Content</Blank>
            </PageLayout.Content>
            <PageLayout.Pane>
                <Blank height={500}>PageLayout.Pane</Blank>
            </PageLayout.Pane>
            <PageLayout.Footer>
                <Blank height={100}>PageLayout.Footer</Blank>
            </PageLayout.Footer>
        </PageLayout>
    );
};

export const Primary = Template.bind({});
Primary.args = {};

export const LeftPane = Template.bind({});
LeftPane.args = {
    panPosition: 'start',
};

const WithoutHeaderAndFooterTemplate: ComponentStory<typeof PageLayout> = (args) => {
    return (
        <PageLayout {...args}>
            <PageLayout.Content>
                <Blank height={500}>PageLayout.Content</Blank>
            </PageLayout.Content>
            <PageLayout.Pane>
                <Blank height={500}>PageLayout.Pane</Blank>
            </PageLayout.Pane>
        </PageLayout>
    );
};

export const WithoutHeaderAndFooter = WithoutHeaderAndFooterTemplate.bind({});
WithoutHeaderAndFooter.args = {};
