import React, { createContext, useMemo, useState } from 'react';

export interface LinkContextProps {
    Link?: React.ComponentType<any>;
    setLink: (Link: React.ComponentType<any>) => void;
}

export const LinkContext = createContext<LinkContextProps>({
    Link: undefined,
    setLink: () => null,
});

function LinkContextProvider({ children }: { children: React.ReactNode }) {
    const [Link, setLink] = useState<React.ComponentType<any>>();

    const value = useMemo(
        () => ({
            Link,
            setLink,
        }),
        [Link]
    );

    return <LinkContext.Provider value={value}>{children}</LinkContext.Provider>;
}

export default LinkContextProvider;
