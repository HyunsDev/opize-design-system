import { styled } from 'styled-components';
import { cv } from '../..';

const FooterNavItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    flex: 1;
    width: 100%;
`;
FooterNavItem.displayName = 'Footer.Nav.Item';

const FooterNavTitle = styled.div`
    font-size: 14px;
    margin-bottom: 4px;
    color: ${cv.foreground};
`;

const FooterNavA = styled.a`
    font-size: 14px;
    text-decoration: none;
    color: ${cv.default400};
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;

const StyledFooterNav = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 8px;

    @media (max-width: 767px) {
        column-gap: 12px;
        row-gap: 48px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        text-align: center;

        ${FooterNavItem} {
            align-items: center;
        }
    }
`;

export { FooterNavItem, FooterNavTitle, FooterNavA };
export const FooterNav = Object.assign(StyledFooterNav, {
    Item: FooterNavItem,
    Title: FooterNavTitle,
    A: FooterNavA,
});
