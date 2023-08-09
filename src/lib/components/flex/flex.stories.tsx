import React from 'react';

import { Meta, StoryObj } from '@storybook/react';
import styled from 'styled-components';

import { Flex } from '.';

const meta: Meta<typeof Flex> = {
    title: 'HTML-Like Component/Flex',
    component: Flex,
};
export default meta;

type Story = StoryObj<typeof Flex>;

const Item = styled.div`
    width: 100px;
    height: 100px;
    background-color: #353535;
    border-radius: 4px;
`;

export const Primary: Story = {
    render: (args) => (
        <Flex {...args}>
            <Item />
            <Item />
            <Item />
        </Flex>
    ),
};
