export type BadgeColor = 'default' | 'red' | 'blue' | 'green' | 'yellow' | 'violet';
export type BadgeVariant = 'primary' | 'secondary' | 'tertiary';
export type BadgeSize = 'small' | 'medium' | 'large';
export type BadgeProps = {
    children?: React.ReactNode;
    color?: BadgeColor;
    variant?: BadgeVariant;
    size?: BadgeSize;
    dot?: boolean;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
};
