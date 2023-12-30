import { styled } from 'styled-components';
import { ErrorProps } from './Error';
import { cv } from '../..';

interface StyledErrorProps {
    $size: ErrorProps['size'];
}

const getSizeStyle = ({ $size }: StyledErrorProps) => {
    switch ($size) {
        case 'small':
            return `
                font-size: 14px;
                line-height: 18px;
            `;
        case 'regular':
            return `
                font-size: 14px;
                line-height: 20px;
            `;
        case 'medium':
            return `
                font-size: 14px;
                line-height: 20px;
            `;
        case 'large':
            return `
                font-size: 16px;
                line-height: 22px;
            `;
    }
};

export const StyledError = styled.div<StyledErrorProps>`
    display: flex;
    align-items: center;
    gap: 6px;
    color: ${cv.statusRed};

    ${(props) => getSizeStyle(props)};
`;

const getLabelSizeStyle = ({ $size }: StyledErrorProps) => {
    switch ($size) {
        case 'small':
            return `
                font-size: 16px;
                line-height: 18px;
            `;
        case 'regular':
            return `
                font-size: 16px;
                line-height: 20px;
            `;
        case 'medium':
            return `
                font-size: 16px;
                line-height: 20px;
            `;
        case 'large':
            return `
                font-size: 18px;
                line-height: 22px;
            `;
    }
};

export const ErrorLabel = styled.div<StyledErrorProps>`
    display: flex;
    align-items: flex-start;
    height: 100%;
    font-weight: bold;

    ${(props) => getLabelSizeStyle(props)};
`;

export const ErrorContent = styled.div`
    display: flex;
`;
