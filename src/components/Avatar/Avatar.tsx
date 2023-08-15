import { forwardRef } from 'react';
import { AvatarProps } from './Avatar.type';
import { StyledAvatar, StyledAvatarImage } from './Avatar.style';
import UserCircle from './user-circle.svg';

export const Avatar = forwardRef<HTMLSpanElement, AvatarProps>((props, ref) => {
    const { src, name, size = '32px', disabled = false, ...otherProps } = props;

    return (
        <StyledAvatar
            ref={ref}
            $size={size}
            $disabled={disabled}
            {...otherProps}
        >
            <StyledAvatarImage
                src={src}
                alt={name}
                onError={(e) => (e.currentTarget.src = UserCircle)}
            />
        </StyledAvatar>
    );
});
