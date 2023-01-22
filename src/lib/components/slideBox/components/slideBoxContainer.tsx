import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import SlideBoxHeightProvider, { SlideBoxHeightContext } from '../context/slideBoxHeight.context';
import { useSlideBox } from '../hook/useSlideBox';

const StyledSlideBoxContainer = styled.div<{ isLoading: boolean }>`
    overflow: hidden;
    position: relative;
    width: 100%;
    transition: ${(props) => (props.isLoading ? '0ms' : '200ms')};
`;

function StyledSlideBoxContainerWrapper({ children }: { children: React.ReactNode }) {
    const { height } = useContext(SlideBoxHeightContext);

    return (
        <StyledSlideBoxContainer
            isLoading={height === -1}
            style={{
                height,
            }}
        >
            {children}
        </StyledSlideBoxContainer>
    );
}

export function SlideBoxContainer({ children }: { children: React.ReactNode }) {
    const { move } = useSlideBox();

    useEffect(() => {
        move(0);
    }, [move]);

    return (
        <SlideBoxHeightProvider>
            <StyledSlideBoxContainerWrapper>{children}</StyledSlideBoxContainerWrapper>
        </SlideBoxHeightProvider>
    );
}
