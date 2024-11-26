import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import App from './App'
import AddCoffee from './Components/AddCoffee'
import UpdateCoffee from './Components/UpdateCoffee'
import HomePage from './Pages/HomePage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: '/',
        element: <HomePage/>
      }
    ]
  },
  {
    path: '/add-coffee',
    element: <AddCoffee/>
  },
  {
    path: '/update-coffee',
    element: <UpdateCoffee/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>

    </RouterProvider>
  </StrictMode>,
)
