import { styled } from 'styled-components';
import { cv } from '../..';

interface StyledTopLoadingBarContainerProps {
    $isShow: boolean;
}
const StyledTopLoadingBarContainer = styled.div<StyledTopLoadingBarContainerProps>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: ${(props) => (props.$isShow ? cv.default200 : 'rgba(0,0,0,0)')};
    user-select: none;
    pointer-events: none;
    transition: 200ms;
    z-index: 10000;
`;

interface StyledTopLoadingBarProps {
    $width: number;
    $isShow: boolean;
}
const StyledTopLoadingBar = styled.div<StyledTopLoadingBarProps>`
    transition: 300ms ease, background-color 400ms;
    width: ${(props) => props.$width}%;
    height: 3px;
    background-color: ${(props) => (props.$isShow ? cv.foreground : 'rgba(0,0,0,0)')};
`;

export interface TopLoadingBarProps {
    isShow: boolean;
    progress: number;
}

export function TopLoadingBar({ isShow, progress }: TopLoadingBarProps) {
    return (
        <StyledTopLoadingBarContainer $isShow={isShow}>
            <StyledTopLoadingBar
                $width={progress}
                $isShow={isShow}
            />
        </StyledTopLoadingBarContainer>
    );
}
