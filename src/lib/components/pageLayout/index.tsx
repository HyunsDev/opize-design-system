import styled, { css } from 'styled-components';
import { cv } from '../../style';

const Header = styled.div`
    grid-area: header;
`;

const Content = styled.div`
    grid-area: content;
`;

const Pane = styled.div`
    grid-area: pane;
`;

const Footer = styled.div`
    grid-area: footer;
`;

const PageLayoutRoot = styled.div<{ width?: string; gap?: string; panPosition?: 'start' | 'end' }>`
    display: grid;
    width: ${(props) => props.width || cv.pageWidth};
    gap: ${(props) => props.gap || '8px'};
    margin: 0 auto;
    justify-items: stretch;
    ${(props) =>
        props.panPosition === 'start'
            ? css`
                  grid-template-areas:
                      'header header'
                      'pane content'
                      'footer footer';
                  grid-template-columns: 300px 1fr;
              `
            : css`
                  grid-template-areas:
                      'header header'
                      'content pane '
                      'footer footer';
                  grid-template-columns: 1fr 300px;
              `}

    @media ( max-width: 767px ) {
        grid-template-areas:
            'header'
            'content'
            'pane'
            'footer';
    }
`;

export const PageLayout = Object.assign(PageLayoutRoot, {
    Header,
    Content,
    Pane,
    Footer,
});
