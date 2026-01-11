import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import {createBrowserRouter} from 'react-router-dom'
import WebLanding from './components/WebLanding/WebLanding.jsx'
import Mursalin from './components/Mursalin/Mursalin.jsx'
import Skills from "./components/Skills/Skills.jsx"
import Contact from "./components/Contact/Contact.jsx"
import Projects from './components/Projects/Projects.jsx'
import About from './components/About/About.jsx'
import Portfolio from './components/Projects/Portfolio.jsx'
import Bariwala from './components/Projects/Bariwala.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <WebLanding />,
  },
  {
    path:'mursalin',
    element:<Mursalin />
  },
  {
    path:'skills',
    element:<Skills/>
  },
  {
    path:'contact',
    element:<Contact/>
  },
  {
    path:'projects',
    element:<Projects/>
  },
  // Make Portfolio a separate route, not a child
  {
    path:'projects/portfolio',
    element:<Portfolio/>
  },
  {
    path:'projects/bariwala',
    element:<Bariwala/>
  },
  {
    path:'about',
    element:<About/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)