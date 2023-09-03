import { buildCssVariables, cssVar } from '../utils';

export const StyleConstants = {
    // Border Radius
    formBorderRadiusSmall: '4px',
    formBorderRadiusRegular: '5px',
    formBorderRadiusMedium: '5px',
    formBorderRadiusLarge: '6px',

    // Height
    formHeightSmall: '32px',
    formHeightRegular: '36px',
    formHeightMedium: '40px',
    formHeightLarge: '48px',

    // Font Size
    formFontSizeSmall: '14px',
    formFontSizeRegular: '14px',
    formFontSizeMedium: '14px',
    formFontSizeLarge: '16px',
};

export const styleConstantVariable = buildCssVariables(StyleConstants);

const StyleConstantNames = Object.keys(StyleConstants) as (keyof typeof StyleConstants)[];
export const styleConstantVars = StyleConstantNames.reduce((acc, name) => {
    acc[name] = cssVar(name);
    return acc;
}, {} as Record<keyof typeof StyleConstants, string>);
