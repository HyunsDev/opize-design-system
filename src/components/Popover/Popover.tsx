import { forwardRef } from 'react';
import { PopoverProps } from './Popover.type';
import { PopoverTrigger } from './PopoverTrigger';
import { PopoverContent } from './PopoverContent';
import { StyledPopoverContainer } from './Popover.style';
import { PopoverProvider } from './Popover.context';
import { usePopover } from './usePopover';

const PopoverContainer = forwardRef<HTMLDivElement, PopoverProps>((props, ref) => {
    const { children, ...otherProps } = props;
    const context = usePopover({ ...otherProps, ref, children });

    return (
        <PopoverProvider value={context}>
            <StyledPopoverContainer
                ref={context.domRef}
                {...otherProps}
            >
                {children}
            </StyledPopoverContainer>
        </PopoverProvider>
    );
});

export const Popover = Object.assign(PopoverContainer, {
    Trigger: PopoverTrigger,
    Content: PopoverContent,
});
