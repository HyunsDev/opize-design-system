import { Share } from 'phosphor-react';
import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { LinkContext } from '../../context/linkContext';
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

const StyledLink = styled.a<{ color: string; $showUnderline: boolean }>`
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
    /**
     * 내용 옆에 링크 아이콘 표시 여부입니다.
     */
    showIcon?: boolean;
    children: React.ReactNode;
    color?: string;
    /**
     * 링크 Hover시 underline 표시 여부입니다.
     */
    showUnderline?: boolean;
    /**
     * 클릭했을 때 이동할 링크입니다. href 대신 사용할 수 있습니다.
     */
    to?: string;
};

export type LinkProps<T extends React.ElementType = 'a'> = PolymorphicComponentProps<T, _LinkProps>;
type LinkComponent = <C extends React.ElementType = 'a'>(props: LinkProps<C>) => React.ReactElement | null;

/**
 * Link를 표시할 때 사용합니다. OpizeWrapper의 initLink가 없다면 <a> 태그로 작동합니다.
 */
export const Link: LinkComponent = React.forwardRef(
    <T extends React.ElementType = 'a'>(
        { as, to, color, newTab = false, showIcon = false, children, showUnderline = true, ...props }: LinkProps<T>,
        ref: PolymorphicRef<T>['ref']
    ) => {
        const { Link: LinkA } = useContext(LinkContext);

        const Element = as || LinkA || 'a';

        return (
            <StyledLink
                {...props}
                href={to}
                to={to}
                target={newTab ? '_blank' : '_self'}
                rel="noreferrer"
                color={color || cv.blue1}
                $showUnderline={showUnderline}
                ref={ref}
                as={Element}
            >
                {children}
                {showIcon && (
                    <Share
                        size={16}
                        color={color || cv.blue1}
                        weight="bold"
                        style={{ marginLeft: '4px', marginBottom: '-2px' }}
                    />
                )}
            </StyledLink>
        );
    }
);
