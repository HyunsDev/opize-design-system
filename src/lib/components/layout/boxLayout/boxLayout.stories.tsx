import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import styled from 'styled-components';
import { BoxLayout } from '../..';

export default {
    title: 'Opize Component/BoxLayout',
    component: BoxLayout,
    argTypes: {},
} as ComponentMeta<typeof BoxLayout>;

const Blank = styled.div<{ height: number }>`
    background-color: #363636;
    width: 100%;
    color: #ffffff;
    height: ${(props) => props.height}px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Template: ComponentStory<typeof BoxLayout> = (args) => {
    return (
        <BoxLayout {...args}>
            <Blank height={500}>BoxLayout</Blank>
        </BoxLayout>
    );
};

export const Primary = Template.bind({});
Primary.args = {
    gap: '8px',
    gutter: '24px',
    width: '1200px',
};
