import React from 'react';

import styled from 'styled-components';

const Divver = styled.div`
    pre {
        border-radius: 4px;
        font-size: 12px;
        word-break: break-all;
        white-space: pre-wrap;
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
    // language?: string;
}

const Pre = styled.pre``;

export function CodeBlock(props: CodeBlockProps) {
    return (
        <Divver>
            <Pre>{props.children || ''}</Pre>
        </Divver>
    );
}
