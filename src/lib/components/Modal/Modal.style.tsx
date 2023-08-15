import { styled } from 'styled-components';

export type StyledModalContainer = {
    $width?: string;
};
export const StyledModalContainer = styled.div<StyledModalContainer>`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: ${(props) => props.$width};
`;

export const StyledModalHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
    font-weight: bold;
`;

export const StyledModalContent = styled.div``;

export const StyledModalFooter = styled.footer`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 8px;
`;
