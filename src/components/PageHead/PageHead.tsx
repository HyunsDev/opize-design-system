import {
    StyledPageHead,
    StyledPageHeadContainer,
    StyledPageHeadContent,
    StyledPageHeadTitle,
} from './PageHead.style';

export interface PageHeadProps {
    title?: React.ReactNode;
    children?: React.ReactNode;
    width?: string;
}

export function PageHead({ title, children, width = '1200px' }: PageHeadProps) {
    return (
        <StyledPageHeadContainer>
            <StyledPageHead $width={width}>
                {title && <StyledPageHeadTitle>{title}</StyledPageHeadTitle>}
                <StyledPageHeadContent>{children}</StyledPageHeadContent>
            </StyledPageHead>
        </StyledPageHeadContainer>
    );
}
