import styled from "styled-components"
import { cv } from "../../style"
import { ComponentProps } from "react"

const BoxOuter = styled.div`
    border: solid 1px ${cv.border3};
    border-radius: 4px;
`

const BoxDiv = styled.div`
    padding: 22px 20px;

    font-size: .875rem;
    font-weight: 400;
    line-height: 1.6;

    display: flex;
    flex-direction: column;
    gap: 8px;
`

const BoxTitle = styled.h4`
    font-size: 1.25rem;
    line-height: 1.5;
    font-weight: 600px;
    letter-spacing: -.020625rem;
`

export function Box(props: {
    children: React.ReactNode,
    title?: string
}) {

    return (
        <BoxOuter>
            <BoxDiv {...props}>
                { props.title && <BoxTitle>{props.title}</BoxTitle> }
                { props.children }
            </BoxDiv>
        </BoxOuter>
    )
}

export type BoxProps = ComponentProps<typeof Box>