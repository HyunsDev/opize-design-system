import { forwardRef } from 'react';
import { MenuOptionProps } from './Menu.type';
import { StyledOption } from './Menu.style';
import { Spinner } from '..';

export const MenuOption = forwardRef<HTMLButtonElement, MenuOptionProps>((props, ref) => {
    const {
        children,
        variant = 'default',
        isLoading = false,
        disabled = false,
        prefix,
        suffix,
        ref: _,
        ...otherProps
    } = props;

    return (
        <StyledOption
            ref={ref}
            disabled={disabled || isLoading}
            $variant={variant}
            {...otherProps}
        >
            {isLoading ? (
                <Spinner
                    size={20}
                    color={'var(--button-spinner-color)'}
                />
            ) : (
                prefix && <span className="button-prefix">{prefix}</span>
            )}
            <span className="button-child">{children}</span>
            {suffix && <span className="button-suffix">{suffix}</span>}
        </StyledOption>
    );
});
