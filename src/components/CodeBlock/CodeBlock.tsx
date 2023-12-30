import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
    CodeBlockAction,
    StyledCodeBlockActions,
    StyledCodeBlockContainer,
    StyledCodeBlockHeader,
    StyledCodeBlockTitle,
} from './CodeBlock.style';

import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import React, { useState } from 'react';
import { Check, Copy } from '@phosphor-icons/react';
import { cv } from '../..';

export type CodeBlockProps = {
    children?: string;
    language?: string;
    width?: string;
    showHeader?: boolean;
    showLineNumbers?: boolean;
    startingLineNumber?: number;
    showCopyButton?: boolean;
    actions?: React.ReactNode;
    title?: string;
};

export const CodeBlock = ({
    children,
    language = 'json',
    width = '100%',
    showHeader = true,
    showLineNumbers = true,
    startingLineNumber = 1,
    showCopyButton = true,
    actions,
    title,
}: CodeBlockProps) => {
    const [copyResult, setCopyResult] = useState(false);
    const copyToClipboard = () => {
        navigator.clipboard.writeText(children || '');
        setCopyResult(true);
        setTimeout(() => {
            setCopyResult(false);
        }, 1000);
    };

    return (
        <StyledCodeBlockContainer
            $width={width}
            $showHeader={showHeader}
        >
            {showHeader && (
                <StyledCodeBlockHeader>
                    <StyledCodeBlockTitle>{title}</StyledCodeBlockTitle>
                    <StyledCodeBlockActions>
                        {actions}
                        {showCopyButton && (
                            <CodeBlockAction onClick={() => copyToClipboard()}>
                                {copyResult ? (
                                    <Check
                                        size={16}
                                        color={cv.statusGreen}
                                        weight="bold"
                                    />
                                ) : (
                                    <Copy size={16} />
                                )}
                            </CodeBlockAction>
                        )}
                    </StyledCodeBlockActions>
                </StyledCodeBlockHeader>
            )}
            <SyntaxHighlighter
                language={language}
                style={oneLight}
                showLineNumbers={showLineNumbers}
                startingLineNumber={startingLineNumber}
            >
                {children || ''}
            </SyntaxHighlighter>
        </StyledCodeBlockContainer>
    );
};
CodeBlock.displayName = 'CodeBlock';
CodeBlock.Action = CodeBlockAction;
