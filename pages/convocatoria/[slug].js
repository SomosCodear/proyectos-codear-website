import projects from '../../data/projects.json';
import organizations from '../../data/organizations.json';
import skills from '../../data/skills.json';

import { dasherize } from 'ember-cli-string-utils';

import Layout from '../../components/layout';

import ProjectHero from '../../blocks/project-hero';
import ProjectInfo from '../../blocks/project-info';
import OrganizationInfo from '../../blocks/organization-info';

const ProjectPage = ({ project }) => {
    return <Layout>
        <ProjectHero project={project} />
        <ProjectInfo project={project} />
        <OrganizationInfo organization={project.organization} />
    </Layout>;
};

const getStaticProps = async ({ params: { slug } }) => {
    const project = projects.find(thisProject => dasherize(thisProject.title) === slug);
    const organization = organizations.find(thisOrganization => thisOrganization.id === project.organization);
    const projectSkills = skills.filter(thisSkill => project.skills.includes(thisSkill.id));

    project.organization = organization;
    project.skills = projectSkills;

    return {
        props: {
            project
        },
    };
};

const getStaticPaths = async () => ({
    paths: projects.map(thisProject => ({
        params: {
            slug: dasherize(thisProject.title),
        }
    })),
    fallback: false,
});

export { getStaticProps, getStaticPaths };

export default ProjectPage;