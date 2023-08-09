import React from 'react';

import { Meta, StoryObj } from '@storybook/react';
import styled from 'styled-components';

import { CenterLayout } from '../..';

const meta: Meta<typeof CenterLayout> = {
    title: 'Opize Component/Layout/CenterLayout',
    component: CenterLayout,
};
export default meta;

type Story = StoryObj<typeof CenterLayout>;

const Blank = styled.div<{ height: number }>`
    background-color: #363636;
    width: 100px;
    color: #ffffff;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Primary: Story = {
    args: {
        gap: '8px',
        gutter: '24px',
        width: '1200px',
        minHeight: '300px',
        backgroundColor: '#f0f0f0',
    },
    render: (args) => (
        <CenterLayout {...args}>
            <Blank height={500}>CenterLayout</Blank>
        </CenterLayout>
    ),
};
