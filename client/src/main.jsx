import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import App from './App'
import AddCoffee from './Components/AddCoffee'
import UpdateCoffee from './Components/UpdateCoffee'
import HomePage from './Pages/HomePage'
import CoffeeDetails from './Components/CoffeeDetails'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: '/',
        element: <HomePage/>,
        loader: () => fetch("http://localhost:5000/coffee")
      }
    ]
  },
  {
    path: '/add-coffee',
    element: <AddCoffee/>
  },
  {
    path: '/update-coffee/:id',
    element: <UpdateCoffee/>,
    loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
  },
  {
    path: '/coffee-details/:id',
    element: <CoffeeDetails/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>

    </RouterProvider>
  </StrictMode>,
)
