import { useContext } from 'react';
import { SlideBoxActionContext, SlideBoxValueContext } from '../context/slideBox.context';

export function useSlideBox() {
    const { move } = useContext(SlideBoxActionContext);
    const { now } = useContext(SlideBoxValueContext);
    return { move, now };
}
