import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router-dom';
import './index.css'
import App from './components/App.jsx'
import ErrorPage from './components/mainContent/Error-Page.jsx';
import Index from './components/mainContent/Index.jsx';
import ProjectDisplay from './routes/ProjectDisplay.jsx';
import { getProjects, getProject } from './data/projects.js';

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    errorElement: <ErrorPage />,
    loader: getProjects,
    children: [
      {
        index: true,
        Component: Index,
      }, 
      {
        path: 'projects/:projectId',
        Component: ProjectDisplay,
        loader: async ({ params }) => {
          const project = await getProject(params.projectId);
          if (!project) {
            throw new Response("Project not found", { 
              status: 404,
              statusText: "Project not found"
             });
          }
          return project;
        }
      },
    ],
  },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>

)

