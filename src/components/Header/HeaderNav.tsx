import { styled } from 'styled-components';
import { cv } from '../..';

const StyledHeaderNav = styled.nav`
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
StyledHeaderNav.displayName = 'Header.Nav';

const HeaderNavLeft = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex: 1;
    gap: 8px;
`;
HeaderNavLeft.displayName = 'Header.Nav.Left';

const HeaderNavRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 8px;
    flex: 1;
`;
HeaderNavRight.displayName = 'Header.Nav.Right';

const HeaderNavA = styled.a`
    text-decoration: none;
    color: ${cv.gray400};
    cursor: pointer;
    font-size: 14px;
    transition: 150ms;
    &:hover {
        color: ${cv.gray600};
    }
`;
HeaderNavA.displayName = 'Header.Nav.A';

export { HeaderNavLeft, HeaderNavRight, HeaderNavA };
export const HeaderNav = Object.assign(StyledHeaderNav, {
    Left: HeaderNavLeft,
    Right: HeaderNavRight,
    A: HeaderNavA,
});
