import { StyledHeaderContainer } from './Header.style';
import { HeaderMenu } from './HeaderMenu';
import { HeaderNav } from './HeaderNav';

export const Header = Object.assign(StyledHeaderContainer, {
    Nav: HeaderNav,
    Menu: HeaderMenu,
});
