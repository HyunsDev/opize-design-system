import React, { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';
import styled from 'styled-components';

import { Autocomplete } from '..';

const meta: Meta<typeof Autocomplete> = {
    title: 'HTML-Like Component/Form/Autocomplete',
    component: Autocomplete,
};
export default meta;

type Story = StoryObj<typeof Autocomplete>;

const Width500 = styled.div`
    width: 500px;
    margin: 0 auto;
`;

const Render = (args: any) => {
    const [value, setValue] = useState('');

    return (
        <Width500>
            <Autocomplete
                {...args}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <p style={{ textAlign: 'right' }}>{value}</p>
        </Width500>
    );
};

export const Primary: Story = {
    args: {
        items: [
            {
                text: 'html',
                id: 1,
            },
            {
                text: 'css',
                id: 2,
            },
            {
                text: 'javascript',
                id: 3,
            },
            {
                text: 'css-in-javascript',
                id: 4,
            },
        ],
    },
    render: (args) => Render(args),
};
