import { Button } from '@chakra-ui/react';
 
const SkillTag = ({ children, ...props }) => <>
    <Button as="a" variant="tag" {...props}>{children}</Button>
</>;

export default SkillTag;