interface CssVariable {
    vh: string
}

type VariableKey = keyof CssVariable
type CssPalette = Record<VariableKey, string>;

const cssVariable: CssVariable = {
    vh: '1vh',
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