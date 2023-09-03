import React from 'react';

import { Share } from '@phosphor-icons/react';

import { PolymorphicRef } from '../../utils/Polymorphic';
import { AProps } from './A.type';
import { useA } from './useA';
import { StyledA } from './StyledA';

export const A = React.forwardRef(
    <T extends React.ElementType = 'a'>(
        props: AProps<T>,
        ref: PolymorphicRef<T>['ref']
    ): React.ReactElement => {
        const { domRef, as, children, styledProps, aProps, color, isShowIcon } = useA({
            ...props,
            ref,
        });

        return (
            <StyledA
                ref={domRef}
                as={as}
                {...styledProps}
                {...aProps}
            >
                {isShowIcon && (
                    <Share
                        size={16}
                        color={color}
                        weight="regular"
                        style={{ marginRight: '2px', marginBottom: '-2px' }}
                    />
                )}
                {children}
            </StyledA>
        );
    }
);

A.displayName = 'A';
