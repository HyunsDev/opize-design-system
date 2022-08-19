import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import styled from 'styled-components';
import { Switch } from '..';

export default {
    title: 'HTML-Like Component/Form/Switch',
    component: Switch,
    argTypes: {
        label: {
            control: { type: 'text' },
        },
    },
} as ComponentMeta<typeof Switch>;

const Width500 = styled.div`
    width: 500px;
    margin: 0 auto;
`;

const Template: ComponentStory<typeof Switch> = (args) => (
    <Width500>
        <Switch {...args} />
    </Width500>
);

export const Primary = Template.bind({});
Primary.args = {};
