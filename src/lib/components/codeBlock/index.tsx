import React from 'react';
import styled from 'styled-components';
import { useColorTheme } from '../../hooks';

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
    // language?: string;
}

const Pre = styled.pre``;

export function CodeBlock(props: CodeBlockProps) {
    // const { nowColorTheme } = useColorTheme();

    return (
        <Divver>
            <Pre>{props.children || ''}</Pre>
        </Divver>
    );
}
