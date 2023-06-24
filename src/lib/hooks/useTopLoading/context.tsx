import React, { useState, createContext, useRef, useMemo } from 'react';

import { TopLoadingBar } from '../../components/topLoadingBar';

export interface TopLoadingContextProps {
    start: () => void;
    end: () => void;
    setProgress: (progress: number) => void;
}

export interface TopLoadingValueContextProps {
    progress: number;
}

const sleep = (ms: number) => {
    // eslint-disable-next-line no-promise-executor-return
    return new Promise((r) => setTimeout(r, ms));
};

export const TopLoadingContext = createContext<TopLoadingContextProps>({
    setProgress: () => null,
    start: () => null,
    end: () => null,
});

export const TopLoadingValueContext = createContext<TopLoadingValueContextProps>({
    progress: 0,
});

function TopLoadingContextProvider({ children }: { children: React.ReactNode }) {
    const [progress, setProgress] = useState(0);
    const [isShow, setShow] = useState(false);
    const timer = useRef<NodeJS.Timeout>();

    const action = useMemo(
        () => ({
            start() {
                setProgress(10);
                setShow(true);
            },
            end() {
                setProgress(100);
                clearTimeout(timer.current);
                timer.current = setTimeout(async () => {
                    setShow(false);
                    await sleep(200);
                    setProgress(0);
                }, 350);
            },
            setProgress(newProgress: number) {
                setProgress(10 + (newProgress / 10) * 9);
            },
        }),
        []
    );

    const value = useMemo(
        () => ({
            progress,
        }),
        [progress]
    );

    return (
        <TopLoadingContext.Provider value={action}>
            <TopLoadingValueContext.Provider value={value}>
                <TopLoadingBar width={progress} isShow={isShow} />
                {children}
            </TopLoadingValueContext.Provider>
        </TopLoadingContext.Provider>
    );
}

export default TopLoadingContextProvider;
