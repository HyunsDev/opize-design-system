import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import styled from 'styled-components';

import { Radio, RadioGroup } from '..';

export default {
    title: 'HTML-Like Component/Form/Radio',
    component: Radio,
    argTypes: {
        label: {
            control: { type: 'text' },
        },
    },
} as ComponentMeta<typeof Radio>;

const Width500 = styled.div`
    width: 500px;
    margin: 0 auto;
`;

const Template: ComponentStory<typeof Radio> = (args) => (
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
);

export const Primary = Template.bind({});
Primary.args = {
    label: 'Label',
};
