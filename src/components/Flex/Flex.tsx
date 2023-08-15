import styled from 'styled-components';

export type FlexProps = {
    gap?: string;
    direction?: 'row' | 'column';
    align?: 'center' | 'start' | 'end' | 'stretch' | 'baseline';
    justify?: 'center' | 'start' | 'end' | 'space-between' | 'space-around' | 'space-evenly';
    wrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
    width?: string;
};

const FlexLayout = styled.div<FlexProps>`
    display: flex;
    flex-direction: ${(props) => props.direction || 'row'};
    ${(props) => props.gap && `gap: ${props.gap}`};
    ${(props) => props.align && `align-items: ${props.align}`};
    ${(props) => props.justify && `justify-content: ${props.justify}`};
    ${(props) => props.width && `width: ${props.width}`};
    ${(props) => props.wrap && `flex-wrap: ${props.wrap}`};
`;

export type SubFlexProps = {
    gap?: string;
    width?: string;
};

const FlexCenter = styled.div<SubFlexProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    ${(props) => props.gap && `gap: ${props.gap}`};
    ${(props) => props.width && `width: ${props.width}`};
`;

const FlexBetween = styled.div<SubFlexProps>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${(props) => props.gap && `gap: ${props.gap}`};
    ${(props) => props.width && `width: ${props.width}`};
`;

const FlexColumn = styled.div<SubFlexProps>`
    display: flex;
    flex-direction: column;
    ${(props) => props.gap && `gap: ${props.gap}`};
    ${(props) => props.width && `width: ${props.width}`};
`;

const FlexRow = styled.div<SubFlexProps>`
    display: flex;
    align-items: center;
    ${(props) => props.gap && `gap: ${props.gap}`};
    ${(props) => props.width && `width: ${props.width}`};
`;

export const Flex = Object.assign(FlexLayout, {
    Center: FlexCenter,
    Between: FlexBetween,
    Column: FlexColumn,
    Row: FlexRow,
});
