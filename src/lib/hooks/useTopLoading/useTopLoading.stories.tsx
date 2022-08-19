import React, { useEffect, useRef } from 'react';

import { Button, Flex } from '../../components';
import { useTopLoading } from '.';
import { sleep } from '../../utils/sleep';

export default {
    title: 'Hook/useTopLoading',
    argTypes: {},
    fullscreen: true,
};

function Template() {
    const topLoading = useTopLoading();
    const timer = useRef<NodeJS.Timeout>();

    const loading = () => {
        topLoading.start();
        clearTimeout(timer.current);
        timer.current = setTimeout(() => {
            topLoading.end();
        }, 1000);
    };

    useEffect(() => {
        (async () => {
            topLoading.start();
            await sleep(1000);
            topLoading.end();
        })();
    }, [topLoading]);

    return (
        <Flex
            style={{
                flexDirection: 'column',
                gap: '8px',
            }}
        >
            <Button
                onClick={() => {
                    loading();
                }}
                variant="contained"
            >
                Default Loading
            </Button>
            <Button onClick={() => topLoading.start()}>Start Loading</Button>
            <Button onClick={() => topLoading.setProgress(0)}>Progress 0</Button>
            <Button onClick={() => topLoading.setProgress(25)}>Progress 25</Button>
            <Button onClick={() => topLoading.setProgress(50)}>Progress 50</Button>
            <Button onClick={() => topLoading.setProgress(75)}>Progress 75</Button>
            <Button onClick={() => topLoading.setProgress(99)}>Progress 99</Button>
            <Button onClick={() => topLoading.end()}>end Loading</Button>
        </Flex>
    );
}

export const Primary = Template.bind({});
