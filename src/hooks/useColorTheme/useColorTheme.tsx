import { useContext } from 'react';
import { ColorThemeContext } from './ColorTheme.context';

export function useColorTheme() {
    return useContext(ColorThemeContext);
}
