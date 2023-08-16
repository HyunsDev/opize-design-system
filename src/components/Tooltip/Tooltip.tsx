import React, { useState } from 'react';

import { StyledTooltip, TooltipContainer } from './Tooltip.style';

export interface TooltipProps {
    children?: React.ReactNode;
    content?: React.ReactNode | string;
    direction?: 'top' | 'bottom';
}

export function Tooltip({ children, content, direction = 'top' }: TooltipProps) {
    const [isHover, setIsHover] = useState(false);

    return (
        <TooltipContainer
            $isHover={isHover}
            onMouseOver={() => setIsHover(true)}
            onMouseOut={() => setIsHover(false)}
        >
            <StyledTooltip $direction={direction}>{content}</StyledTooltip>
            {children}
        </TooltipContainer>
    );
}
