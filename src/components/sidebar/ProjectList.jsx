import { 
    NavLink,
    useLoaderData,
} 
from 'react-router';


export default function ProjectList() {
    const projects = useLoaderData();

    const styles = {
        navActive: 'bg-blue-600 rounded-md p-1 text-white',
        navPending: 'text-sky-500 hover:bg-gray-300 p-1 rounded-md'
    }

    const activeStyle = ({isActive}) => isActive ? 'bg-blue-600 rounded-md p-1 text-white' : undefined;

    return(
        <ul className="flex flex-col justify-center items-center gap-1 mt-1.5">
           {projects.map((project) => (
            <li key={project.id}>
                <NavLink
                    to={`projects/${project.id}`}
                    className={({ isActive, isPending }) => 
                        isActive
                            ? styles.navActive
                            : isPending
                                ? styles.navPending
                                : 'hover:bg-gray-300 rounded-md p-1'}
                >
                    {project.projectName}
                </NavLink>
            </li>
           ))}
        </ul>
    )
}