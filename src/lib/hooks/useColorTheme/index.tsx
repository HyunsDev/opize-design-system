import { useContext } from 'react';
import { ColorThemeContext } from './colorThemeContext';

export function useColorTheme() {
    return useContext(ColorThemeContext);
}
