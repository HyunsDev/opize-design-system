type AsProp<T extends React.ElementType> = {
    as?: T;
};

export type PolymorphicRef<T extends React.ElementType> = React.ComponentPropsWithRef<T>['ref'];

export type PolymorphicProps<
    T extends React.ElementType,
    Props = Record<string, unknown>
> = AsProp<T> &
    React.ComponentPropsWithoutRef<T> &
    Props & {
        ref?: PolymorphicRef<T>;
    };
