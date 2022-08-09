import styled from "styled-components";
import React, { ComponentProps } from "react";
import { Link, Flex } from "..";
import { cv } from "../../style";
import { CaretRight } from "phosphor-react";

const ItemTitle = styled.div`
    font-size: 14px;
    margin-bottom: 4px;
    color: ${cv.text1};
`

const StyledTitleLink = styled(Link)`
    font-size: 14px;
    margin-bottom: 4px;
    display: flex;
    align-items: center;
`

const StyledLink = styled(Link)`
    font-size: 14px;
`

const TitleLink = (props: ComponentProps<typeof Link>) => {
    return (
        <div>
            <StyledTitleLink {...props} showUnderline={false} color={cv.text1}>
                {props.children}
                <CaretRight size={14} color={cv.text1} style={{marginBottom: '-2px'}} />
            </StyledTitleLink>
        </div>
    )
}

const ItemLink = (props: ComponentProps<typeof Link>) => {
    return <div><StyledLink {...props} showUnderline={false} color={cv.text3} /></div>
}


const Item = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    flex: 1;
    width: 100%;
`

const StyledFooterNavigation = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 8px;

    @media ( max-width: 767px ) {
        column-gap: 12px;
        row-gap: 48px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        text-align: center;

        ${Item} {
            align-items: center;
        }
    }
`

export const FooterNavigation = Object.assign(StyledFooterNavigation, {
    Item: Object.assign(Item, {
        Title: ItemTitle,
        TitleLink: TitleLink,
        Link: ItemLink
    })
})