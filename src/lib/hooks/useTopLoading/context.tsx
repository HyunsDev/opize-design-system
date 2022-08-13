import React, { useState, createContext, useCallback, useRef, useMemo } from "react";
import { TopLoadingBar } from "../../components/topLoadingBar";

export interface TopLoadingContextProps {
    start: Function,
    end: Function,
    setProgress: Function
}

export interface TopLoadingValueContextProps {
    progress: number
}

const sleep = (ms: number) => {
    return new Promise((r) => setTimeout(r, ms));
}

export const TopLoadingContext = createContext<TopLoadingContextProps>({
    setProgress: () => null,
    start: () => null,
    end: () => null
})

export const TopLoadingValueContext = createContext<TopLoadingValueContextProps>({
    progress: 0
})

const TopLoadingContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [progress, setProgress] = useState(0)
    const [isShow, setShow] = useState(false)
    const timer = useRef<any>()

    const action = useMemo(
        () => ({
            start() {
                setProgress(10)
                setShow(true)
            },
            end() {
                setProgress(100)
                clearTimeout(timer.current)
                timer.current = setTimeout(async () => {
                    setShow(false)
                    await sleep(200)
                    setProgress(0)
                }, 350)
            },
            setProgress(newProgress: number) {
                setProgress(10 + newProgress / 10 * 9)
            }
        }), []
    )

    return (
        <TopLoadingContext.Provider value={
            action
        }>
            <TopLoadingValueContext.Provider value={{
                progress
            }}>
                <TopLoadingBar width={progress} isShow={isShow} />
                {children}
            </TopLoadingValueContext.Provider>
        </TopLoadingContext.Provider>
    )

}

export default TopLoadingContextProvider