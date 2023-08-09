import React, { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';
import styled from 'styled-components';

import { Button, Flex, SlideBox, Text } from '..';

import { useSlideBox } from './hook/useSlideBox';

const meta: Meta<typeof SlideBox> = {
    title: 'Opize Component/SlideBox',
    component: SlideBox,
};
export default meta;

type Story = StoryObj<typeof SlideBox>;

const Space = styled.div`
    background-color: #f0f0f0;
`;

const Template = (args: any) => {
    const { move, now } = useSlideBox();

    return (
        <>
            <Flex.Row gap="8px">
                <Button onClick={() => move(now - 1)}>-1</Button>
                <Text>{now}</Text>
                <Button onClick={() => move(now + 1)}>+1</Button>
            </Flex.Row>
            <SlideBox {...args}>
                <SlideBox.Page pos={0}>
                    0
                    <Space style={{ height: '500px' }} />
                </SlideBox.Page>
                <SlideBox.Page pos={1}>
                    1
                    <Space style={{ height: '300px' }} />
                </SlideBox.Page>
                <SlideBox.Page pos={2}>
                    2
                    <Space style={{ height: '400px' }} />
                </SlideBox.Page>
            </SlideBox>
        </>
    );
};

export const Primary: Story = {
    render: Template,
};
