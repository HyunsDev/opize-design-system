import React from 'react';

export interface CreateContextOptions {
    strict?: boolean;
    errorMessage?: string;
    name?: string;
}

export type CreateContextReturn<T> = [React.Provider<T>, () => T, React.Context<T>];

export function createContext<ContextType>(
    options: CreateContextOptions = {}
): CreateContextReturn<ContextType> {
    const {
        strict = true,
        errorMessage = 'useContext: `context` is undefined. Seems you forgot to wrap component within the Provider',
        name,
    } = options;

    const Context = React.createContext<ContextType | undefined>(undefined);

    Context.displayName = name;

    function useContext() {
        const context = React.useContext(Context);

        if (!context && strict) {
            const error = new Error(errorMessage);

            error.name = 'ContextError';
            Error.captureStackTrace?.(error, useContext);
            throw error;
        }

        return context;
    }

    return [Context.Provider, useContext, Context] as CreateContextReturn<ContextType>;
}
