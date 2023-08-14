import { styled } from 'styled-components';
import { cv } from '../../..';

export type StyledRadioGroupProps = {
    $width: string;
    $gap: string;
};

export const StyledRadioGroup = styled.div<StyledRadioGroupProps>`
    display: flex;
    flex-direction: column;
    width: ${(props) => props.$width};
    gap: ${(props) => props.$gap};
`;

export const StyledRadioGroupLabel = styled.div`
    color: ${cv.default600};
    font-size: 12px;
`;
