import styled from 'styled-components';

import { cv } from '../../style';

export interface CodeProps extends React.ComponentProps<'code'> {
    color?: 'default' | 'blue' | 'green' | 'yellow' | 'red' | 'violet';
}

const getColorStyle = (color: CodeProps['color']) => {
    switch (color) {
        case 'blue':
            return `
                background-color: ${cv.blue_background};
                color: ${cv.blue};
            `;
        case 'green':
            return `
                background-color: ${cv.green_background};
                color: ${cv.green};
            `;
        case 'yellow':
            return `
                background-color: ${cv.yellow_background};
                color: ${cv.yellow};
            `;
        case 'red':
            return `
                background-color: ${cv.red_background};
                color: ${cv.red};
            `;
        case 'violet':
            return `
                background-color: ${cv.violet_background};
                color: ${cv.violet};
            `;
        default:
            return `
                background-color: ${cv.default200};
                color: ${cv.foreground};
            `;
    }
};

export const Code: (props: CodeProps) => React.ReactNode = styled.code<CodeProps>`
    padding: 2px 6px;
    border-radius: 6px;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New,
        monospace;
    font-weight: 400;
    font-size: smaller;
    ${(props) => getColorStyle(props.color)};
`;
