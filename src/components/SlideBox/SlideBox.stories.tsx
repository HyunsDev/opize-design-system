import { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonGroup, Flex, SlideBox, SlideBoxProps, Spacer } from '..';
import { useState } from 'react';
import { cv } from '../..';

const meta: Meta<typeof SlideBox> = {
    title: 'Opize Component/SlideBox',
    component: SlideBox,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
};
export default meta;

type Story = StoryObj<typeof SlideBox>;

const Template = (args: SlideBoxProps) => {
    const [now, setNow] = useState(0);

    return (
        <Flex.Column
            gap="32px"
            width="300px"
        >
            <SlideBox
                {...args}
                now={now}
                setNow={setNow}
            >
                <SlideBox.Page index={0}>
                    <Spacer
                        height="100px"
                        color={cv.background}
                        backgroundColor={cv.foreground}
                        style={{
                            borderRadius: '8px',
                        }}
                    >
                        1
                    </Spacer>
                </SlideBox.Page>
                <SlideBox.Page index={1}>
                    <Spacer
                        height="300px"
                        color={cv.background}
                        backgroundColor={cv.foreground}
                        style={{
                            borderRadius: '8px',
                        }}
                    >
                        2
                    </Spacer>
                </SlideBox.Page>
                <SlideBox.Page index={2}>
                    <Spacer
                        height="200px"
                        color={cv.background}
                        backgroundColor={cv.foreground}
                        style={{
                            borderRadius: '8px',
                        }}
                    >
                        2
                    </Spacer>
                </SlideBox.Page>
            </SlideBox>
            <Flex.Center>
                <ButtonGroup>
                    <Button
                        onClick={() => setNow((prev) => prev - 1)}
                        iconOnly
                    >
                        -
                    </Button>
                    <Button onClick={() => setNow(0)}>{now}</Button>
                    <Button
                        onClick={() => setNow((prev) => prev + 1)}
                        iconOnly
                    >
                        +
                    </Button>
                </ButtonGroup>
            </Flex.Center>
        </Flex.Column>
    );
};

export const Primary: Story = {
    render: Template,
};
