import { StyledFooter, StyledFooterContainer } from './Footer.style';
import { FooterMenu } from './FooterMenu';
import { FooterNav } from './FooterNav';

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

export const Footer = Object.assign(FooterComponent, {
    Menu: FooterMenu,
    Nav: FooterNav,
});
