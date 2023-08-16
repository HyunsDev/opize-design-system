import { useEffect, useState } from 'react';
import {
    SimpleHeaderA,
    SimpleHeaderLeft,
    SimpleHeaderRight,
    StyledSimpleHeader,
    StyledSimpleHeaderContainer,
} from './SimpleHeader.style';

export interface SimpleHeaderProps {
    children?: React.ReactNode;
}
const SimpleHeaderComponent = ({ children }: SimpleHeaderProps) => {
    const [isScrolling, setIsScrolling] = useState(false);
    useEffect(() => {
        const listener = () => {
            setIsScrolling(window.scrollY !== 0);
        };
        window.addEventListener('scroll', listener);
        return () => {
            window.removeEventListener('scroll', listener);
        };
    }, []);

    return (
        <StyledSimpleHeaderContainer $isScrolling={isScrolling}>
            <StyledSimpleHeader>{children}</StyledSimpleHeader>
        </StyledSimpleHeaderContainer>
    );
};
SimpleHeaderComponent.displayName = 'SimpleHeader';

export const SimpleHeader = Object.assign(SimpleHeaderComponent, {
    Left: SimpleHeaderLeft,
    Right: SimpleHeaderRight,
    A: SimpleHeaderA,
});
