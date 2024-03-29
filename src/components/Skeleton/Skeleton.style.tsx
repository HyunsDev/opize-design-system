import { styled } from 'styled-components';
import { cv } from '../..';

interface StyledSkeletonProps {
    $width: string;
    $height: string;
    $minHeight?: string;
    $show: boolean;
    $borderRadius: string;
    $isWrap?: boolean;
}

export const StyledSkeleton = styled.span<StyledSkeletonProps>`
    position: relative;
    display: flex;
    width: ${(props) => props.$width};
    height: ${(props) => props.$height};
    min-height: ${(props) => props.$minHeight};
    border-radius: ${(props) => props.$borderRadius};

    @keyframes moving-background {
        0% {
            background-position: 200% 0;
        }
        100% {
            background-position: -200% 0;
        }
    }

    ${(props) =>
        props.$show &&
        `
            &::after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                border-radius: 4px;
                background-image: linear-gradient(
                    270deg,
                    ${cv.gray100},
                    ${cv.gray200},
                    ${cv.gray200},
                    ${cv.gray100}
                );
                background-size: 400% 100%;
                animation: moving-background 8s ease-in-out infinite;
            }
        `}
`;
