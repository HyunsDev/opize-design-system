import { useEffect } from 'react';
import { useDarkMode } from 'storybook-dark-mode';

export function ThemeSwitcher() {
    const isDarkMode = useDarkMode();

    useEffect(() => {
        document.querySelector('body')!.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    }, [isDarkMode]);

    return '';
}
