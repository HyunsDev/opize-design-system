import { Share } from 'phosphor-react';
import React, { ComponentProps } from 'react';
import { Link as LinkRouter } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { cv } from '../../style';

const LinkStyle = css`
    color: ${cv.blue1};
    text-decoration: none;
    font-size: 0.875rem;
    line-height: 24px;
    cursor: pointer;
    border-bottom: solid 1px rgba(0, 0, 0, 0);
`;

const LinkA = styled.a<{ color: string; $showUnderline: boolean }>`
    /*
        만약 showUnderline 앞에 $를 붙이지 않으면 해당 prop이 a 태그로 전해지기 때문에 warning이 발생합니다.
        prefix로 $를 붙이면 해당 prop이 a 태그로 전해지는 것을 방지하기 때문에 warning을 방지할 수 있습니다.
    */
    ${LinkStyle}
    color: ${(props) => props.color};
    ${(props) =>
        props.$showUnderline &&
        css`
            &:hover {
                border-bottom: solid 1px ${props.color};
            }
        `}
`;

const LinkLink = styled(LinkRouter)<{ color: string; $showUnderline: boolean }>`
    ${LinkStyle}
    color: ${(props) => props.color};

    ${(props) =>
        props.$showUnderline &&
        css`
            &:hover {
                border-bottom: solid 1px ${props.color};
            }
        `}
`;

export function Link({
    to,
    color,
    newTab,
    hideIcon,
    children,
    showUnderline = true,
}: {
    to: string;
    newTab?: boolean;
    hideIcon?: boolean;
    children: React.ReactNode;
    color?: string;
    showUnderline?: boolean;
}) {
    if (!to.includes('http')) {
        return (
            <LinkLink to={to} color={color || cv.blue1} $showUnderline={showUnderline}>
                {children}
            </LinkLink>
        );
    }
    return (
        <LinkA
            href={to}
            target={newTab ? '_self' : '_blank'}
            rel="noreferrer"
            color={color || cv.blue1}
            $showUnderline={showUnderline}
        >
            {children}
            {!hideIcon && (
                <Share
                    size={16}
                    color={color || cv.blue1}
                    weight="bold"
                    style={{ marginLeft: '4px', marginBottom: '-2px' }}
                />
            )}
        </LinkA>
    );
}
export type LinkProps = ComponentProps<typeof Link>;
