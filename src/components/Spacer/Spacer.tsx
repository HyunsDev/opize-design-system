import { styled } from 'styled-components';

export type SpacerProps = {
    width?: string;
    height?: string;
    backgroundColor?: string;
    color?: string;
};

export const Spacer = styled.div<SpacerProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;

    width: ${({ width }) => width};
    height: ${({ height }) => height};
    background-color: ${({ backgroundColor }) => backgroundColor};
    color: ${({ color }) => color};
`;
