import { Box, SimpleGrid } from '@chakra-ui/react';

import Header from './header';

const Layout = ({ headerOptions, children }) => <>
    <Box paddingX={12} paddingY={8}>
        <Header mb={8} {...headerOptions} />
        <SimpleGrid autoFlow="row" gap={8} >
            {children}
        </SimpleGrid>
    </Box>
</>;

export default Layout;