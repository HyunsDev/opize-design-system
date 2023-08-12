import { createContext } from '../../utils/context';
import { UseTableReturn } from './useTable';

export const [TableProvider, useTableContext] = createContext<UseTableReturn>({
    name: 'TableContext',
    errorMessage: 'TableContext is not provided',
});
