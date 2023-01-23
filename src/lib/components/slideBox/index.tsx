import React from 'react';
import { SlideBoxContainer } from './components/slideBoxContainer';
import { SlideBoxPage } from './components/slideBoxPage';
import { useSlideBox } from './hook/useSlideBox';

export const SlideBox = Object.assign(SlideBoxContainer, {
    Page: SlideBoxPage,
});

export { useSlideBox };
