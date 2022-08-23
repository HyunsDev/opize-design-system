import { Share } from 'phosphor-react';
import React, { ComponentProps } from 'react';
import styled, { css } from 'styled-components';
import { cv } from '../../style';
import { PolymorphicComponentProps, PolymorphicRef } from '../../utils/type/polymorphicComponent';

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

type _LinkProps = {
    hideIcon?: boolean;
    children: React.ReactNode;
    color?: string;
    showUnderline?: boolean;
};

export type LinkProps<T extends React.ElementType = 'a'> = PolymorphicComponentProps<T, _LinkProps>;
type LinkComponent = <C extends React.ElementType = 'a'>(props: LinkProps<C>) => React.ReactElement | null;

export const Link: LinkComponent = React.forwardRef(
    <T extends React.ElementType = 'a'>(
        { to, color, newTab, hideIcon, children, showUnderline = true }: LinkProps<T>,
        ref: PolymorphicRef<T>['ref']
    ) => {
        return (
            <LinkA
                href={to}
                target={newTab ? '_self' : '_blank'}
                rel="noreferrer"
                color={color || cv.blue1}
                $showUnderline={showUnderline}
                ref={ref}
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
);
