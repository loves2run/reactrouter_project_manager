import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router-dom';
import './index.css'
import App from './components/App.jsx'
import ErrorPage from './components/mainContent/Error-Page.jsx';
import Index from './components/mainContent/Index.jsx';
import ProjectDisplay from './components/mainContent/ProjectDisplay.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: Index,
      }, 
      {
        path: 'projects/:projectId',
        Component: ProjectDisplay,
      },
    ],
  },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>

)

