import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import SlideBoxHeightProvider, { SlideBoxHeightContext } from '../context/slideBoxHeight.context';
import { useSlideBox } from '../hook/useSlideBox';

const StyledSlideBoxContainer = styled.div`
    overflow: hidden;
    position: relative;
    width: 100%;
    transition: 300ms;
`;

function StyledSlideBoxContainerWrapper({ children }: { children: React.ReactNode }) {
    const { height, setHeight } = useContext(SlideBoxHeightContext);
    const { move } = useSlideBox();

    useEffect(() => {
        move(0);
        return () => {
            move(0);
        };
    }, [move, setHeight]);

    return (
        <StyledSlideBoxContainer
            style={{
                height,
            }}
        >
            {children}
        </StyledSlideBoxContainer>
    );
}

export function SlideBoxContainer({ children }: { children: React.ReactNode }) {
    return (
        <SlideBoxHeightProvider>
            <StyledSlideBoxContainerWrapper>{children}</StyledSlideBoxContainerWrapper>
        </SlideBoxHeightProvider>
    );
}
