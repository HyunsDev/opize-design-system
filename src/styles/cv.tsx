import { lightSemanticColorPalette } from './colors/light';
import { SemanticColor } from './colors/semanticColorType';
import { cssVar } from './utils';

const colorNames = Object.keys(lightSemanticColorPalette) as SemanticColor[];
export const colorVars = colorNames.reduce((acc, colorName) => {
    acc[colorName] = cssVar(colorName);
    return acc;
}, {} as Record<SemanticColor, string>);

export const cv = {
    ...colorVars,
};
