import { ComponentProps } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import a11yLight from 'react-syntax-highlighter/dist/esm/styles/hljs/a11y-light';
import styled from 'styled-components';

const Divver = styled.div`
    pre {
        border-radius: 4px;
        font-size: 12px;
    }
`

export function CodeBlock(props: {
    children: string,
    language?: string
}) {
    return (
        <Divver>
            <SyntaxHighlighter language={props.language || 'json'} style={a11yLight}>
                {props.children || ""}
            </SyntaxHighlighter>
        </Divver>
    )
}

export type CodeBlockProps = ComponentProps<typeof CodeBlock>