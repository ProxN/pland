import styled, { css } from '@xstyled/styled-components';
import { Button } from '../Button';

export interface IconButtonBaseProps {
  /** if "true",set button border radius to 50% */
  isCircle?: boolean;

  /** Button appearance. */
  vairant?: 'solid' | 'outlink' | 'light';

  /**  button size */
  size?: 'sm' | 'md' | 'lg';
}

const sizes = {
  sm: {
    height: '2.4rem',
    padding: '0',
    width: '2.4rem',
  },
  md: {
    height: '3.2rem',
    padding: '.4rem 0',
    width: '3.2rem',
  },
  lg: {
    height: '4rem',
    padding: '.6rem 0rem',
    width: '4rem',
    fontSize: '2rem',
  },
};

export const StyledButton = styled(Button)<IconButtonBaseProps>`
  ${({ size }) => size && { ...sizes[size] }};
  ${({ isCircle }) => isCircle && css({ borderRadius: '50%' })}
`;
