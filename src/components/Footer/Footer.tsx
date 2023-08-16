import { StyledFooter, StyledFooterContainer } from './Footer.style';
import { FooterMenu, FooterMenuItem } from './FooterMenu';
import { FooterNav, FooterNavA, FooterNavItem, FooterNavTitle } from './FooterNav';

export interface FooterProps {
    children: React.ReactNode;
}
const FooterComponent = ({ children }: FooterProps) => {
    return (
        <StyledFooterContainer>
            <StyledFooter>{children}</StyledFooter>
        </StyledFooterContainer>
    );
};
FooterComponent.displayName = 'Footer';

export { FooterMenu, FooterMenuItem, FooterNav, FooterNavA, FooterNavItem, FooterNavTitle };
export const Footer = Object.assign(FooterComponent, {
    Menu: FooterMenu,
    Nav: FooterNav,
});
