import { styled } from 'styled-components';
import { BadgeProps } from '../Badge.type';
import { getColorStyle, getSizeStyle } from './style';

export type StyleBadgeProps = {
    size: BadgeProps['size'];
    color: BadgeProps['color'];
    variant: BadgeProps['variant'];
};

export const StyledBadge = styled.div<StyleBadgeProps>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 10000px;
    width: fit-content;
    white-space: nowrap;

    ${(props) => getSizeStyle(props)};
    ${(props) => getColorStyle(props)}
`;
