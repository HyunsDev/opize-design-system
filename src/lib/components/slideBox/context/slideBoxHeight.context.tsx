import React, { createContext, useMemo, useState } from 'react';

export interface SlideBoxHeightContextProps {
    height: number;
    setHeight: (height: number) => void;
}

export const SlideBoxHeightContext = createContext<SlideBoxHeightContextProps>({
    height: 100,
    setHeight: () => null,
});

function SlideBoxHeightProvider({ children }: { children: React.ReactNode }) {
    const [height, setHeight] = useState(-1);

    const value = useMemo(
        () => ({
            height,
            setHeight,
        }),
        [height]
    );

    return <SlideBoxHeightContext.Provider value={value}>{children}</SlideBoxHeightContext.Provider>;
}

export default SlideBoxHeightProvider;
