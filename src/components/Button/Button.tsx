import { forwardRef } from 'react';
import { PolymorphicRef } from '../../utils/Polymorphic';
import { ButtonProps } from './Button.type';
import { useButton } from './useButton';
import { StyledButton } from './Button.style';
import { Spinner } from '..';

export const Button = forwardRef(
    <T extends React.ElementType = 'button'>(
        props: ButtonProps<T>,
        ref: PolymorphicRef<T>['ref']
    ): React.ReactNode => {
        const {
            domRef,
            as,
            children,
            styledProps,
            buttonProps,
            isLoading,
            spinnerSize,
            prefix,
            suffix,
        } = useButton<T>({
            ...props,
            ref,
        });

        return (
            <StyledButton
                ref={domRef}
                as={as}
                {...styledProps}
                {...buttonProps}
            >
                {isLoading ? (
                    <Spinner
                        size={spinnerSize}
                        color={'var(--button-spinner-color)'}
                    />
                ) : (
                    prefix && <span className="button-prefix">{prefix}</span>
                )}
                <span className="button-child">{children}</span>
                {suffix && <span className="button-suffix">{suffix}</span>}
            </StyledButton>
        );
    }
);

Button.displayName = 'Button';
