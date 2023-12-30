export type ColorTheme = 'light';

export const colorTheme: ColorTheme = (() => {
    const bodyTheme =
        typeof window !== 'undefined' && window.document
            ? document.querySelector('body')?.getAttribute('data-theme')
            : 'light';
    if (!bodyTheme) {
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'light' // TODO: 추후 다크모드 지원 시 'dark'로 변경
            : 'light';
    }
    return bodyTheme as ColorTheme;
})();
