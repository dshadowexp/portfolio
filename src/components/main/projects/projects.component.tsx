import Project, { IProject } from './project.component';

const projects: IProject[] = [
     {
        title: 'LastMile Project',
        description: 'This takes into account the best delivery service in the country for a number of ecommerce shops and individual courier riders',
        tools: ['nodejs', 'react', 'typescript', 'mongodb'],
        githubLink: ''
    },
    {
        title: 'Soccer ManagerBELite',
        description: 'Backend API built in node js with all the features that is necessary to keep the app from running',
        tools: ['nodejs', 'javascript', 'mongodb'],
        githubLink: ''
    },
    {
        title: 'Azure Reset Redemption',
        description: 'At an internship in Microsoft, I worked on the Azure AD B2B REST API that led to jump of user usage of the feature',
        tools: ['c-plus-plus'],
        githubLink: ''
    },
    {
        title: 'Image Recoginition',
        description: 'Using openCV and scikit-learn in python, I find the number of trees in images arranged in hedge-rows',
        tools: ['python'],
        githubLink: ''
    },
] 

export default function Projects() {

    return (<section id="projects" className='projects'>
        <h2>Noteworthy Projects</h2>
        <ul className='projects__group'>
            {projects.map((project, index) => 
                <li key={index} className='project'>
                    <Project project={project} />
                </li>
            )}
        </ul>
    </section>);
}