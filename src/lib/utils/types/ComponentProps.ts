export type ComponentProps<T> = T extends React.ComponentType<React.PropsWithChildren<infer Props>>
  ? // eslint-disable-next-line @typescript-eslint/ban-types
    Props extends object
    ? Props
    : never
  : never
