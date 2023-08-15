import { createContext } from '../../utils/context';
import { UseRadioReturn } from './useRadio';

export const [RadioContextProvider, useRadioContext] = createContext<UseRadioReturn>({
    strict: false,
});
