import styled from 'styled-components'
import React from 'react'
import { HeaderNav } from './headerNav'
import { HeaderSubMenu } from './headerSubMenu'

const StyledHeader = styled.header`
    
`

export const Header = Object.assign(StyledHeader, {
    Nav: HeaderNav,
    SubMenu: HeaderSubMenu
})