import { Box, Heading } from '@chakra-ui/react';

const Section = ({ title, children }) => <Box>
    <Heading mb={3} as="h2" variant="sectionTitle">{title}</Heading>
    {children}
</Box>;

export default Section;