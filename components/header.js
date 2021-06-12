import { SimpleGrid, Box, Image, Button } from '@chakra-ui/react';
import SearchBox from './search-box';

const Header = ({
    showSearch = true,
    showCallToAction = true,
    searchText = '',
    setSearchText = () => {}
}) => (
    <SimpleGrid 
        as="header"
        columns={[1, 3]}
        autoFlow={['row', 'column']}
        justifyContent="space-between"
        alignItems="center"
    >
        <Image src="/images/logo-codear.svg" />
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