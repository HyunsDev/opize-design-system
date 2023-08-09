import React from 'react';

import { Meta, StoryObj } from '@storybook/react';
import styled from 'styled-components';

import { Checkbox } from '..';

const meta: Meta<typeof Checkbox> = {
    title: 'HTML-Like Component/Form/Checkbox',
    component: Checkbox,
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

const Width500 = styled.div`
    width: 500px;
    margin: 0 auto;
`;

export const Primary: Story = {
    render: (args) => (
        <Width500>
            <Checkbox {...args} />
        </Width500>
    ),
};
