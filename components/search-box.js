import { Input, Flex } from '@chakra-ui/react';
import { SearchIcon } from './icons';
import useSearchContext from '../hooks/use-search-context';

const SearchBox = () => {
    const { searchQuery, setSearchQuery } = useSearchContext();

    return <Flex alignItems="center">
        <SearchIcon boxSize={8} mr={4} />
        <Input 
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            variant="flushed" 
            placeholder="Conozco sobre..." 
            focusBorderColor="codear.disco"
            fontSize="2xl"
        />
    </Flex>;
};

export default SearchBox;