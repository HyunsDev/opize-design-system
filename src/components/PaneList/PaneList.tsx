import { forwardRef } from 'react';
import { StyledPaneList, StyledPaneListItem, StyledPanelistItemA } from './PaneList.style';

export interface PaneListProps extends React.HTMLProps<HTMLUListElement> {
    isSticky?: boolean;
    stickyTop?: string;
}

const PaneListContainer = forwardRef<HTMLUListElement, PaneListProps>(
    ({ children, isSticky = true, stickyTop = '64px', ...restProps }, ref) => {
        return (
            <StyledPaneList
                ref={ref}
                $isSticky={isSticky}
                $stickyTop={stickyTop}
                {...restProps}
            >
                {children}
            </StyledPaneList>
        );
    }
);

export interface PaneListItemProps extends React.HTMLProps<HTMLAnchorElement> {
    children: React.ReactNode;
    selected?: boolean;
}

const PaneListItem = forwardRef<HTMLAnchorElement, PaneListItemProps>(
    ({ children, selected = false, ...restProps }, ref) => {
        return (
            <StyledPaneListItem>
                <StyledPanelistItemA
                    $selected={selected}
                    ref={ref}
                    {...restProps}
                >
                    {children}
                </StyledPanelistItemA>
            </StyledPaneListItem>
        );
    }
);

export { PaneListItem };
export const PaneList = Object.assign(PaneListContainer, {
    Item: PaneListItem,
});
