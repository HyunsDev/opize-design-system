import { useEffect, useState } from 'react';
import { TabNav, TabNavProps } from '..';
import { StyledHeaderMenu, StyledHeaderMenuContainer } from './HeaderMenu.style';

export interface HeaderMenuProps extends TabNavProps {}
export const HeaderMenu = ({ selected, tabs, setSelected }: HeaderMenuProps) => {
    const [isScrolling, setIsScrolling] = useState(false);

    useEffect(() => {
        const listener = () => {
            setIsScrolling(window.scrollY > 54);
        };

        window.addEventListener('scroll', listener);
        return () => {
            window.removeEventListener('scroll', listener);
        };
    }, []);

    return (
        <StyledHeaderMenuContainer $isScrolling={isScrolling}>
            <StyledHeaderMenu>
                <TabNav
                    selected={selected}
                    tabs={tabs}
                    setSelected={setSelected}
                />
            </StyledHeaderMenu>
        </StyledHeaderMenuContainer>
    );
};
