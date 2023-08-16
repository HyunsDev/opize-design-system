import { forwardRef } from 'react';
import { StyledSlideBox } from './SlideBox.style';
import { SlideBoxProps } from './SlideBox.type';
import { SlideBoxContextProvider } from './SlideBox.context';
import { useSlideBox } from './useSlideBox';
import { SlideBoxPage } from './SlideBoxPage';

const SlideBoxContainer = forwardRef<HTMLDivElement, SlideBoxProps>((props, ref) => {
    const { children, ...otherProps } = props;
    const context = useSlideBox(props);

    return (
        <SlideBoxContextProvider value={context}>
            <StyledSlideBox
                ref={ref}
                style={{
                    height: context.height,
                }}
                {...otherProps}
            >
                {children}
            </StyledSlideBox>
        </SlideBoxContextProvider>
    );
});

SlideBoxContainer.displayName = 'SlideBox';

export { SlideBoxPage };
export const SlideBox = Object.assign(SlideBoxContainer, {
    Page: SlideBoxPage,
});
