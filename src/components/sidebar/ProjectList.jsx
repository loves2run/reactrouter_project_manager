
export default function ProjectList() {

    return(
        <ul className="flex flex-col justify-center items-center gap-1 mt-1.5">
            <li>
                <a href={`/projects/1`}>Project Manager App</a>
            </li>
            <li>
                <a href={`/projects/2`}>Update Linkedin</a>
            </li>
            <li>
            <a href={`/projects/3`}>Bullee Excavation Website</a>
        </li>
    </ul>
    )
}