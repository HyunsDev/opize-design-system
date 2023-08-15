import { styled } from 'styled-components';
import { cv } from '../..';

export interface StyledAvatarProps {
    $size: string;
    $disabled: boolean;
}
export const StyledAvatar = styled.span<StyledAvatarProps>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: ${(props) => props.$size};
    height: ${(props) => props.$size};
    opacity: ${(props) => (props.$disabled ? 0.5 : 1)};

    background-color: ${cv.background};
    border: 1px solid ${cv.default100};

    transition: opacity 200ms;
`;

export const StyledAvatarImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
`;
