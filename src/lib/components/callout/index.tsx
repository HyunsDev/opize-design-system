import React from 'react';
import styled, { FlattenInterpolation, ThemedStyledProps, css } from 'styled-components';
import { cv } from '../../style';

const CalloutIcon = styled.div`
    font-size: 16px;
    width: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const CalloutChildren = styled.div``;

type CalloutColor = 'default' | 'gray' | 'yellow' | 'red' | 'green' | 'blue';
type StyledCss<Props extends { [key: string]: any } = Record<string, any>> = FlattenInterpolation<
    ThemedStyledProps<Props, any>
>;
const colorMap: Record<CalloutColor, StyledCss> = {
    default: css`
        background-color: ${cv.bg_element3};
        border-color: ${cv.bg_element3};
        color: ${cv.text1};
    `,
    gray: css`
        background-color: ${cv.bg_element1};
        outline: solid 1px ${cv.border3};
        color: ${cv.text1};
    `,
    red: css`
        background-color: ${cv.bg_red1};
        border-color: ${cv.bg_red1};
        color: ${cv.text1};
    `,
    yellow: css`
        background-color: ${cv.bg_yellow1};
        border-color: ${cv.bg_yellow1};
        color: ${cv.text1};
    `,
    green: css`
        background-color: ${cv.bg_green1};
        border-color: ${cv.bg_green1};
        color: ${cv.text1};
    `,
    blue: css`
        background-color: ${cv.bg_blue1};
        border-color: ${cv.bg_blue1};
        color: ${cv.text1};
    `,
};

const StyledCallout = styled.div<{ color: CalloutColor }>`
    width: 100%;
    display: flex;
    gap: 8px;
    padding: 16px 16px 16px 12px;
    border-radius: 6px;

    ${(props) => colorMap[props.color]};
`;

export type CalloutProps = {
    color?: CalloutColor;
    children?: React.ReactNode;
    icon: React.ReactNode;
};
export function Callout({ children, color = 'default', icon }: CalloutProps) {
    return (
        <StyledCallout color={color}>
            <CalloutIcon>{icon}</CalloutIcon>
            <CalloutChildren>{children}</CalloutChildren>
        </StyledCallout>
    );
}
