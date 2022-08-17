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
                label="Default Loading"
                onClick={() => {
                    loading();
                }}
                variant="contained"
            />
            <Button label="Start Loading" onClick={() => topLoading.start()} />
            <Button label="Progress 0" onClick={() => topLoading.setProgress(0)} />
            <Button label="Progress 25" onClick={() => topLoading.setProgress(25)} />
            <Button label="Progress 50" onClick={() => topLoading.setProgress(50)} />
            <Button label="Progress 75" onClick={() => topLoading.setProgress(75)} />
            <Button label="Progress 99" onClick={() => topLoading.setProgress(99)} />
            <Button label="end Loading" onClick={() => topLoading.end()} />
        </Flex>
    );
}

export const Primary = Template.bind({});
