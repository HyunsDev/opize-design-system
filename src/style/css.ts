const cssVar = (name: string) => `var(--${name})`;

const themedPalette = {
    text: cssVar('text'),
    background: cssVar('background'),
};

export {
    cssVar,
    themedPalette
}