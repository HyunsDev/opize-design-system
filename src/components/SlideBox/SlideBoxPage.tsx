import { forwardRef, useEffect } from 'react';
import { SlideBoxPageProps } from './SlideBox.type';
import { useDOMRef } from '../../utils/dom';
import { useSlideBoxContext } from './SlideBox.context';
import { StyledSlideBoxPage } from './SlideBox.style';

export const SlideBoxPage = forwardRef<HTMLDivElement, SlideBoxPageProps>((props, ref) => {
    const { children, index, ...otherProps } = props;
    const domRef = useDOMRef(ref);
    const { now, setHeight } = useSlideBoxContext();

    useEffect(() => {
        const ro = new ResizeObserver((e) => setHeight(e[0].contentRect.height));
        if (domRef.current && now === index) {
            ro.observe(domRef.current);
            setHeight(domRef.current.offsetHeight);
        } else {
            ro.disconnect();
        }
        return () => ro.disconnect();
    }, [now, index, domRef, setHeight]);

    const position = now === index ? 'center' : now > index ? 'left' : 'right';

    return (
        <StyledSlideBoxPage
            ref={domRef}
            $position={position}
            {...otherProps}
        >
            {children}
        </StyledSlideBoxPage>
    );
});

SlideBoxPage.displayName = 'SlideBox.Page';
