import { forwardRef } from 'react';
import { PopoverContentProps } from './Popover.type';
import { StyledPopoverContent } from './Popover.style';
import { usePopoverContext } from './Popover.context';

export const PopoverContent = forwardRef<HTMLDivElement, PopoverContentProps>((props, ref) => {
    const { children, ...otherProps } = props;
    const { contentProps } = usePopoverContext();

    return (
        <StyledPopoverContent
            ref={ref}
            {...otherProps}
            {...contentProps}
        >
            {children}
        </StyledPopoverContent>
    );
});

PopoverContent.displayName = 'Popover.Content';
