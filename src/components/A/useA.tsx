import React from 'react';
import { AProps } from './A.type';
import { PolymorphicRef } from '../../utils/Polymorphic';
import { StyledAProps } from './StyledA';
import { cv } from '../..';

export function useA<T extends React.ElementType = 'a'>(props: AProps<T>) {
    const { ref, as = 'a', children, isShowIcon = false, color = cv.link, ...otherProps } = props;

    const domRef = React.useRef<PolymorphicRef<T>>(ref);

    const styledProps: StyledAProps = {
        $color: color,
    };

    const aProps = {
        children,
        ...otherProps,
    };

    return {
        domRef,
        as,
        children,
        styledProps,
        aProps,
        isShowIcon,
        color,
    };
}
