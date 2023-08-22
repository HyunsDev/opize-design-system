import { TableProps } from '.';
import { useDOMRef } from '../../utils/dom';

export interface UseTableProps extends TableProps {
    ref: React.Ref<HTMLTableElement>;
}

export function useTable(props: UseTableProps) {
    const { children, ref, ...otherProps } = props;
    const domRef = useDOMRef(ref);

    return {
        children,
        domRef,
        otherProps,
    };
}

export type UseTableReturn = ReturnType<typeof useTable>;
