import { Box } from '@chakra-ui/react';
import { useEffect } from 'react';

import Layout from '../components/layout';
import SearchBySkills from '../blocks/search-by-skills';
import ProjectList from '../blocks/project-list';

import useSearchContext from '../hooks/use-search-context';

const IndexPage = () => {
  const {searchQuery} = useSearchContext();

  useEffect(() => {
    console.log(searchQuery);
  }, [searchQuery]);

  return (
    <Layout>
      <SearchBySkills />
      <ProjectList />
    </Layout>
  )
};

export default IndexPage;