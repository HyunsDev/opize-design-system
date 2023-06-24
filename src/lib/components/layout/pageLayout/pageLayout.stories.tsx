import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import styled from 'styled-components';

import { PageLayout } from '../..';

export default {
    title: 'Opize Component/Layout/PageLayout',
    component: PageLayout,
    subcomponents: {
        'PageLayout.Header': PageLayout.Header,
        'PageLayout.Content': PageLayout.Content,
        'PageLayout.Pane': PageLayout.Pane,
        'PageLayout.Footer': PageLayout.Footer,
    },
    argTypes: {
        gap: {
            control: {
                type: 'text',
            },
        },
        gutter: {
            control: {
                type: 'text',
            },
        },
        width: {
            control: {
                type: 'text',
            },
        },
        panPosition: {
            control: {
                type: 'select',
            },
            options: ['start', 'end'],
        },
        panWidth: {
            control: {
                type: 'text',
            },
        },
        backgroundColor: {
            control: {
                type: 'color',
            },
        },
        padding: {
            control: {
                type: 'text',
            },
        },
    },
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
Primary.args = {
    gap: '8px',
    gutter: '24px',
    panPosition: 'end',
    panWidth: '300px',
    width: '1200px',
};

const SoloTemplate: ComponentStory<typeof PageLayout> = (args) => {
    return (
        <PageLayout {...args}>
            <Blank height={500}>PageLayout</Blank>
        </PageLayout>
    );
};

export const Solo = SoloTemplate.bind({});
Solo.args = {};

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

const WithoutPanTemplate: ComponentStory<typeof PageLayout> = (args) => {
    return (
        <PageLayout {...args}>
            <PageLayout.Header>
                <Blank height={100}>PageLayout.Header</Blank>
            </PageLayout.Header>
            <PageLayout.Content>
                <Blank height={500}>PageLayout.Content</Blank>
            </PageLayout.Content>
            <PageLayout.Footer>
                <Blank height={100}>PageLayout.Footer</Blank>
            </PageLayout.Footer>
        </PageLayout>
    );
};

export const WithoutPan = WithoutPanTemplate.bind({});
WithoutPan.args = {};
