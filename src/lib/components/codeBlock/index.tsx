import SyntaxHighlighter from 'react-syntax-highlighter';
import a11yLight from 'react-syntax-highlighter/dist/esm/styles/hljs/a11y-light';
import styled from 'styled-components';

const Divver = styled.div`
    pre {
        border-radius: 4px;
        font-size: 12px;
    }
`

interface CodeProps {
    children: string,
    language?: string
}

export function CodeBlock(props: CodeProps) {
    return (
        <Divver>
            <SyntaxHighlighter language={props.language || 'json'} style={a11yLight}>
                {props.children || ""}
            </SyntaxHighlighter>
        </Divver>
    )
}