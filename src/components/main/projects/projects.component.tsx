import Project from './project.component';

export default function Projects() {

    return (<section className='projects'>
        <h2>Noteworthy Projects</h2>
        <ul>
            <li className='project'>
                <Project />
            </li>
            <li className='project'>
                <Project />
            </li>
        </ul>
    </section>);
}