import { 
    Form, 
    useLoaderData, 
    redirect, 
} from 'react-router';
import { getProject, updateProject } from '../data/projects.js';

export async function editProjectAction ({ request, params}) {
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    console.log("updates:", updates);
    await updateProject(params.projectId, updates);
    return redirect(`/projects/${params.projectId}`);
}

export async function editProjectLoader({ params }) {
    const project = await updateProject(params.projectId);
    if(!project) {
        throw new Response("Project not found", {
            status: 404,
            statusText: "Project not found"
        });
    }
    return project;
}

const styles = {
    formField: "rounded-sm px-2.5 py-1 border-2 border-gray-200",
    formButton: "text-[1rem]",
    saveButton: "text-white bg-[#3992ff] hover:bg-white hover:text-[#3992ff] hover:border-gray-300 focus:bg-white focus:text-text-[#3992ff] focus:border-gray-300 active:bg-white active: text-text-[#3992ff] active:border-gray-300",
    hoverFocusActive: "hover:border-sky-500 focus:border-sky-500 active:border-sky-500",
    formLabel: "flex flex-col gap-1",
};

export default function AddEditProjectForm() {
    const { project } = useLoaderData();

    return (
        <div className="flex w-full p-5 border-2 border-gray-300 rounded-sm">
            <Form 
                className="flex flex-col w-full p-2"
                method="post"
                id="projectForm"
            >
                <h1 className="font-bold text-lg">Add / Edit Project</h1>
                <div className="mb-1.5">
                    <section>
                        <label 
                            className={`${styles.formLabel} ${styles.hoverFocusActive}`}
                        >
                            Project Name
                            <input  
                                className={`${styles.formField} ${styles.hoverFocusActive}`}
                                type="text"
                                aria-label="Project name"
                                name="projectName"
                            />
                        </label>
                    </section>
                    <section>
                        <label 
                            className={styles.formLabel}
                        >
                            Description
                            <textarea 
                                className={`${styles.formField} ${styles.hoverFocusActive}`}
                                aria-label="Project description"
                                name="description" 
                                cols="10" 
                                rows="3"
                                ></textarea>
                        </label>
                    </section>
                    <section>
                        <label 
                            className={styles.formLabel}
                        >
                            Due Date
                            <input 
                                className={`${styles.formField} ${styles.hoverFocusActive}`}
                                type="date"
                                aria-label="Project due date"
                                name="dueDate"
                            />
                        </label>
                    </section>
                </div>
                <div className="flex justify-end gap-2">
                    <button 
                        className={`${styles.formButton} ${styles.formField} ${styles.hoverFocusActive} bg-gray-300`}
                        type="button"
                    >
                        Cancel
                    </button>
                    <button
                        className={`${styles.formButton} ${styles.formField} ${styles.saveButton}`}
                        type="submit"
                    >
                        Save
                    </button>
                </div>
            </Form>
        </div>
    )
}