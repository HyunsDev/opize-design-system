import React, { createContext, useCallback, useState } from 'react';
import { sleep } from '../../utils/sleep';
import { TopLoadingBar } from './TopLoadingBar';

export interface TopLoadingContextProps {
    start: () => void;
    finish: () => void;
    isLoading: boolean;
    setProgress: (progress: number) => void;
    progress: number;
}

export const TopLoadingContext = createContext<TopLoadingContextProps>({
    start: () => {},
    finish: () => {},
    isLoading: false,
    setProgress: () => {},
    progress: 0,
});

export function TopLoadingContextProvider({ children }: { children: React.ReactNode }) {
    const [isLoading, setIsLoading] = useState(false);
    const [progress, setProgress] = useState(0);
    const timer = React.useRef<NodeJS.Timeout>();

    const start = useCallback(() => {
        setIsLoading(true);
        setProgress(10);
    }, []);

    const finish = useCallback(() => {
        setProgress(100);
        clearTimeout(timer.current);
        timer.current = setTimeout(async () => {
            setIsLoading(false);
            await sleep(200);
            setProgress(0);
        }, 350);
    }, []);

    return (
        <TopLoadingContext.Provider
            value={{
                start,
                finish,
                isLoading,
                setProgress,
                progress,
            }}
        >
            <TopLoadingBar
                isShow={isLoading}
                progress={progress}
            />
            {children}
        </TopLoadingContext.Provider>
    );
}
