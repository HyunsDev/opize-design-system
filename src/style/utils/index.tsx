export const buildCssVariables = (variables: Record<string, string>) => {
    const keys = Object.keys(variables);
    return keys.reduce(
        (acc, key) => acc.concat(`--${key.replace(/_/g, '-')}: ${variables[key]};`, '\n'),
        ''
    );
};

export const cssVar = (name: string) => `var(--${name.replace(/_/g, '-')})`;
