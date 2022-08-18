import styled from 'styled-components';
import { cv } from '../../style';

/**
 * 인라인 코드 스타일입니다.
 */
export const Code = styled.code<{ backgroundColor: string; borderColor: string }>`
    background-color: ${(props) => props.backgroundColor || cv.bg_element3};
    padding: 0px 4px;
    border-radius: 4px;
    border: solid 1px ${(props) => props.borderColor || cv.border3};
    font-weight: ${cv.fontFamilyMonospace};
`;
