import { Box } from '@chakra-ui/react';

import Navbar from 'components/navbar'

const PageContent: React.FC = ({ children }) => {
  return (
    <Box minHeight='100vh' width='80%' margin='0 auto' flexDirection='column' display='flex'>
      {/* <Navbar /> */}
      {children}
    </Box>
  )
}

export default PageContent;
