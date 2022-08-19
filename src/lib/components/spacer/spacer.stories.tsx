import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import styled from 'styled-components';
import { Spacer } from '..';

export default {
    title: 'Opize Component/Spacer',
    component: Spacer,
    argTypes: {},
} as ComponentMeta<typeof Spacer>;

const BlackBox = styled.div`
    width: 100%;
    height: 30px;
    background-color: #e9ecef;
`;

const Template: ComponentStory<typeof Spacer> = (args) => (
    <>
        <BlackBox />
        <Spacer {...args} />
        <BlackBox />
    </>
);

export const Primary = Template.bind({});
Primary.args = {
    height: 30,
};
