import React from 'react';

import { Meta, StoryObj } from '@storybook/react';
import styled from 'styled-components';

import { Radio, RadioGroup } from '..';

import { Width500 } from './components/Width500';

const meta: Meta<typeof Radio> = {
    title: 'HTML-Like Component/Form/Radio',
    component: Radio,
};
export default meta;

type Story = StoryObj<typeof Radio>;

export const Primary: Story = {
    args: {
        label: 'Label',
    },
    render: (args) => (
        <Width500>
            <RadioGroup>
                <Radio
                    {...args}
                    name="a"
                    value="select1"
                />
                <Radio
                    {...args}
                    name="a"
                    value="select2"
                />
                <Radio
                    {...args}
                    name="a"
                    value="select3"
                />
                <Radio
                    {...args}
                    name="a"
                    value="select4"
                />
            </RadioGroup>
        </Width500>
    ),
};
