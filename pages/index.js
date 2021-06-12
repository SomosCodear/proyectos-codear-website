import Layout from '../components/layout';
import { Box } from '@chakra-ui/react';
import useSearchContext from '../hooks/use-search-context';
import { useEffect } from 'react';

const IndexPage = () => {
  const {searchQuery} = useSearchContext();

  useEffect(() => {
    console.log(searchQuery);
  }, [searchQuery]);

  return (
    <Layout>
      <Box>
        Buscá por habilidades
      </Box>
      <Box>
        [Lista de tags]
      </Box>
      <Box>
        Todas las convocatorias
        [filter]
      </Box>
      <Box>
        [Lista de convocatorias]
      </Box>
    </Layout>
  )
};

export default IndexPage;