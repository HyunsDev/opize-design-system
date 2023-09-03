import { styled } from 'styled-components';

export const StyledSlideBox = styled.div`
    overflow: hidden;
    position: relative;
    width: 100%;
    transition: 300ms;
`;

const getSlideBoxPageTransform = (position: 'left' | 'center' | 'right') => {
    switch (position) {
        case 'left':
            return 'translateX(calc(-100% - 30px))';
        case 'center':
            return 'translateX(0%)';
        case 'right':
            return 'translateX(calc(100% + 30px))';
    }
};

export interface StyledSlideBoxPageProps {
    $position: 'left' | 'center' | 'right';
}

export const StyledSlideBoxPage = styled.div<StyledSlideBoxPageProps>`
    top: 0px;
    left: 0px;
    position: absolute;
    width: 100%;
    transition: transform 300ms;
    transform: ${(props) => getSlideBoxPageTransform(props.$position)};

    @media (max-width: 767px) {
        padding: 0px 4px;
    }
`;
