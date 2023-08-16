import { Theme } from './color.type';

export const theme: Theme = (() => {
    const bodyTheme =
        typeof window !== 'undefined' && window.document
            ? document.querySelector('body')?.getAttribute('data-theme')
            : 'light';
    if (!bodyTheme) {
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light';
    }
    return bodyTheme as Theme;
})();
