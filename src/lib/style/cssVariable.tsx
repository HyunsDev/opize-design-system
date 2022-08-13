interface CssVariable {
    vh: string

    fontFamily: string
    fontFamilyMonospace: string;

    fontWeightRegular: number;
    fontWeightSemiBold: number;

    fontSizeNormal: string;
    fontSize200: string;
    fontSize300: string;
    fontSize400: string;
    fontSize500: string;
    fontSize600: string;

    lineHeightNormal: string;
    lineHeight200: string;
    lineHeight300: string;
    lineHeight400: string;
}

type VariableKey = keyof CssVariable
type CssPalette = Record<VariableKey, string>;

const cssVariable: CssVariable = {
    vh: '1vh',
    fontFamily: `"Inter", 'Noto Sans KR', -apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif`,
    fontFamilyMonospace: `Consolas, 'Courier New', Courier, monospaceFont family fontFamilyMonospace`,

    fontWeightRegular: 400,
    fontWeightSemiBold: 600,

    fontSizeNormal: 'var(--fontSize400)',
    fontSize200: '10px',
    fontSize300: '12px',
    fontSize400: '14px',
    fontSize500: '16px',
    fontSize600: '20px',

    lineHeightNormal: 'var(--lineHeight400)',
    lineHeight200: '16px',
    lineHeight300: '20px',
    lineHeight400: '24px',
};

const buildCssVariable = (variables: CssVariable) => {
    const keys = Object.keys(variables) as (keyof CssVariable)[];
    return keys.reduce(
        (acc, key) =>
            acc.concat(`--${key.replace(/_/g, '-')}: ${variables[key]};`, '\n'),
        '',
    );
};

export const builtCssVariable = buildCssVariable(cssVariable)

const cssVar = (name: string) => `var(--${name.replace(/_/g, '-')})`;

const variableKeys = Object.keys(cssVariable) as VariableKey[];

export const cssPalette: Record<VariableKey, string> = variableKeys.reduce(
    (acc, current) => {
        acc[current] = cssVar(current);
        return acc;
    }, {} as CssPalette,
);