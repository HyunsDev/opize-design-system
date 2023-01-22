import React from 'react';
import { SlideBoxContainer } from './components/slideBoxContainer';
import { SlideBoxPage } from './components/slideBoxPage';

export const SlideBox = Object.assign(SlideBoxContainer, {
    Page: SlideBoxPage,
});
