import { lightColorPalette } from './colors/light';
import { cssVar } from './utils';
import { styleVariables } from './variable';

const colorNames = Object.keys(lightColorPalette) as (keyof typeof lightColorPalette)[];
export const colorVars = colorNames.reduce((acc, colorName) => {
    acc[colorName] = cssVar(colorName);
    return acc;
}, {} as Record<keyof typeof lightColorPalette, string>);

const variableNames = Object.keys(styleVariables) as (keyof typeof styleVariables)[];
export const varVars = variableNames.reduce((acc, variableName) => {
    acc[variableName] = cssVar(variableName);
    return acc;
}, {} as Record<keyof typeof styleVariables, string>);

export const cv = {
    ...colorVars,
    var: varVars,
};
