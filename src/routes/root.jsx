// routes/root.js
import { redirect } from 'react-router';
import Sidebar from '../components/sidebar/Sidebar.jsx';
import MainContent from '../components/mainContent/MainContent.jsx';
import { getProjects, createProject } from '../data/projects.js';

// Root loader - gets all projects for the sidebar
export async function rootLoader() {
    return await getProjects();
}

// Root action - handles creating new projects
export async function rootAction() {
    const newProject = await createProject();
    return redirect(`/projects/${newProject.id}/edit`);
}

export default function Root() {

    return (
        <div className="flex w-screen h-screen items">
                <Sidebar />
                <MainContent />
        </div>
    );
}