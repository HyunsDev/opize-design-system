import React, { useContext } from 'react';
import { HeaderNoticeContext } from './context';

export function useHeaderNotice() {
    return useContext(HeaderNoticeContext);
}
