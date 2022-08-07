import styled from "styled-components"
import { cv } from "../../style"
import { ComponentProps } from "react"
import { Button, ButtonProps } from "../button"

const BoxOuter = styled.div`
    border: solid 1px ${cv.border3};
    border-radius: 4px;
`

const BoxDiv = styled.div`
    padding: 22px 24px;

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

const BoxHeaderDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 24px;
    background-color: ${cv.bg_element2};
    border-bottom: solid 1px ${cv.border3};
    font-size: .875rem;
`

const BoxFooterDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 24px;
    background-color: ${cv.bg_element2};
    border-top: solid 1px ${cv.border3};
    font-size: .875rem;
`
function BoxFooter(props: {
    text: React.ReactNode,
    button: ButtonProps
}) {

    return (
        <BoxFooterDiv>
            <div>{props.text}</div>
            <Button {...props.button} />
        </BoxFooterDiv>
    )
}

export function Box(props: {
    children: React.ReactNode,
    title?: React.ReactNode,
    header?: React.ReactNode,
    footerTemplate?: {
        text: React.ReactNode,
        button: ButtonProps
    }
    footer?: React.ReactNode,
}) {
    if (props.footer && props.footerTemplate) {
        console.error('You can ese either "footer" or "footerNode"')
    }

    return (
        <BoxOuter>
            <>
                { props.header &&  <BoxHeaderDiv>{props.header}</BoxHeaderDiv>}
                <BoxDiv>
                    { props.title && <BoxTitle>{props.title}</BoxTitle> }
                    { props.children }
                </BoxDiv>
                { props.footerTemplate && <BoxFooter {...props.footerTemplate} /> }
                { props.footer && <BoxFooterDiv>{props.footer}</BoxFooterDiv> }
            </>
        </BoxOuter>
    )
}

export type BoxProps = ComponentProps<typeof Box>