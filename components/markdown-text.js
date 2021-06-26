import { Heading, Text } from '@chakra-ui/react';

import Markdown from 'markdown-to-jsx';

const heading = (as) => ({ children }) => <Heading as={as}>{children}</Heading>

const overrides = {
    h1: heading('h1'),
    h2: heading('h2'),
    h3: heading('h3'),
    span: Text,
}

const MarkdownText = ({ children }) => <Markdown options={{ options: { overrides } }}>{children}</Markdown>;

export default MarkdownText;