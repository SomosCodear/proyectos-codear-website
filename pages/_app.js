import { ChakraProvider } from '@chakra-ui/react';

import theme from '../components/theme';
import { SearchContext, useInitialSearchContext } from '../hooks/use-search-context';

function MyApp({ Component, pageProps }) {
  const initialSearchContext = useInitialSearchContext();
  return (
    <SearchContext.Provider value={initialSearchContext}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </SearchContext.Provider>
  );
}

export default MyApp
