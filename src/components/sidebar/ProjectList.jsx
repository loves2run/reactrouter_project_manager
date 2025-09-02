import { 
    NavLink,
    useLoaderData,
} 
from 'react-router';


export default function ProjectList() {
    const projects = useLoaderData();
    const activeStyle = ({isActive}) => isActive ? 'text-sky-500' : undefined;

    return(
        <ul className="flex flex-col justify-center items-center gap-1 mt-1.5">
           {projects.map((project) => (
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