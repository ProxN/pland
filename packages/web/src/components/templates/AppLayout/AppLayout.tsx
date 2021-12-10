import { Box } from '@components/layout/Box';
import { Header } from './elements/Header';

const AppLayout: React.FC = ({ children }) => {
  return (
    <Box minH='100vh' backgroundColor='gray.0'>
      <Header />
      {children}
    </Box>
  );
};

export default AppLayout;
