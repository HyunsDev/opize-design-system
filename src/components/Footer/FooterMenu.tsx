import { styled } from 'styled-components';
import { cv } from '../..';

const FooterMenuItem = styled.div`
    gap: 16px;
    flex: 1;
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 12px;
    color: ${cv.default400};
    line-height: 24px;

    svg {
        height: 20px;
        fill: ${cv.default400};
    }
`;
FooterMenuItem.displayName = 'Footer.Menu.Item';

const StyledFooterMenu = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 767px) {
        flex-direction: column;
        align-self: center;
        text-align: center;
        gap: 12px;
        ${FooterMenuItem} {
            justify-content: center;
        }
    }
`;
StyledFooterMenu.displayName = 'Footer.Menu';

export const FooterMenu = Object.assign(StyledFooterMenu, {
    Item: FooterMenuItem,
});
