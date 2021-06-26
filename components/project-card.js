import { Box, Image, Heading, Text, SimpleGrid } from '@chakra-ui/react';
import SkillList from './skill-list';
import ProjectLink from './project-link';

const ProjectCard = ({ project }) => (
    <Box
        bg="white"
        border="1px"
        borderRadius="sm"
        borderColor="codear.silverSand"
        filter="drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25))"
    >
        <ProjectLink project={project}>
            <Image src={project.image} />
        </ProjectLink>
        <SimpleGrid autoFlow="row" p={5} gap={5}>
            <ProjectLink project={project}>
                <Heading fontSize="2xl" as="h3">{project.title}</Heading>
            </ProjectLink>
            <Text>{project.summary}</Text>
            <Box>
                <SkillList skills={project.skills} />
            </Box>
        </SimpleGrid>
    </Box>
);

export default ProjectCard;