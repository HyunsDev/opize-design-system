import { forwardRef } from 'react';
import { StyledRadio, StyledRadioContainer, StyledRadioLabel } from './Radio.style';
import { useRadioContext } from './Radio.context';
import { useDOMRef } from '../../../utils/dom';

export type RadioProps = React.ComponentPropsWithRef<'input'> & {
    children?: React.ReactNode;
};

export const Radio = forwardRef<HTMLInputElement, RadioProps>((props, ref) => {
    const domRef = useDOMRef(ref);
    const { children, name, disabled = false, ...rest } = props;
    const { name: contextName, disabled: contextDisabled } = useRadioContext();

    return (
        <StyledRadioContainer $disabled={contextDisabled || disabled}>
            <StyledRadio
                ref={domRef}
                type="radio"
                disabled={contextDisabled || disabled}
                name={contextName || name}
                {...rest}
            />
            {children && (
                <StyledRadioLabel onClick={() => domRef.current?.click()}>
                    {children}
                </StyledRadioLabel>
            )}
        </StyledRadioContainer>
    );
});
