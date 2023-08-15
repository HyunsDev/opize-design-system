import { useContext } from 'react';
import { TopLoadingContext } from './TopLoading.context';

export function useTopLoading() {
    return useContext(TopLoadingContext);
}
