export type SlideBoxProps = {
    now: number;
    setNow: (now: number) => void;
} & React.ComponentPropsWithRef<'div'>;

export type SlideBoxPageProps = {
    index: number;
} & React.ComponentPropsWithRef<'div'>;
