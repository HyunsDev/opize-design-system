import React, { useContext, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { SlideBoxHeightContext } from '../context/slideBoxHeight.context';
import { useSlideBox } from '../hook/useSlideBox';

const StyledSlideBoxPage = styled.div<{ pos: 'left' | 'center' | 'right' }>`
    top: 0px;
    left: 0px;
    position: absolute;
    transition: 300ms;
    width: 100%;

    ${(props) => props.pos === 'left' && 'transform: translateX(calc(-100% - 30px));'}
    ${(props) => props.pos === 'center' && 'transform: translateX(0px);'}
    ${(props) => props.pos === 'right' && 'transform: translateX(calc(100% + 30px));'}

    @media (max-width: 767px) {
        padding: 0px 4px;
    }
`;

const getPos = (pos: number, now: number) => {
    if (now === pos) return 'center';
    if (pos > now) return 'right';
    return 'left';
};

export function SlideBoxPage({ children, pos }: { children: React.ReactNode; pos: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const { now } = useSlideBox();
    const { setHeight } = useContext(SlideBoxHeightContext);

    useEffect(() => {
        const ro = new ResizeObserver((e) => {
            setHeight(e[0].contentRect.height);
        });

        if (ref.current && now === pos) {
            ro.observe(ref.current);
        } else {
            ro.disconnect();
        }

        return () => {
            ro.disconnect();
        };
    }, [now, pos, setHeight]);

    useEffect(() => {
        if (!ref.current) return;
        if (now !== pos) return;
        setHeight(ref.current.offsetHeight || 100);
    }, [now, pos, setHeight]);

    return (
        <StyledSlideBoxPage pos={getPos(pos, now)} ref={ref}>
            {children}
        </StyledSlideBoxPage>
    );
}
