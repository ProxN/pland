import styled from '@xstyled/styled-components';
import { Box, BoxProps } from '../Box';

const FlexBox = styled(Box)`
  display: flex;
`;

const Flex: React.FC<BoxProps> = (props) => {
  return <FlexBox {...props} />;
};

export default Flex;
