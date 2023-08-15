import { isBrowser } from '../../utils/dom';
import { Theme } from './color.type';

export const theme: Theme = (() => {
    if (!isBrowser) return 'light';

    const bodyTheme = document.querySelector('body')?.getAttribute('data-theme');
    if (!bodyTheme) {
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light';
    }
    return bodyTheme as Theme;
})();
