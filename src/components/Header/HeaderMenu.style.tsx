import { styled } from 'styled-components';
import { cv } from '../..';

export interface StyledHeaderMenuProps {
    $isScrolling: boolean;
}
export const StyledHeaderMenuContainer = styled.div<StyledHeaderMenuProps>`
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    border-bottom: 1px solid ${cv.default200};
    user-select: none;
    transition: box-shadow 200ms;
    z-index: 10;
    margin-top: -8px;
    background-color: ${cv.background};

    ${(props: StyledHeaderMenuProps) =>
        props.$isScrolling &&
        `
            position: fixed;
            top: 0;
            left: 0;
            margin-top: 0;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        `};
`;

export const StyledHeaderMenu = styled.nav`
    display: flex;
    width: 1224px;
    margin: 0 20px;
    padding-top: 4px;
    margin-bottom: -1px;
    background-color: ${cv.background};

    @media (max-width: 480px) {
        padding: 0 8px;
    }
`;
