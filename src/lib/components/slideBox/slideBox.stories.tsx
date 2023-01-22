import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import styled from 'styled-components';
import { Button, CenterLayout, Flex, SlideBox, Text } from '..';
import { useSlideBox } from './hook/useSlideBox';

export default {
    title: 'Opize Component/SlideBox',
    component: SlideBox,
    argTypes: {},
} as ComponentMeta<typeof SlideBox>;

const Space = styled.div`
    background-color: #f0f0f0;
`;

const Template: ComponentStory<typeof SlideBox> = () => {
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

const ExampleTemplate: ComponentStory<typeof SlideBox> = () => {
    const { move, now } = useSlideBox();

    return (
        <>
            <CenterLayout width="300px">
                <SlideBox>
                    <SlideBox.Page pos={0}>
                        <Flex.Row gap="8px">
                            <Text>{now}</Text>
                            <Button onClick={() => move(now + 1)}>+1</Button>
                        </Flex.Row>
                        <Space style={{ height: '300px' }} />
                    </SlideBox.Page>
                    <SlideBox.Page pos={1}>
                        <Flex.Row gap="8px">
                            <Button onClick={() => move(now - 1)}>-1</Button>
                            <Text>{now}</Text>
                            <Button onClick={() => move(now + 1)}>+1</Button>
                        </Flex.Row>
                        <Space style={{ height: '300px' }} />
                    </SlideBox.Page>
                    <SlideBox.Page pos={2}>
                        <Flex.Row gap="8px">
                            <Button onClick={() => move(now - 1)}>-1</Button>
                            <Text>{now}</Text>
                        </Flex.Row>
                        <Space style={{ height: '400px' }} />
                    </SlideBox.Page>
                </SlideBox>
            </CenterLayout>
        </>
    );
};

export const Example = ExampleTemplate.bind({});
Example.args = {};
