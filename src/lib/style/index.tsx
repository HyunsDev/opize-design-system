import { builtCssVariable, cssPalette } from './cssVariable'
import { themes, themedPalette } from './themeVariables'

const css = {
    ...themedPalette,
    ...cssPalette
}

const cssVar = (name: string) => `var(--${name.replace(/_/g, '-')})`;

export {
    css, themes, builtCssVariable, cssVar
}

