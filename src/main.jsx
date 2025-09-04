import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router';
import './index.css'

import Root, { rootLoader, rootAction} from './routes/root.jsx';
import ErrorPage from './components/mainContent/Error-Page.jsx';
import Index from './routes/Index.jsx';
import ProjectDisplay, { projectLoader } from './routes/ProjectDisplay.jsx';

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
    ],
  },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>

)

