import React, { useState, createContext, useCallback, useRef } from "react";
import { TopLoadingBar } from "../../components/topLoadingBar";

export interface TopLoadingContextProps {
    progress: number
    start: Function,
    end: Function,
    setProgress: Function
}

const sleep = (ms: number) => {
    return new Promise((r) => setTimeout(r, ms));
}

export const TopLoadingContext = createContext<TopLoadingContextProps>({
    progress: 0,
    setProgress: () => null,
    start: () => null,
    end: () => null
})

const TopLoadingContextProvider = ({children}: {children: React.ReactNode}) => {
    const [ progress, setProgress_ ] = useState(0)
    const [ isShow, setShow ] = useState(false)
    const timer = useRef<any>()

    const setProgress = useCallback((newProgress: number) => {
        setProgress_(10 + newProgress/10*9)
    }, [])

    const start = useCallback(() => {
        setProgress_(10)
        setShow(true)
    }, [])

    const end = useCallback(() => {
        setProgress_(100)
        clearTimeout(timer.current)
        timer.current = setTimeout(async () => {
            setShow(false)
            await sleep(200)
            setProgress_(0)
        }, 350)
    }, [])

    return (
        <TopLoadingContext.Provider
            value={{
                progress,
                setProgress,
                start,
                end
            }}
        >
            <TopLoadingBar width={progress} isShow={isShow} />
            {children}

        </TopLoadingContext.Provider>
    )

}

export default TopLoadingContextProvider