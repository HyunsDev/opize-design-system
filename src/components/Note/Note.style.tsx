import { styled } from 'styled-components';
import { NoteProps } from './Note';
import { cv, getStatusColorName, typos } from '../..';

export interface StyledNoteProps {
    $variant: NoteProps['variant'];
    $fill: NoteProps['fill'];
}

const variantMap = {
    info: 'gray',
    success: 'blue',
    warning: 'yellow',
    error: 'red',
    good: 'green',
} as const;

const getVariantStyle = (props: StyledNoteProps) => {
    if (props.$fill) {
        return `
            background-color: ${cv[getStatusColorName(variantMap[props.$variant || 'info'], 'Bg')]};
            border-color: ${cv[getStatusColorName(variantMap[props.$variant || 'info'], 'Bg')]};
            color: ${cv[getStatusColorName(variantMap[props.$variant || 'info'])]};
        `;
    }
    return `
        background-color: ${cv.background};
        border-color: ${cv[getStatusColorName(variantMap[props.$variant || 'info'], 'Bg')]};
        color: ${cv[getStatusColorName(variantMap[props.$variant || 'info'])]};
    `;
};

export const StyledNote = styled.div<StyledNoteProps>`
    display: flex;
    justify-content: space-between;
    border: solid 1px ${cv.border};
    border-radius: ${cv.var.inputRgRound};
    padding: 8px 12px;
    gap: 12px;
    ${typos.p}

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
    line-height: 18px;
`;

export const NoteAction = styled.div``;
