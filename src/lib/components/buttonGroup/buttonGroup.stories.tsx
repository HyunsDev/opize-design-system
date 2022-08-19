import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Minus, Plus } from 'phosphor-react';
import { ButtonGroup, Button, Flex } from '..';

export default {
    title: 'Component/ButtonGroup',
    component: ButtonGroup,
    argTypes: {},
} as ComponentMeta<typeof ButtonGroup>;

const Template: ComponentStory<typeof ButtonGroup> = (args) => (
    <Flex.Column gap="16px">
        <ButtonGroup {...args}>
            <Button>Button 1</Button>
            <Button>Button 2</Button>
            <Button>Button 3</Button>
        </ButtonGroup>
        <ButtonGroup {...args}>
            <Button icon={<Minus />} />
            <Button icon={<Plus />} />
        </ButtonGroup>
        <ButtonGroup {...args}>
            <Button variant="contained">Button 1</Button>
            <Button variant="contained">Button 2</Button>
            <Button variant="contained">Button 3</Button>
        </ButtonGroup>
        <ButtonGroup {...args}>
            <Button variant="outlined">Button 1</Button>
            <Button variant="outlined">Button 2</Button>
            <Button variant="outlined">Button 3</Button>
        </ButtonGroup>
        <ButtonGroup {...args}>
            <Button variant="text">Button 1</Button>
            <Button variant="text">Button 2</Button>
            <Button variant="text">Button 3</Button>
        </ButtonGroup>
    </Flex.Column>
);

export const Primary = Template.bind({});
Primary.args = {};
