import SkillTag from './skill-tag';

const SkillList = ({ skills }) => skills.map((skill, index) => 
    <SkillTag 
        {...(index !== skills.length + 1 ? { mr: 1 } : {})}
        mb={1}
        key={skill.id || skill}
    >
        {skill.name || skill}
    </SkillTag>
);

export default SkillList;