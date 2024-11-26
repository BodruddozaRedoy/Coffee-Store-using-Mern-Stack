import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter} from 'react-router-dom'
import App from './App'
import AddCoffee from './Components/AddCoffee'
import UpdateCoffee from './Components/UpdateCoffee'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
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
  </StrictMode>,
)
