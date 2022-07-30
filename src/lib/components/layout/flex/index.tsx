import styled from "styled-components";


export const FlexRow = styled.div<{gap?: number}>`
    display: flex;
    align-items: center;
    gap: ${props => props.gap || 8}px;
`

export const FlexColumn = styled.div<{gap?: number}>`
    display: flex;
    flex-direction: column;
    gap: ${props => props.gap || 8}px;
`

export const FlexCenter = styled.div<{gap?: number}>`
    display: flex;
    gap: ${props => props.gap || 8}px;
    align-items: center;
    justify-content: center;
`

export const FlexBetween = styled.div<{gap?: number}>`
    display: flex;
    gap: ${props => props.gap || 8}px;
    align-items: center;
    justify-content: space-between;
`