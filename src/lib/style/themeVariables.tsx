interface ThemeVariables {
    white: string
    black: string
    bg_page1: string
    bg_page2: string

    bg_element1: string
    bg_element2: string
    bg_element3: string
    bg_element4: string
    bg_element5: string
    bg_element6: string
    bg_element7: string
    bg_element8: string

    border1: string
    border2: string
    border3: string
    border4: string
    outline: string

    text1: string
    text2: string
    text3: string
    text4: string
    text5: string

    red1: string
    bg_red1: string
    bg_red1_hover: string

    yellow1: string
    bg_yellow1: string
    bg_yellow1_hover: string

    green1: string
    bg_green1: string
    bg_green1_hover: string

    blue1: string
    bg_blue1: string
    bg_blue1_hover: string
}

type Theme = 'light'
type VariableKey = keyof ThemeVariables
type ThemedPalette = Record<VariableKey, string>;

// TODO: #3 black 테마 추가시 box-shadow에 대한 수정 필요
const themeVariableSets: Record<Theme, ThemeVariables> = {
    light: {
        white: '#fff',
        black: '#000',

        bg_page1: '#F8F9FA',
        bg_page2: '#FFFFFF',

        bg_element1: '#FFFFFF',
        bg_element2: '#F8F9FA',
        bg_element3: '#E9ECEF',
        bg_element4: '#DEE2E6',

        bg_element5: '#212529',
        bg_element6: '#343A40',
        bg_element7: '#FFFFFF',
        bg_element8: '#f1f5fa',

        border1: '#343A40',
        border2: '#ADB5BD',
        border3: '#c9d1da', // gray4
        border4: '#F1F3F5',
        outline: '#acd7ff', //blue3

        text1: '#212529',
        text2: '#495057',
        text3: '#868E96', // gray5
        text4: '#CED4DA', 
        text5: '#FFFFFF', 

        red1: 'rgba(216, 80, 74, 1)',
        bg_red1: 'rgba(216, 80, 74, 0.1)',
        bg_red1_hover: 'rgba(216, 80, 74, 0.15)',

        yellow1: 'rgba(250, 175, 0, 1)',
        bg_yellow1: 'rgba(250, 175, 0, 0.1)',
        bg_yellow1_hover: 'rgba(250, 175, 0, 0.15)',

        green1: 'rgba(57, 183, 93, 1)',
        bg_green1: 'rgba(57, 183, 93, 0.1)',
        bg_green1_hover: 'rgba(57, 183, 93, 0.15)',

        blue1: 'rgba(32, 151, 246, 1)',
        bg_blue1: 'rgba(32, 151, 246, 0.1)',
        bg_blue1_hover: 'rgba(32, 151, 246, 0.15)',
    }
};

const buildCssVariables = (variables: ThemeVariables) => {
    const keys = Object.keys(variables) as (keyof ThemeVariables)[];
    return keys.reduce(
        (acc, key) =>
            acc.concat(`--${key.replace(/_/g, '-')}: ${variables[key]};`, '\n'),
        '',
    );
};

export const themes = {
    light: buildCssVariables(themeVariableSets.light),
};

const cssVar = (name: string) => `var(--${name.replace(/_/g, '-')})`;

const variableKeys = Object.keys(themeVariableSets.light) as VariableKey[];

export const themedPalette: Record<VariableKey, string> = variableKeys.reduce(
    (acc, current) => {
        acc[current] = cssVar(current);
        return acc;
    },
    {} as ThemedPalette,
);