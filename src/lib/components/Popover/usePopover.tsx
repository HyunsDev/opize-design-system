import { useCallback, useEffect, useState } from 'react';
import { useDOMRef } from '../../utils/dom';
import { PopoverProps } from './Popover.type';

export interface UsePopoverProps extends PopoverProps {
    ref: React.Ref<HTMLDivElement>;
}

export function usePopover(props: UsePopoverProps) {
    const { ref, ...otherProps } = props;
    const domRef = useDOMRef(ref);

    const [isOpen, setIsOpen] = useState(false);
    const [popoverDirection, setPopoverDirection] = useState<{
        x: 'left' | 'right';
        y: 'top' | 'bottom';
    }>({
        x: 'left',
        y: 'bottom',
    });

    const openPopover = () => {
        calcPopoverDirection();
        setIsOpen(true);
    };

    const closePopover = () => {
        setIsOpen(false);
    };

    const calcPopoverDirection = useCallback(() => {
        const ref = domRef.current;
        if (!ref) return;

        const x =
            ref.getBoundingClientRect().right + 250 >
            (window.innerWidth >= 1200 ? (window.innerWidth - 1200) / 2 + 1200 : window.innerWidth)
                ? 'left'
                : 'right';

        const y = ref.getBoundingClientRect().bottom + 250 > window.innerHeight ? 'bottom' : 'top';

        setPopoverDirection({ x, y });
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (domRef.current && !domRef.current.contains(event.target as Node)) {
                closePopover();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const triggerProps = {};
    const contentProps = {
        $directionX: popoverDirection.x,
        $directionY: popoverDirection.y,
        $isOpen: isOpen,
        $buttonHeight: domRef.current?.getBoundingClientRect().height || 40,
    };

    return {
        domRef,
        isOpen,
        triggerProps,
        contentProps,
        otherProps,
        openPopover,
        closePopover,
    };
}

export type UsePopoverReturn = ReturnType<typeof usePopover>;
