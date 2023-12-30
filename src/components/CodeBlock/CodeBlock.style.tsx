import { styled } from 'styled-components';
import { cv } from '../..';

export interface StyledCodeBlockContainerProps {
    $showHeader: boolean;
    $width: string;
}
export const StyledCodeBlockContainer = styled.div<StyledCodeBlockContainerProps>`
    position: relative;
    width: ${(props) => props.$width};
    height: fit-content;
    overflow: hidden;
    border: 1px solid ${cv.border};
    border-radius: 8px;
    & > pre {
        margin: 0 !important;
        font-size: 14px !important;

        ${(props) =>
            props.$showHeader
                ? `
                    border-bottom-left-radius: 8px;
                    border-bottom-right-radius: 8px;
                `
                : 'border-radius: 8px;'}
    }

    pre,
    code {
        background-color: ${cv.background} !important;
    }
`;

export const StyledCodeBlockHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 8px 0px 16px;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    border-bottom: none;
    background-color: ${cv.background};
    border-bottom: 1px solid ${cv.border};
    height: 44px;
`;

export const StyledCodeBlockTitle = styled.div`
    font-size: 14px;
    color: ${cv.foreground};
`;

export const StyledCodeBlockActions = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const CodeBlockAction = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    width: 32px;
    height: 32px;
    background-color: ${cv.background};
    border: none;
    color: ${cv.foreground};
    cursor: pointer;
    transition: 150ms;

    &:hover {
        background-color: ${cv.gray100};
    }

    &:active {
        background-color: ${cv.gray200};
    }
`;
CodeBlockAction.displayName = 'CodeBlock.Action';
