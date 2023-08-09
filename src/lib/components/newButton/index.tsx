import React, { useContext, useImperativeHandle, useMemo, useRef, useState } from 'react';

import { IconContext, IconProps } from 'phosphor-react';
import styled from 'styled-components';

import { Spinner } from '..';
import { LinkContext } from '../../context/linkContext';
import { PolymorphicRef } from '../../utils/type/polymorphicComponent';
import { colorMap, sizeMap } from '../button/buttonStyle';
import { ButtonToolTipBox } from '../button/buttonTooltip';
import { ButtonComponent, ButtonProps, StyledButtonProps } from '../button/buttonType';

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
