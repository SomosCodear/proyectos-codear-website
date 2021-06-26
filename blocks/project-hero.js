import { SimpleGrid, Heading, Box } from '@chakra-ui/react';

const ProjectHero = ({ project }) => <SimpleGrid as="header" placeItems="center" marginX={-12} bgImage={project.image} bgColor="codear.shuttleGray">
    <Box mx="auto" my={24} width="75%">
        <Box bgColor="black" color="white" width="fit-content" mx="auto" zIndex={10} mb={-7} py={4} px={6} position="relative" fontSize="2xl" fontWeight="bold">
            ¡{project.organization.name} te necesita!
        </Box>
        <Heading as="h1" variant="projectTitle">{project.title}</Heading>
    </Box>
</SimpleGrid>;

export default ProjectHero;