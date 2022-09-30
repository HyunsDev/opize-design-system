import React, { useMemo, createContext, useState } from 'react';

type ColorTheme = 'light' | 'dark' | 'system';
type NowColorTheme = 'light' | 'dark';

export interface ColorThemeContextProps {
    /**
     * 유저가 선택한 색상 테마입니다.
     */
    colorTheme: ColorTheme;
    /**
     * 실제 화면에 표시되는 색상 테마 입니다.
     */
    nowColorTheme: NowColorTheme;
    setColorTheme: (theme: ColorTheme) => void;
}

export const ColorThemeContext = createContext<ColorThemeContextProps>({
    colorTheme: 'system',
    nowColorTheme: 'light',
    setColorTheme: () => null,
});

const getUserPreferColor = () =>
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const initColorTheme: {
    mode: ColorTheme;
    theme: NowColorTheme;
} = (() => {
    const savedTheme = typeof window === 'undefined' ? 'light' : localStorage.getItem('theme');
    if (savedTheme === 'dark')
        return {
            mode: 'dark',
            theme: 'dark',
        };
    if (savedTheme === 'light')
        return {
            mode: 'light',
            theme: 'light',
        };

    const isUserDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return {
        mode: 'system',
        theme: isUserDark ? 'dark' : 'light',
    };
})();

function ColorThemeProvider({ children }: { children: React.ReactNode }) {
    const [colorTheme, setColorTheme] = useState<ColorTheme>(initColorTheme.mode);
    const [nowColorTheme, setNowColorTheme] = useState<NowColorTheme>(initColorTheme.theme);

    const changeColorTheme = (theme: ColorTheme) => {
        if (theme === 'system') {
            setColorTheme('system');
            setNowColorTheme(getUserPreferColor());
            document.querySelector('body')?.removeAttribute('data-theme');
            if (typeof window !== 'undefined') localStorage.removeItem('theme');
        } else if (theme === 'dark') {
            setColorTheme('dark');
            setNowColorTheme('dark');
            document.querySelector('body')?.setAttribute('data-theme', 'dark');
            if (typeof window !== 'undefined') localStorage.setItem('theme', 'dark');
        } else if (theme === 'light') {
            setColorTheme('light');
            setNowColorTheme('light');
            document.querySelector('body')?.setAttribute('data-theme', 'light');
            if (typeof window !== 'undefined') localStorage.setItem('theme', 'light');
        }
    };

    const value = useMemo(
        () => ({
            setColorTheme: changeColorTheme,
            colorTheme,
            nowColorTheme,
        }),
        [colorTheme, nowColorTheme]
    );

    return <ColorThemeContext.Provider value={value}>{children}</ColorThemeContext.Provider>;
}

export default ColorThemeProvider;
