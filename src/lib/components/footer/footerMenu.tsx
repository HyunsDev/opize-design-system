import styled from 'styled-components';
import React, { useMemo } from 'react';
import { IconContext, IconProps } from 'phosphor-react';
import { cv } from '../../style';

const StyledItem = styled.div`
    gap: 16px;
    flex: 1;
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 12px;
    color: ${cv.text3};
    line-height: 24px;

    svg {
        height: 20px;
        fill: ${cv.text3};
    }
`;

function Item({ children }: { children: React.ReactNode }) {
    const iconStyle = useMemo<IconProps>(
        () => ({
            weight: 'fill',
            color: cv.text3,
            size: 28,
        }),
        []
    );

    return (
        <IconContext.Provider value={iconStyle}>
            <StyledItem>{children}</StyledItem>
        </IconContext.Provider>
    );
}

const StyledFooterMenu = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 767px) {
        flex-direction: column;
        align-self: center;
        text-align: center;
        gap: 12px;

        ${StyledItem} {
            justify-content: center;
        }
    }
`;

export const FooterMenu = Object.assign(StyledFooterMenu, {
    Item,
});
