import { styled } from 'styled-components';
import { cv } from '../..';

export const StyledPopoverContainer = styled.div`
    display: flex;
    position: relative;
    width: fit-content;
    user-select: none;
`;

export interface StyledPopoverProps {
    $isOpen: boolean;
    $directionX: 'left' | 'right';
    $directionY: 'top' | 'bottom';
    $buttonHeight: number;
}

export const StyledPopoverContent = styled.div<StyledPopoverProps>`
    display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};

    position: absolute;
    z-index: 100;

    ${({ $directionX }) => ($directionX === 'left' ? 'right: 0;' : 'left: 0;')};
    ${({ $directionY, $buttonHeight }) =>
        $directionY === 'top' ? `bottom: ${$buttonHeight + 4}px;` : `top: ${$buttonHeight + 4}px;`};

    background-color: ${cv.background};
    border: 1px solid ${cv.border};
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
    padding: 4px;
    border-radius: ${cv.var.inputRgRound};

    @keyframes FadeInKeyframes {
        0% {
            transform: translateY(${(props) => (props.$directionY === 'top' ? '4px' : '-4px')});
            opacity: 0;
        }
        100% {
            transform: translateY(0px);
            opacity: 1;
        }
    }
    animation: FadeInKeyframes 150ms cubic-bezier(0.07, 0.75, 0.54, 0.93);
`;
