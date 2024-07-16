import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import AboutProjectPage from './AboutProjectPage.tsx'
import ResearcherPage from './ResearcherPage.tsx'
import ContactPage from './ContactPage.tsx'
import './index.css'
import './i18n'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'en',
    element: <App />,
  },
  {
    path: 'o-projekte',
    element: <AboutProjectPage />,
  },
  {
    path: 'en/about-project',
    element: <AboutProjectPage />,
  },
  {
    path: 'riesitel',
    element: <ResearcherPage />,
  },
  {
    path: 'en/researcher',
    element: <ResearcherPage />,
  },
  {
    path: 'kontakt',
    element: <ContactPage />,
  },
  {
    path: 'en/contact',
    element: <ContactPage />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
