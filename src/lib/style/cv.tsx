import { builtCssVariable, cssPalette } from './cssVariable';
import { themes, themedPalette } from './themeVariables';

const theme = (() => {
    if (typeof window === 'undefined') return 'light';
    const bodyTheme = document.querySelector('body')?.getAttribute('data-theme');
    if (!bodyTheme) {
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light';
    }
    return bodyTheme;
})();

const cv = {
    ...themedPalette,
    ...cssPalette,
    theme,
};

const cssVar = (name: string) => `var(--${name.replace(/_/g, '-')})`;

export { cv, themes, builtCssVariable, cssVar };
