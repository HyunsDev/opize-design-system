/* eslint-disable react/jsx-no-constructed-context-values */
import { IconContext } from 'phosphor-react';
import React from 'react';
import styled, { css, FlattenInterpolation, ThemedStyledProps } from 'styled-components';
import { cv, sv } from '../../style';
import { Flex } from '..';

type TokenSize = 'small' | 'medium' | 'large';
type TokenColor = 'default' | 'gray' | 'yellow' | 'red' | 'green' | 'blue';
type TokenVariant = 'default' | 'outlined';

type StyledCss<Props extends { [key: string]: any } = Record<string, any>> = FlattenInterpolation<
    ThemedStyledProps<Props, any>
>;

const sizeMap: Record<TokenSize, StyledCss> = {
    small: css`
        padding: 0px 6px;
        font-size: 12px;
    `,
    medium: css`
        padding: 2px 8px;
        font-size: 12px;
    `,
    large: css`
        padding: 4px 12px;
        font-size: 14px;
    `,
};

type TokenColorStyle = Record<TokenColor, StyledCss>;
const colorMap: Record<TokenVariant, TokenColorStyle> = {
    default: {
        default: css`
            background-color: ${cv.bg_element3};
            border-color: ${cv.border3};
            color: ${cv.text2};
        `,
        gray: css`
            background-color: ${cv.bg_element5};
            border-color: ${cv.bg_element5};
            color: ${cv.text5};
        `,
        red: css`
            background-color: ${cv.red1};
            border-color: ${cv.red1};
            color: ${cv.white};
        `,
        yellow: css`
            background-color: ${cv.yellow1};
            border-color: ${cv.yellow1};
            color: ${cv.white};
        `,
        green: css`
            background-color: ${cv.green1};
            border-color: ${cv.green1};
            color: ${cv.white};
        `,
        blue: css`
            background-color: ${cv.blue1};
            border-color: ${cv.blue1};
            color: ${cv.white};
        `,
    },
    outlined: {
        default: css`
            background-color: ${cv.bg_element1};
            border-color: ${cv.border3};
            color: ${cv.text2};
        `,
        gray: css`
            background-color: ${cv.bg_element1};
            border-color: ${cv.bg_element5};
            color: ${cv.bg_element5};
        `,
        red: css`
            background-color: ${cv.bg_element1};
            border-color: ${cv.red1};
            color: ${cv.red1};
        `,
        yellow: css`
            background-color: ${cv.bg_element1};
            border-color: ${cv.yellow1};
            color: ${cv.yellow1};
        `,
        green: css`
            background-color: ${cv.bg_element1};
            border-color: ${cv.green1};
            color: ${cv.green1};
        `,
        blue: css`
            background-color: ${cv.bg_element1};
            border-color: ${cv.blue1};
            color: ${cv.blue1};
        `,
    },
};

const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

interface StyledTokenType {
    size: TokenSize;
    color: TokenColor;
    variant: TokenVariant;
}
const StyledToken = styled.div<StyledTokenType>`
    ${sv.text.caption1};

    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: solid 1px;
    border-radius: 99999px;
    font-weight: 500;
    gap: 4px;

    ${(props) => sizeMap[props.size]};
    ${(props) => colorMap[props.variant][props.color]};
`;

export interface TokenProps {
    size?: TokenSize;
    color?: TokenColor;
    /**
     * 토큰의 외형입니다.
     */
    variant?: TokenVariant;
    /**
     * 토큰 왼쪽에 들어가는 아이콘입니다.
     */
    icon?: React.ReactNode;
    /**
     * 토큰 내부 컴포넌트입니다.
     */
    children?: React.ReactNode;
}
export function Token({ size = 'medium', color = 'default', variant = 'default', icon, children }: TokenProps) {
    return (
        <StyledToken size={size} color={color} variant={variant}>
            {icon && (
                <IconContext.Provider value={{ weight: 'bold', size: 14 }}>
                    <Icon>{icon}</Icon>
                </IconContext.Provider>
            )}
            <Flex.Row>{children}</Flex.Row>
        </StyledToken>
    );
}
