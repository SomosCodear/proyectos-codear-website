import { SimpleGrid } from '@chakra-ui/react';

import skills from '../data/skills.json';
import projects from '../data/projects.json';
import organizations from '../data/organizations.json';

import Section from '../components/section';
import ProjectCard from '../components/project-card';

const ProjectList = () => <Section title="Todas las convocatorias">
    <SimpleGrid
        columns={[1, 2, 3]}
        gap={5}
    >
        {projects.map(project => <ProjectCard project={project}></ProjectCard>)}
    </SimpleGrid>
</Section>

export default ProjectList;