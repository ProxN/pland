import React from 'react';
import { ComponentWithAs, PropsWithAs, As } from '../types/utility-types';

const forwardRef = <P, C extends React.ElementType>(
  component: React.ForwardRefRenderFunction<
    unknown,
    PropsWithAs<C, P> & { as?: As }
  >
) => {
  // eslint-disable-next-line prettier/prettier
  return React.forwardRef(component) as unknown as ComponentWithAs<P, C>;
};

export { forwardRef };
