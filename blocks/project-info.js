import { Box } from '@chakra-ui/react';

import MarkdownText from '../components/markdown-text';
import Section from '../components/section';
import SkillList from '../components/skill-list';

const ProjectInfo = ({ project }) => <Box mx="auto" my={24} width="75%">
    <MarkdownText>{project.description}</MarkdownText>
    <Section title="Habilidades">
        <SkillList skills={project.skills} />
    </Section>
</Box>;

export default ProjectInfo;