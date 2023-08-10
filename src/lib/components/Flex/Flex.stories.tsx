import React from 'react';

import { Meta, StoryObj } from '@storybook/react';
import styled from 'styled-components';

import { Flex } from '..';

const meta: Meta<typeof Flex> = {
    title: 'HTML-Like Component/Flex',
    component: Flex,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        gap: {
            control: {
                type: 'text',
            },
        },
        direction: {
            control: {
                type: 'inline-radio',
            },
            options: ['row', 'column'],
        },
        align: {
            control: {
                type: 'inline-radio',
            },
            options: ['center', 'start', 'end', 'stretch', 'baseline'],
        },
        justify: {
            control: {
                type: 'select',
            },
            options: ['center', 'start', 'end', 'space-between', 'space-around', 'space-evenly'],
        },
        width: {
            control: {
                type: 'text',
            },
        },
    },
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
    render: (args: any) => (
        <Flex {...args}>
            <Item />
            <Item />
            <Item />
        </Flex>
    ),
    args: {
        gap: '12px',
    },
};
