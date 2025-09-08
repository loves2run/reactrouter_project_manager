import { redirect } from 'react-router';
import { deleteProject } from '../data/projects';

export async function destroyAction({ params }) {
    await deleteProject(params.projectId);
    return redirect('/');
}