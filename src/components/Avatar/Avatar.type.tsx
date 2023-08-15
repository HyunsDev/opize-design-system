export interface AvatarProps extends React.ComponentPropsWithRef<'div'> {
    src?: string;
    name?: string;
    size?: string;
    disabled?: boolean;
}
