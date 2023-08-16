import { styled } from 'styled-components';
import { cv } from '../..';

export const StyledTabNav = styled.div`
    border-bottom: solid 1px ${cv.default200};
    align-items: center;
    display: flex;
    position: relative;
    gap: 0px;
    width: 100%;
`;

interface FlowProps {
    $left: number;
    $width: number;
}

export const Underline = styled.div<FlowProps>`
    position: absolute;
    transition: 100ms, left 200ms cubic-bezier(0, 0.61, 0.4, 1.15);
    bottom: -1px;
    left: ${(props) => props.$left + 8 || 4}px;
    width: ${(props) => props.$width - 16}px;
    height: 1px;
    border-bottom: solid 2px ${cv.foreground};
`;

export const HoverBox = styled.div<FlowProps & { $show: boolean }>`
    position: absolute;
    transition: 200ms, transform 150ms ease;
    height: 32px;
    user-select: none;
    border-radius: 4px;
    transform: translateX(${(props) => props.$left}px);
    width: ${(props) => props.$width}px;
    margin-bottom: 4px;
    background-color: rgba(0, 0, 0, 0);
    ${(props) => props.$show && `background-color: ${cv.default100}`};
`;

export const ItemDiv = styled.div`
    padding-bottom: 6px;
    z-index: 1;
`;

export const Item = styled.div<{ $selected: boolean; $disabled: boolean }>`
    padding: 6px 12px;
    cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'pointer')};
    border-radius: 4px;
    user-select: none;
    transition: 200ms;
    font-weight: 400;
    font-size: 0.875rem;
    color: ${(props) =>
        props.$selected ? cv.foreground : props.$disabled ? cv.default400 : cv.default700};
    &:hover {
        color: ${(props) => !props.$disabled && cv.foreground};
    }
`;
