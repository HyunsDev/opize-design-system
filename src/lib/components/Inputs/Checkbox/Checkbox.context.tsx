import { createContext } from '../../../utils/context';
import { UseCheckboxReturn } from './useCheckbox';

export const [CheckboxContextProvider, useCheckboxContext] = createContext<UseCheckboxReturn>({
    strict: false,
});
