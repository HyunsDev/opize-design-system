import { useState } from 'react';
import { SlideBoxProps } from './SlideBox.type';

export interface UseSlideBoxProps extends SlideBoxProps {}

export const useSlideBox = (props: UseSlideBoxProps) => {
    const { now, setNow, ...otherProps } = props;
    const [height, setHeight] = useState<number>(0);

    return {
        now,
        setNow,
        height,
        setHeight,
        ...otherProps,
    };
};

export type UseSlideBoxReturn = ReturnType<typeof useSlideBox>;
