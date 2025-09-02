import { 
    NavLink,
    useParams, 
} 
from 'react-router';
import projectsData from '../../data/projects';
import { getProject } from '../../data/projects';

export default function ProjectList() {
    const params = useParams();
    const projectId = params.id;
    const project = getProject(projectId);

    const activeStyle = ({isActive}) => isActive ? 'text-sky-500' : undefined;
    return(
        <ul className="flex flex-col justify-center items-center gap-1 mt-1.5">
           {projectsData.map((project) => (
            <li key={project.id}>
                <NavLink
                    to={`projects/${project.id}`}
                    className={activeStyle}
                >
                    {project.projectName}
                </NavLink>
            </li>
           ))}
        </ul>
    )
}