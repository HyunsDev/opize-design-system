import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import styled from 'styled-components';
import { ToolTip } from '..';

export default {
    title: 'Component/ToolTip',
    component: ToolTip,
    argTypes: {},
} as ComponentMeta<typeof ToolTip>;

const Obj = styled.div``;

const Template: ComponentStory<typeof ToolTip> = (args) => (
    <ToolTip {...args}>
        <Obj>Element</Obj>
    </ToolTip>
);

export const Primary = Template.bind({});
Primary.args = {
    direction: 'bottom',
    text: 'text',
};
