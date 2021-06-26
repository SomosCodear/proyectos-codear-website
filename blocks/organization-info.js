import { SimpleGrid, Image, Box, Text } from '@chakra-ui/react';

import Section from '../components/section';
import SocialMediaLink from '../components/social-media-link';

const OrganizationInfo = ({ organization }) => <Section title="Sobre la organización">
    <SimpleGrid columns="1fr 2fr">
        {/* TODO: Use PNG images */}
        <Image src={`/images/organizations/${organization.id}.svg`} />
        <Box>
            <Text>{organization.description}</Text>
            {Object.entries(organization.links).map(
                ([provider, handler]) => <SocialMediaLink provider={provider} handler={handler} />
            )}
        </Box>
    </SimpleGrid>
</Section>

export default OrganizationInfo;