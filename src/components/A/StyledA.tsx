import { styled } from 'styled-components';

export type StyledAProps = {
    $color: string;
};

export const StyledA = styled.a<StyledAProps>`
    ${({ theme }) => theme.typo.link};
    color: ${({ $color }) => $color};
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;
