import { Box } from '@chakra-ui/react';

import Header from './header';

const Layout = ({ headerOptions, children }) => <>
    <Box paddingX={12} paddingY={8}>
        <Header {...headerOptions} />
        <main>
            {children}
        </main>
    </Box>
</>;

export default Layout;