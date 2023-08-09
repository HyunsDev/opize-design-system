import React from 'react';

import { Meta, StoryObj } from '@storybook/react';
import styled from 'styled-components';

import { Flex, H1, H2, H3 } from '..';

const meta: Meta<typeof H1> = {
    title: 'HTML-Like Component/Title',
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof H1>;

export const Primary: Story = {
    render: (args) => (
        <Flex.Column gap="8px">
            <H1>H1</H1>
            <H2>H2</H2>
            <H3>H3</H3>
        </Flex.Column>
    ),
};
