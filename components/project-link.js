import { dasherize } from 'ember-cli-string-utils';

const ProjectLink = ({ project, children }) => {
    const link = `/convocatoria/${dasherize(project.title)}`;
    return <a href={link}>{children}</a>
};

export default ProjectLink;
