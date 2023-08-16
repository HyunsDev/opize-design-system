import styled from 'styled-components';

export const TypographyStyleExample = styled.div<{ css: string }>`
    ${(props) => props.css};
`;
