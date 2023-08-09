import React from 'react';

import { Meta, StoryObj } from '@storybook/react';
import styled from 'styled-components';

import { PageLayout } from '../..';

const meta: Meta<typeof PageLayout> = {
    title: 'Opize Component/Layout/PageLayout',
    component: PageLayout,
};
export default meta;

type Story = StoryObj<typeof PageLayout>;

const Blank = styled.div<{ height: number }>`
    background-color: #363636;
    width: 100%;
    color: #ffffff;
    height: ${(props) => props.height}px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Primary: Story = {
    args: {
        gap: '8px',
        gutter: '24px',
        panPosition: 'end',
        panWidth: '300px',
        width: '1200px',
    },
    render: (args) => (
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
    ),
};
