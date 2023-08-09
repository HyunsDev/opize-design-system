import React from 'react';

import { Meta, StoryObj } from '@storybook/react';
import styled from 'styled-components';

import { BoxLayout } from '../..';

const meta: Meta<typeof BoxLayout> = {
    title: 'Opize Component/Layout/BoxLayout',
    component: BoxLayout,
};
export default meta;

type Story = StoryObj<typeof BoxLayout>;

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
        width: '1200px',
    },
    render: (args) => (
        <BoxLayout {...args}>
            <Blank height={500}>BoxLayout</Blank>
        </BoxLayout>
    ),
};
