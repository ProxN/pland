import styled, {
  css,
  backgroundColor,
  BackgroundColorProps,
} from '@xstyled/styled-components';

export interface AvatarStyleProps extends BackgroundColorProps {
  /**  avatar size */
  size?: 'sm' | 'md' | 'lg';

  /** if "true",set avatar border radius to 50% */
  isCircle?: boolean;
}

const sizes = {
  sm: {
    height: '2.4rem',
    width: '2.4rem',
  },
  md: {
    height: '3.4rem',
    width: '3.4rem',
  },
  lg: {
    height: '5.6rem',
    width: '5.6rem',
  },
};

export const AvatarContaienr = styled.div<AvatarStyleProps>`
  ${({ size }) => size && { ...sizes[size] }};
  ${({ isCircle }) => isCircle && css({ borderRadius: '50%' })};
  ${backgroundColor};
  overflow: hidden;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  font-weight: 500;

  cursor: pointer;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
