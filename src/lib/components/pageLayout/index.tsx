import styled, { css } from 'styled-components';
import { cv } from '../../style';

const Header = styled.div`
    grid-area: header;
`;
Header.displayName = 'PageLayout.Header';

const Content = styled.div`
    grid-area: content;
`;
Content.displayName = 'PageLayout.Content';

const Pane = styled.div`
    grid-area: pane;
`;
Pane.displayName = 'PageLayout.Pane';

const Footer = styled.div`
    grid-area: footer;
`;
Footer.displayName = 'PageLayout.Footer';

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
PageLayoutRoot.displayName = 'PageLayout';

/**
 * 일반적인 페이지 레이아웃을 위한 컴포넌트입니다.
 */
export const PageLayout = Object.assign(PageLayoutRoot, {
    Header,
    Content,
    Pane,
    Footer,
});
