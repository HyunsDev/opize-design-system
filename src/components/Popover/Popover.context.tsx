import { createContext } from '../../utils/context';
import { UsePopoverReturn } from './usePopover';

export const [PopoverProvider, usePopoverContext] = createContext<UsePopoverReturn>({
    name: 'PopoverContext',
    errorMessage:
        'usePopoverContext: `context` is undefined. Seems you forgot to wrap component within the Provider',
});
