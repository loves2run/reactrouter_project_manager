import { Form, useLoaderData, useNavigation } from "react-router";
import { getProject } from "../data/projects";

//Project loader- gets single project by ID
export async function projectLoader({ params }) {
    const project = await getProject(params.projectId);
    if(!project) {
        throw new Response("Project not found", {
            status: 404,
            statusText: "Project not found"
        });
    }
    return project;
}

export default function ProjectDisplay(){
    const project = useLoaderData();
    const navigation = useNavigation();

    const styles = {
        formField: "rounded-sm px-2.5 py-1 border-2 border-gray-200",
        formButton: "text-[1rem]",
        saveButton: "text-white bg-[#3992ff] hover:bg-white hover:text-[#3992ff] hover:border-gray-300 focus:bg-white focus:text-text-[#3992ff] focus:border-gray-300 active:bg-white active: text-text-[#3992ff] active:border-gray-300",
        hoverFocusActive: "hover:border-sky-500 focus:border-sky-500 active:border-sky-500",
        displayDiv: "flex flex-col justify-center w-full p-5 border-2 border-gray-300 rounded-sm",
        loading: "opacity-25 transition-opacity duration-200",
    }

    return (
        <div className={`${navigation.state ==='loading' ? styles.loading : ''} ${styles.displayDiv}`}>
            <h1 className="font-bold text-lg">{project.projectName}</h1>
            <p>{project.description}</p>
            <p>{project.dueDate}</p>
            <div className="flex justify-end gap-2">
                <Form action="edit">
                    <button 
                        className={`${styles.formButton} ${styles.formField} bg-gray-300 hover:border-sky-500`}
                        type="submit"
                    >
                        Edit
                    </button>
                </Form>
                <Form 
                    action="destroy"
                    method="post"
                    onSubmit={(event) => {
                        if (
                            !confirm(
                                "Please confirm you want to delete this project."
                            )
                        ) {
                            event.preventDefault();
                        }
                    }}
                >
                    <button 
                        className={`${styles.formButton} ${styles.formField} bg-red-600 text-white hover:bg-white hover:text-red-600 hover:border-red-600`}
                        type="submit">Delete</button>
                </Form>
            </div>
        </div>
    )
}