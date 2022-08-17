import React, { useContext } from 'react';
import { TopLoadingContext } from './context';

export function useTopLoading() {
    return useContext(TopLoadingContext);
}
