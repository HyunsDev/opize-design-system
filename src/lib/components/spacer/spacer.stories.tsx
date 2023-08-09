import React from 'react';

import { Meta, StoryObj } from '@storybook/react';
import styled from 'styled-components';

import { Spacer } from '..';

const BlackBox = styled.div`
    width: 100%;
    height: 30px;
    background-color: #e9ecef;
`;

const meta: Meta<typeof Spacer> = {
    title: 'Opize Component/Spacer',
    component: Spacer,
};
export default meta;

type Story = StoryObj<typeof Spacer>;

export const Primary: Story = {
    args: {
        height: 30,
    },
    render: (args) => (
        <>
            <BlackBox />
            <Spacer {...args} />
            <BlackBox />
        </>
    ),
};
