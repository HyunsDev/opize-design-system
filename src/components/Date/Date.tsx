import { Error } from '../..';
import {
    StyledDate,
    StyledDateContainer,
    StyledDateLabel,
    StyledDateOuterContainer,
} from './Date.style';

export type DateProps = Omit<React.ComponentPropsWithRef<'input'>, 'size'> & {
    label?: React.ReactNode;
    error?: React.ReactNode;
    type?: 'date' | 'datetime-local' | 'month' | 'time' | 'week';
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    readOnly?: boolean;
    width?: string;
};

export function Date(props: DateProps) {
    const {
        label,
        error,
        type = 'date',
        width = '100%',
        size = 'medium',
        disabled = false,
        readOnly = false,
        ...rest
    } = props;

    return (
        <StyledDateOuterContainer $width={width}>
            {label && <StyledDateLabel>{label}</StyledDateLabel>}
            <StyledDateContainer
                $disabled={disabled}
                $isError={!!error}
                $readOnly={readOnly}
                $size={size}
                $width={width}
            >
                <StyledDate
                    type={type}
                    $size={size}
                    {...rest}
                />
            </StyledDateContainer>
            {error && <Error>{error}</Error>}
        </StyledDateOuterContainer>
    );
}
