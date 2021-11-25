export type Tuple<T, N extends number> = N extends N
  ? number extends N
    ? T[]
    : TupleOf<T, N, []>
  : never;
type TupleOf<T, N extends number, R extends unknown[]> = R['length'] extends N
  ? R
  : TupleOf<T, N, [T, ...R]>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type As<T = any> = React.ElementType<T>;

export type PropsWithAs<T extends As, P> = Omit<
  React.ComponentPropsWithoutRef<T>,
  'as' | keyof P
> & {
  as?: As;
} & P;

export type ComponentWithAs<P, DefaultType extends As> = {
  <T extends As>(props: PropsWithAs<T, P> & { as: T }): JSX.Element;
  (props: PropsWithAs<DefaultType, P>): JSX.Element;
};

export type ComponentProps<C extends React.ElementType, P> = Omit<
  React.ComponentPropsWithRef<C>,
  keyof P
> & {
  /** HTML tag or component that will be used as root element */
  as?: C;
} & P;
