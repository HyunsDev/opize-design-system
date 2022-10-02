import { useEffect } from 'react';
import { useDarkMode } from 'storybook-dark-mode';
import { useColorTheme } from '../../src/lib';

export function ThemeSwitcher() {
    const isDarkMode = useDarkMode();
    const { setColorTheme } = useColorTheme();

    useEffect(() => {
        setColorTheme(isDarkMode ? 'dark' : 'light');
    }, [isDarkMode]);

    return '';
}
