import React from "react";
import styled from "styled-components";


export const Box = styled.div`
    border: solid 1px #c9d1da;
    padding: 20px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    margin-top: 16px;
    gap: 12px;
`

const StyledBoxItem = styled.div`
    font-size: 0.875rem;
    display: flex;
`

const BoxItemLabel = styled.div`
    min-width: 180px;
    display: flex;
    align-items: center;
`

const BoxItemChildren = styled.div`
    flex: 1;
`

export function BoxItem(props: {label: string, children: React.ReactNode}) {
    return (
        <StyledBoxItem>
            <BoxItemLabel>{props.label}</BoxItemLabel>
            <BoxItemChildren>{props.children}</BoxItemChildren>
        </StyledBoxItem>
    )
}
