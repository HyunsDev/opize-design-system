import { styled } from 'styled-components';
import { cv } from '../..';

export const HeaderNavContainer = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 64px;
    width: 100%;
    max-width: 1248px;
    padding: 0 24px;
    margin: 0 auto;

    @media (max-width: 480px) {
        padding: 0 8px;
    }
`;
HeaderNavContainer.displayName = 'Header.Nav';

export const HeaderNavLeft = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex: 1;
    gap: 8px;
`;
HeaderNavLeft.displayName = 'Header.Nav.Left';

export const HeaderNavRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 8px;
    flex: 1;
`;
HeaderNavRight.displayName = 'Header.Nav.Right';

export const HeaderNavA = styled.a`
    text-decoration: none;
    color: ${cv.default400};
    cursor: pointer;
    font-size: 14px;
    transition: 150ms;
    &:hover {
        color: ${cv.default600};
    }
`;
HeaderNavA.displayName = 'Header.Nav.A';

export const HeaderNav = Object.assign(HeaderNavContainer, {
    Left: HeaderNavLeft,
    Right: HeaderNavRight,
    A: HeaderNavA,
});
