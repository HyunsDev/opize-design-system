import { buildCssVariables, cssVar } from '../utils';
import { Color, ColorPaletteSet } from './color.type';
import { darkColorPalette } from './darkColorPalette';
import { lightColorPalette } from './lightColorPalette';

export const colorPalettes: ColorPaletteSet = {
    light: lightColorPalette,
    dark: darkColorPalette,
};

export const colorCSSVariables = {
    light: buildCssVariables(colorPalettes.light),
    dark: buildCssVariables(colorPalettes.dark),
};

const colorNames = Object.keys(colorPalettes.light) as Color[];
export const colorVars = colorNames.reduce((acc, colorName) => {
    acc[colorName] = cssVar(colorName);
    return acc;
}, {} as Record<Color, string>);
