import styled, { system, SystemProps } from '@xstyled/styled-components';
import { ComponentProps } from '@lib/types/utility-types';

export interface BoxProps extends SystemProps {
  color?: React.HTMLAttributes<HTMLDivElement>['color'];
  minW?: string | Record<string, string>;
}

const CustomBox = styled.div.withConfig({
  shouldForwardProp: (prop, validate) =>
    validate(prop) && !system.meta.props.includes(prop),
})<BoxProps>`
  ${system}
`;

const Box = <C extends React.ElementType = 'div'>(
  props: ComponentProps<C, BoxProps>
) => {
  const { children, ...rest } = props;
  return <CustomBox {...rest}>{children}</CustomBox>;
};

export default Box;
