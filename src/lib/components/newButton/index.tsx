import React, { useImperativeHandle, useMemo, useRef } from 'react';

import { IconContext, IconProps } from 'phosphor-react';

import { PolymorphicRef } from '../../utils/type/polymorphicComponent';
import { ButtonComponent, ButtonProps } from '../button/buttonType';

const ProtoButton = <C extends React.ElementType = 'button'>(
    { as, children, ...props }: ButtonProps<C>,
    ref: PolymorphicRef<C>['ref']
) => {
    const componentRef = useRef<HTMLElement>(null);
    useImperativeHandle(ref, () => componentRef.current as unknown);
    const Element = as || 'button';

    const IconContextValue = useMemo<IconProps>(
        () => ({
            size: 16,
            weight: 'bold',
        }),
        []
    );

    const Children = (
        <IconContext.Provider value={IconContextValue}>
            {}
            {children}
        </IconContext.Provider>
    );

    return <></>;
};

export const Button: ButtonComponent = React.forwardRef(ProtoButton);
