import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router';
import './index.css'

import Root, { rootLoader, rootAction} from './routes/root.jsx';
import ErrorPage from './components/mainContent/Error-Page.jsx';
import Index from './routes/Index.jsx';
import ProjectDisplay, { projectLoader } from './routes/ProjectDisplay.jsx';
import AddEditProjectForm, { editProjectLoader, editProjectAction } from './routes/edit.jsx';
import { destroyAction } from './routes/destroy.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        index: true,
        Component: Index,
      }, 
      {
        path: 'projects/:projectId',
        Component: ProjectDisplay,
        loader: projectLoader,
      },
      {
        path: 'projects/:projectId/edit',
        Component: AddEditProjectForm,
        loader: editProjectLoader,
        action: editProjectAction,
      },
      {
        path: 'projects/:projectId/destroy',
        action: destroyAction,
        errorElement: <div>Oops! There was an error.</div>,
      },
    ],
  },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>

)

