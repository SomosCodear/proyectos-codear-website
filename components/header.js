import { SimpleGrid, Box, Image, Button } from '@chakra-ui/react';
import SearchBox from './search-box';

const Header = ({
    showSearch = true,
    showCallToAction = true,
    searchText = '',
    setSearchText = () => {},
    ...props
}) => (
    <SimpleGrid 
        as="header"
        columns={[1, 3]}
        autoFlow={['row', 'column']}
        justifyContent="space-between"
        alignItems="center"
        {...props}
    >
        <a href="/"><Image src="/images/logo-codear.svg" /></a>
        {showSearch ? <Box>
            <SearchBox 
                searchText={searchText}
                setSearchText={setSearchText}
            />
        </Box> : ''}
        {showCallToAction ? <Button justifySelf="flex-end" as="a" href="#" variant="outline">
            Abrí tu convocatoria
        </Button> : ''}
    </SimpleGrid>
);

export default Header;