import { styled } from 'styled-components';
import { cv } from '../..';

export const StyledFooterContainer = styled.div`
    width: 100%;
    background-color: ${cv.gray100};
    border-top: solid 1px ${cv.border};
    position: relative;
    padding: 36px 0px;
`;

export const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1248px;
    padding: 0px 24px;
    margin: auto;
    gap: 52px;

    @media (max-width: 767px) {
        padding: 0px 8px;
    }
`;
