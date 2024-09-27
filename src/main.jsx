import ReactDOM from 'react-dom/client'
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { StrictMode } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App.jsx';
import Error from './components/Error.jsx';
import Resume from './components/Resume.jsx';
import Contact from './components/Contact.jsx';
import About from './components/AboutMe.jsx';
import Portfolio from './components/Portfolio.jsx';
import Footer from './components/Footer.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path: '/resume',
        element: <Resume />,
      },
      {
        path: '/portfolio',
        element: <Portfolio />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>
);

