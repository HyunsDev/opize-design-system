import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import styled from 'styled-components';

import { FileField } from '..';

export default {
    title: 'HTML-Like Component/Form/FileField',
    component: FileField,
    argTypes: {
        label: {
            control: { type: 'text' },
        },
    },
} as ComponentMeta<typeof FileField>;

const Width500 = styled.div`
    width: 500px;
    margin: 0 auto;
`;

const Template: ComponentStory<typeof FileField> = (args) => (
    <Width500>
        <FileField {...args} />
    </Width500>
);

export const Primary = Template.bind({});
Primary.args = {};
