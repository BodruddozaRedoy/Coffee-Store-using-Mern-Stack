import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import AddCoffee from "./Components/AddCoffee";
import UpdateCoffee from "./Components/UpdateCoffee";
import HomePage from "./Pages/HomePage";
import CoffeeDetails from "./Components/CoffeeDetails";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { AuthProvider } from "./Context/AuthProvider";
import DisplayUsers from "./Components/DisplayUsers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: () => fetch("https://coffee-store-server-jet-pi.vercel.app/coffee"),
      },
      {
        path: '/users',
        element: <DisplayUsers/>
      }
    ],
  },
  {
    path: "/add-coffee",
    element: <AddCoffee />,
  },
  {
    path: "/update-coffee/:id",
    element: <UpdateCoffee />,
    loader: ({ params }) => fetch(`https://coffee-store-server-jet-pi.vercel.app/coffee/${params.id}`),
  },
  {
    path: "/coffee-details/:id",
    element: <CoffeeDetails />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
