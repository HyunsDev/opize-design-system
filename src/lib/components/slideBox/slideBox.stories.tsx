import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import styled from 'styled-components';
import { Button, Flex, SlideBox, Spacer, Text } from '..';
import OpizeLogo from '../../../assets/opize_logoText.png';
import { useSlideBox } from './hook/useSlideBox';

export default {
    title: 'Opize Component/SlideBox',
    component: SlideBox,
    argTypes: {},
} as ComponentMeta<typeof SlideBox>;

const Space = styled.div`
    background-color: #f0f0f0;
    width: 100%;
`;

const Template: ComponentStory<typeof SlideBox> = (args) => {
    const { move, now } = useSlideBox();

    return (
        <>
            <Flex.Row gap="8px">
                <Button onClick={() => move(now - 1)}>-1</Button>
                <Text>{now}</Text>
                <Button onClick={() => move(now + 1)}>+1</Button>
            </Flex.Row>
            <SlideBox>
                <SlideBox.Page pos={0}>
                    0
                    <Space style={{ height: '300px' }} />
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

export const Primary = Template.bind({});
Primary.args = {};
