import { useRef } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { Button, Flex } from '../../components';

import { useTopLoading } from '.';

const meta: Meta = {
    title: 'Hooks/useTopLoading',
    parameters: {
        layout: 'centered',
    },
};
export default meta;

type Story = StoryObj;

function Template() {
    const { finish: finishLoading, start: startLoading, setProgress } = useTopLoading();
    const timer = useRef<NodeJS.Timeout>();

    const startAndFinishLoading = () => {
        startLoading();
        clearTimeout(timer.current);
        timer.current = setTimeout(() => {
            finishLoading();
        }, 1000);
    };

    return (
        <Flex
            style={{
                flexDirection: 'column',
                gap: '8px',
            }}
        >
            <Button
                onClick={() => {
                    startAndFinishLoading();
                }}
            >
                Default Loading
            </Button>
            <Button onClick={() => startLoading()}>Start Loading</Button>
            <Button onClick={() => setProgress(0)}>Progress 0</Button>
            <Button onClick={() => setProgress(25)}>Progress 25</Button>
            <Button onClick={() => setProgress(50)}>Progress 50</Button>
            <Button onClick={() => setProgress(75)}>Progress 75</Button>
            <Button onClick={() => setProgress(99)}>Progress 99</Button>
            <Button onClick={() => finishLoading()}>end Loading</Button>
        </Flex>
    );
}

export const Primary: Story = {
    render: Template,
};
