interface ThemeVariables {
    white: string;
    black: string;
    bg_page1: string;
    bg_page2: string;

    bg_element1: string;
    bg_element1_1: string;
    bg_element2: string;
    bg_element3: string;
    bg_element4: string;
    bg_element5: string;
    bg_element6: string;

    border1: string;
    border2: string;
    border3: string;
    border4: string;
    outline: string;

    text1: string;
    text2: string;
    text3: string;
    text4: string;
    text5: string;

    red1: string;
    bg_red1: string;
    bg_red1_hover: string;

    yellow1: string;
    bg_yellow1: string;
    bg_yellow1_hover: string;

    green1: string;
    bg_green1: string;
    bg_green1_hover: string;

    blue1: string;
    bg_blue1: string;
    bg_blue1_hover: string;
}

type Theme = 'light' | 'dark';
type VariableKey = keyof ThemeVariables;
type ThemedPalette = Record<VariableKey, string>;

// TODO: #3 black 테마 추가시 box-shadow에 대한 수정 필요
export const themeVariableSets: Record<Theme, ThemeVariables> = {
    light: {
        white: '#fff',
        black: '#000',

        bg_page1: '#F8F9FA',
        bg_page2: '#FFFFFF',

        bg_element1: '#FFFFFF',
        bg_element1_1: '#fcfcfc',
        bg_element2: '#f7f7fa',
        bg_element3: '#eff2f4',
        bg_element4: '#e5e8eb',

        bg_element5: '#212529',
        bg_element6: '#343A40',

        border1: '#343A40',
        border2: '#ADB5BD',
        border3: '#d2d9e0',
        border4: '#e5e9ec',
        outline: 'rgba(43, 153, 255, 0.4)',

        text1: '#212529',
        text2: '#495057',
        text3: '#9199a1',
        text4: '#CED4DA',
        text5: '#FFFFFF',

        red1: '#ea473e',
        bg_red1: 'rgba(216, 80, 74, 0.2)',
        bg_red1_hover: 'rgba(216, 80, 74, 0.3)',

        yellow1: 'rgba(250, 175, 0, 1)',
        bg_yellow1: 'rgba(250, 175, 0, 0.2)',
        bg_yellow1_hover: 'rgba(250, 175, 0, 0.3)',

        green1: 'rgba(57, 183, 93, 1)',
        bg_green1: 'rgba(57, 183, 93, 0.2)',
        bg_green1_hover: 'rgba(57, 183, 93, 0.3)',

        blue1: '#1999ee',
        bg_blue1: 'rgba(32, 151, 246, 0.2)',
        bg_blue1_hover: 'rgba(32, 151, 246, 0.3)',
    },
    dark: {
        white: '#fff',
        black: '#000',

        bg_page1: '#252629',
        bg_page2: '#1a1b1d',

        bg_element1: '#1a1b1d',
        bg_element1_1: '#252629',
        bg_element2: '#313238',
        bg_element3: '#404147',
        bg_element4: '#5a5c64',

        bg_element5: '#ecf0f3',
        bg_element6: '#e2e6eb',

        border1: '#ecf0f3',
        border2: '#8d959b',
        border3: '#3a3c42',
        border4: '#26282b',
        outline: 'rgba(43, 153, 255, 0.4)',

        text1: '#f2f5f8',
        text2: '#95a0aa',
        text3: '#6a7179',
        text4: '#464b50',
        text5: '#000000',

        red1: 'rgba(216, 80, 74, 1)',
        bg_red1: 'rgba(216, 80, 74, 0.2)',
        bg_red1_hover: 'rgba(216, 80, 74, 0.3)',

        yellow1: 'rgba(250, 175, 0, 1)',
        bg_yellow1: 'rgba(250, 175, 0, 0.2)',
        bg_yellow1_hover: 'rgba(250, 175, 0, 0.3)',

        green1: 'rgba(57, 183, 93, 1)',
        bg_green1: 'rgba(57, 183, 93, 0.2)',
        bg_green1_hover: 'rgba(57, 183, 93, 0.3)',

        blue1: 'rgba(32, 151, 246, 1)',
        bg_blue1: 'rgba(32, 151, 246, 0.2)',
        bg_blue1_hover: 'rgba(32, 151, 246, 0.3)',
    },
};

const buildCssVariables = (variables: ThemeVariables) => {
    const keys = Object.keys(variables) as (keyof ThemeVariables)[];
    return keys.reduce(
        (acc, key) => acc.concat(`--${key.replace(/_/g, '-')}: ${variables[key]};`, '\n'),
        ''
    );
};

export const themes = {
    light: buildCssVariables(themeVariableSets.light),
    dark: buildCssVariables(themeVariableSets.dark),
};

const cssVar = (name: string) => `var(--${name.replace(/_/g, '-')})`;

const variableKeys = Object.keys(themeVariableSets.light) as VariableKey[];

export const themedPalette: Record<VariableKey, string> = variableKeys.reduce((acc, current) => {
    acc[current] = cssVar(current);
    return acc;
}, {} as ThemedPalette);
