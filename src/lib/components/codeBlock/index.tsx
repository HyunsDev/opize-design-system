import React, { ComponentProps } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import a11yLight from 'react-syntax-highlighter/dist/esm/styles/hljs/a11y-light';
import styled from 'styled-components';

const Divver = styled.div`
    pre {
        border-radius: 4px;
        font-size: 12px;
    }
`;

export interface CodeBlockProps {
    /**
     * 코드 본문입니다.
     */
    children: string;
    /**
     * 언어 이름입니다.
     */
    language?: string;
}

/**
 * react-syntax-highlighter을 이용한 코드 블록입니다.
 */
export function CodeBlock(props: CodeBlockProps) {
    return (
        <Divver>
            <SyntaxHighlighter language={props.language || 'json'} style={a11yLight}>
                {props.children || ''}
            </SyntaxHighlighter>
        </Divver>
    );
}
