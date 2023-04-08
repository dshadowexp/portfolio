export interface IProject {
    title: string;
    description: string;
    tools: string[];
    githubLink?: string;
    externalLink?: string;
}

interface ProjectProp {
    project: IProject
}

export default function Project({ project }: ProjectProp) {
    return (<div className="project__inner">
        <div>        
            <div className="project__top">
                <div style={{ color: "#37c0ba"}}>
                    <i className='bx bx-folder bx-md'></i>
                </div>
                <div>
                    <a href={project.githubLink}><i className='bx bxl-git bx-sm'></i></a>
                    <a href={project.externalLink}><i className='bx bx-link bx-sm'></i></a>
                </div>
            </div>
            <h3 className="project__title">{ project.title }</h3>
            <div className="project__description">
                <p>{ project.description }</p>
            </div>
        </div>
        <div>
            <ul className="project__bottom">
                {
                    project.tools.map((tool, index) => 
                        <li key={index}><i className={`bx bxl-${tool} bx-sm`}></i></li>
                    )
                }
            </ul>
        </div>
    </div>);
}