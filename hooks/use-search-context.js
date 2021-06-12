import { createContext, useContext, useState } from 'react';

const SearchContext = createContext({
    searchQuery: '',
    setSearchQuery: () => {},
});

const useSearchContext = () => useContext(SearchContext);
const useInitialSearchContext = () => {
    const [searchQuery, setSearchQuery] = useState('');
    return {searchQuery, setSearchQuery};
};

export { SearchContext, useInitialSearchContext };
export default useSearchContext;