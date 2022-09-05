import styled from 'styled-components';
import React from 'react';
import { HeaderNav } from './headerNav';
import { HeaderSubMenu } from './headerSubMenu';
import { HeaderNotice } from './headerNotice';

export interface HeaderProps {
    /**
     * Header에 들어가는 내용입니다. \<Header.Notice\>, \<Header.Nav\>, \<Header.SubMenu\> 순으로 작성합니다.
     *
     * \<Header.Notice\>는 선택이나, 포함하지 않는 경우 useHeaderNotice()를 사용할 수 없습니다.
     */
    children: React.ReactNode;
}
const StyledHeader = styled.header`
    z-index: 10;
`;
StyledHeader.displayName = 'Header';

/**
 * 페이지 가장 위에 들어가는 Header입니다.
 */
export const Header = Object.assign(StyledHeader, {
    Nav: HeaderNav,
    SubMenu: HeaderSubMenu,
    Notice: HeaderNotice,
});
