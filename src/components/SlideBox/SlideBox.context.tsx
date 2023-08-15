import { createContext } from '../../utils/context';
import { UseSlideBoxReturn } from './useSlideBox';

export const [SlideBoxContextProvider, useSlideBoxContext] = createContext<UseSlideBoxReturn>({
    strict: true,
    name: 'SlideBoxContext',
    errorMessage:
        'useSlideBoxContext: `context` is undefined. Seems you forgot to wrap component within the corresponding Provider',
});
