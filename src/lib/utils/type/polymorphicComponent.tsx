// 기존 작성한 ViewProps에서 as를 분리한다.
type AsProp<T extends React.ElementType> = {
    as?: T;
};

// 직관적인 이름을 붙여서 타입으로 만들어준다.
export type PolymorphicRef<T extends React.ElementType> = React.ComponentPropsWithRef<T>['ref'];

// 결합 타입을 만든다.
export type PolymorphicComponentProps<
    T extends React.ElementType,
    Props = Record<string, unknown>
> = AsProp<T> &
    React.ComponentPropsWithoutRef<T> &
    Props & {
        ref?: PolymorphicRef<T>;
    };
