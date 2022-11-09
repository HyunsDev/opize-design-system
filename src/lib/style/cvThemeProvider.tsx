import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useColorTheme } from '../hooks';

export function CvThemeProvider({ children }: { children: React.ReactNode }) {
    const { nowColorTheme } = useColorTheme();

    const theme = {
        theme: nowColorTheme,
    };

    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
