import React, { createContext, useMemo, useState } from 'react';

type LastUnderlineStyle = {
    width: number;
    left: number;
};

type LastHoverBoxStyle = {
    width: number;
    left: number;
    show: boolean;
};

export interface TabNavValueContextProps {
    lastUnderlineStyle: LastUnderlineStyle;
    lastHoverBoxStyle: LastHoverBoxStyle;
}

export const TabNavValueContext = createContext<TabNavValueContextProps>({
    lastUnderlineStyle: {
        width: 0,
        left: 0,
    },
    lastHoverBoxStyle: {
        width: 0,
        left: 0,
        show: false,
    },
});

export interface TabNavActionContextProps {
    setLastUnderlineStyle: (style: LastUnderlineStyle) => void;
    setLastHoverBoxStyle: (style: LastHoverBoxStyle) => void;
}

export const TabNavActionContext = createContext<TabNavActionContextProps>({
    setLastHoverBoxStyle: () => null,
    setLastUnderlineStyle: () => null,
});

function TabNavContextProvider({ children }: { children: React.ReactNode }) {
    const [lastUnderlineStyle, setLastUnderlineStyle] = useState({ width: 0, left: 0 });
    const [lastHoverBoxStyle, setLastHoverBoxStyle] = useState({ width: 0, left: 0, show: false });

    const action = useMemo(
        () => ({
            setLastUnderlineStyle,
            setLastHoverBoxStyle,
        }),
        [setLastUnderlineStyle, setLastHoverBoxStyle]
    );

    const value = useMemo(
        () => ({
            lastUnderlineStyle,
            lastHoverBoxStyle,
        }),
        [lastHoverBoxStyle, lastUnderlineStyle]
    );

    return (
        <TabNavActionContext.Provider value={action}>
            <TabNavValueContext.Provider value={value}>{children}</TabNavValueContext.Provider>
        </TabNavActionContext.Provider>
    );
}

export default TabNavContextProvider;
