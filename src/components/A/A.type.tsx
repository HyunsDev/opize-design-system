import { PolymorphicProps } from '../../utils/Polymorphic';

type OriginalAProps = {
    children?: React.ReactNode;
    isShowIcon?: boolean;
    color?: string;
};

export type AProps<T extends React.ElementType = 'a'> = PolymorphicProps<T, OriginalAProps>;
