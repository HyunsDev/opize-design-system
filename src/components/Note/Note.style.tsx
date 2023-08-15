import { styled } from 'styled-components';
import { NoteProps } from './Note';
import { cv } from '../..';

export interface StyledNoteProps {
    $variant: NoteProps['variant'];
    $fill: NoteProps['fill'];
}

const getVariantStyle = (props: StyledNoteProps) => {
    if (props.$fill) {
        switch (props.$variant) {
            case 'success':
                return `
                    background-color: ${cv.blue_background};
                    border-color: ${cv.blue_background};
                    color: ${cv.blue};
                `;
            case 'warning':
                return `
                    background-color: ${cv.yellow_background};
                    border-color: ${cv.yellow_background};
                    color: ${cv.yellow};
                `;
            case 'error':
                return `
                    background-color: ${cv.red_background};
                    border-color: ${cv.red_background};
                    color: ${cv.red};
                `;
            case 'good':
                return `
                    background-color: ${cv.green_background};
                    border-color: ${cv.green_background};
                    color: ${cv.green};
                `;
            default:
                return `
                    background-color: ${cv.default100};
                    border-color: ${cv.default100};
                    color: ${cv.default700};
                `;
        }
    }

    switch (props.$variant) {
        case 'success':
            return `
                background-color: ${cv.background};
                border-color: ${cv.blue_background};
                color: ${cv.blue};
            `;
        case 'warning':
            return `
                background-color: ${cv.background};
                border-color: ${cv.yellow_background};
                color: ${cv.yellow};
            `;
        case 'error':
            return `
                background-color: ${cv.background};
                border-color: ${cv.red_background};
                color: ${cv.red};
            `;
        case 'info':
            return `
                background-color: ${cv.background};
                border-color: ${cv.green_background};
                color: ${cv.green};
            `;
        default:
            return `
                background-color: ${cv.background};
                border-color: ${cv.default200};
                color: ${cv.foreground};
            `;
    }
};

export const StyledNote = styled.div<StyledNoteProps>`
    display: flex;
    justify-content: space-between;
    border: solid 1px;
    border-radius: 8px;
    padding: 12px 12px;
    gap: 12px;

    ${(props) => getVariantStyle(props)};
`;

export const StyledNoteLeft = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const NoteLabel = styled.div`
    display: flex;
    align-items: flex-start;
    height: 100%;
`;

export const NoteContent = styled.div`
    display: flex;
    font-size: 14px;
    line-height: 20px;
`;

export const NoteAction = styled.div``;
