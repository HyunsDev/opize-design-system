import { styled } from 'styled-components';
import { cv } from '../..';

export type SimpleHeaderContainerProps = {
    $isScrolling: boolean;
};
export const StyledSimpleHeaderContainer = styled.div<SimpleHeaderContainerProps>`
    display: flex;
    width: 100%;
    user-select: none;
    background-color: ${cv.background};
    transition: border-bottom 200ms;
    z-index: 10;
    top: 0;
    left: 0;
    position: fixed;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: solid 1px ${cv.background};

    ${(props) =>
        props.$isScrolling &&
        `
            border-bottom: 1px solid ${cv.default200};
        `};
`;

export const StyledSimpleHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 52px;
    width: 100%;
    max-width: 1248px;
    padding: 0 24px;
    margin: 0 auto;

    @media (max-width: 480px) {
        padding: 0 8px;
    }
`;

export const SimpleHeaderLeft = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex: 1;
    gap: 8px;
`;
SimpleHeaderLeft.displayName = 'SimpleHeader.Left';

export const SimpleHeaderRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 8px;
    flex: 1;
`;
SimpleHeaderRight.displayName = 'SimpleHeader.Right';

export const SimpleHeaderA = styled.a`
    text-decoration: none;
    color: ${cv.default400};
    cursor: pointer;
    font-size: 14px;
    transition: 150ms;
    &:hover {
        color: ${cv.default600};
    }
`;
SimpleHeaderA.displayName = 'SimpleHeader.A';
