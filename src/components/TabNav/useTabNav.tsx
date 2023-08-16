import { useCallback, useEffect, useRef, useState } from 'react';
import { TabNavProps } from './TabNav.type';

export function useTabNav(props: TabNavProps) {
    const { selected, tabs, setSelected } = props;

    const ref = useRef<HTMLDivElement>(null);
    const targets = useRef<{ [key: string]: HTMLDivElement }>({});

    const hoverTimer = useRef<NodeJS.Timeout>();
    const [underlineStyle, setUnderlineStyle] = useState({
        width: 0,
        left: 0,
    });
    const [hoverBoxStyle, setHoverBoxStyle] = useState({
        width: 0,
        left: 0,
        show: false,
    });

    useEffect(() => {
        const style = {
            width: targets.current[selected]?.offsetWidth,
            left:
                Number(targets.current[selected]?.getBoundingClientRect().left) -
                Number(ref.current?.getBoundingClientRect().left),
        };
        setUnderlineStyle(style);
    }, [selected]);

    const hoverTab = useCallback(
        (value: string) => {
            if (hoverTimer.current) clearTimeout(hoverTimer.current);
            const tab = tabs?.find((tab) => tab.value === value);
            if (!tab || tab.disabled) return;

            const style = {
                width: targets.current[value]?.offsetWidth,
                left:
                    Number(targets.current[value]?.getBoundingClientRect().left) -
                    Number(ref.current?.getBoundingClientRect().left),
                show: true,
            };
            setHoverBoxStyle(style);
        },
        [tabs]
    );

    const blurTab = useCallback(() => {
        hoverTimer.current = setTimeout(() => {
            setHoverBoxStyle((prev) => ({
                ...prev,
                show: false,
            }));
        }, 10);
    }, []);

    const clickTab = useCallback(
        (value: string) => {
            const tab = tabs?.find((tab) => tab.value === value);
            if (!tab || tab.disabled) return;
            if (!tab?.onClick && setSelected) setSelected(value);
            if (tab?.onClick) tab.onClick();
        },
        [setSelected, tabs]
    );

    return {
        ref,
        targets,
        tabs,
        selected,
        underlineStyle,
        hoverBoxStyle,
        hoverTab,
        blurTab,
        clickTab,
    };
}
