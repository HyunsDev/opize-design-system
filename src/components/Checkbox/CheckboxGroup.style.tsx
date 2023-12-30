import { styled } from 'styled-components';
import { typos } from '../..';

export type StyledCheckboxGroupProps = {
    $width: string;
    $gap: string;
};

export const StyledCheckboxGroup = styled.div<StyledCheckboxGroupProps>`
    display: flex;
    flex-direction: column;
    width: ${(props) => props.$width};
    gap: ${(props) => props.$gap};
`;

export const StyledCheckboxGroupLabel = styled.div`
    ${typos.label}
`;
