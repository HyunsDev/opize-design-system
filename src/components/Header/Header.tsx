import { StyledHeaderContainer } from './Header.style';
import { HeaderMenu } from './HeaderMenu';
import { HeaderNav, HeaderNavA, HeaderNavLeft, HeaderNavRight } from './HeaderNav';

export { HeaderMenu, HeaderNav, HeaderNavA, HeaderNavLeft, HeaderNavRight };
export const Header = Object.assign(StyledHeaderContainer, {
    Nav: HeaderNav,
    Menu: HeaderMenu,
});
