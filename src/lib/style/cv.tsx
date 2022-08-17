import { builtCssVariable, cssPalette } from './cssVariable';
import { themes, themedPalette } from './themeVariables';

const cv = {
    ...themedPalette,
    ...cssPalette,
};

const cssVar = (name: string) => `var(--${name.replace(/_/g, '-')})`;

export { cv, themes, builtCssVariable, cssVar };
