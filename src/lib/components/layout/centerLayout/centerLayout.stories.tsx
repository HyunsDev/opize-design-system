import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import styled from 'styled-components';

import { CenterLayout } from '../..';

export default {
    title: 'Opize Component/Layout/CenterLayout',
    component: CenterLayout,
    argTypes: {},
} as ComponentMeta<typeof CenterLayout>;

const Blank = styled.div<{ height: number }>`
    background-color: #363636;
    width: 100px;
    color: #ffffff;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Template: ComponentStory<typeof CenterLayout> = (args) => {
    return (
        <CenterLayout {...args}>
            <Blank height={500}>CenterLayout</Blank>
        </CenterLayout>
    );
};

export const Primary = Template.bind({});
Primary.args = {
    gap: '8px',
    gutter: '24px',
    width: '1200px',
    minHeight: '300px',
    backgroundColor: '#f0f0f0',
};
