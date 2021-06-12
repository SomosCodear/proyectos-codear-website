import { Flex } from '@chakra-ui/react';

import skills from '../data/skills.json';
import Section from '../components/section';
import SkillList from '../components/skill-list';

const SearchBySkills = () => <Section title="Buscá por habilidades">
    <Flex>
        <SkillList skills={skills} />
    </Flex>
</Section>;

export default SearchBySkills;