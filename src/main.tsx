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
    path: 'o-projekte',
    element: <AboutProjectPage />,
  },
  {
    path: 'about-project',
    element: <AboutProjectPage />,
  },
  {
    path: 'riesitel',
    element: <ResearcherPage />,
  },
  {
    path: 'researcher',
    element: <ResearcherPage />,
  },
  {
    path: 'kontakt',
    element: <ContactPage />,
  },
  {
    path: 'contact',
    element: <ContactPage />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
