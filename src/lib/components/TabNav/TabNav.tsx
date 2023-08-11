import { TabNavProps } from './TabNav.type';
import { useTabNav } from './useTabNav';
import { HoverBox, Item, ItemDiv, StyledTabNav, Underline } from './StyledTabNav';

export function TabNav(props: TabNavProps) {
    const {
        ref,
        targets,
        tabs,
        selected,
        blurTab,
        hoverTab,
        clickTab,
        hoverBoxStyle,
        underlineStyle,
    } = useTabNav(props);

    return (
        <StyledTabNav ref={ref}>
            <Underline {...underlineStyle} />
            <HoverBox {...hoverBoxStyle} />
            {tabs.map((tab) => {
                return (
                    <ItemDiv
                        key={tab.value}
                        ref={(el) => {
                            targets.current[tab.value] = el as HTMLDivElement;
                        }}
                        onMouseOver={() => hoverTab(tab.value)}
                        onMouseLeave={() => blurTab()}
                    >
                        <Item
                            selected={tab.value === selected}
                            disabled={!!tab.disabled}
                            onClick={() => clickTab(tab.value)}
                        >
                            {tab.title}
                        </Item>
                    </ItemDiv>
                );
            })}
        </StyledTabNav>
    );
}
