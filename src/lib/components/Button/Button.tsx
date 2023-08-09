import { forwardRef } from 'react';
import { PolymorphicRef } from '../../utils/Polymorphic';
import { ButtonProps } from './Button.type';
import { useButton } from './useButton';
import { StyledButton } from './style';

const Button = forwardRef(
    <T extends React.ElementType = 'button'>(
        props: ButtonProps<T>,
        ref: PolymorphicRef<T>['ref']
    ): JSX.Element => {
        const { domRef, as, children, styledProps, buttonProps } = useButton<T>({
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
                {children}
            </StyledButton>
        );
    }
);

Button.displayName = 'Button';

export { Button };
