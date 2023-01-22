import React, { createContext, useMemo, useState } from 'react';

export interface SlideBoxValueContextProps {
    now: number;
}
export interface SlideBoxActionContextProps {
    move: (pos: number) => void;
}

export const SlideBoxValueContext = createContext<SlideBoxValueContextProps>({
    now: 0,
});
export const SlideBoxActionContext = createContext<SlideBoxActionContextProps>({
    move: () => null,
});

function SlideBoxContextProvider({ children }: { children: React.ReactNode }) {
    const [now, setNow] = useState(0);

    const action = useMemo(
        () => ({
            move: (pos: number) => {
                setNow(pos);
            },
        }),
        []
    );

    const value = useMemo(
        () => ({
            now,
        }),
        [now]
    );

    return (
        <SlideBoxActionContext.Provider value={action}>
            <SlideBoxValueContext.Provider value={value}>{children}</SlideBoxValueContext.Provider>
        </SlideBoxActionContext.Provider>
    );
}

export default SlideBoxContextProvider;
