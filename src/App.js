import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./components/layouts/root-layout";
import AdminLayout from "./components/layouts/admin-layout";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Login from "./components/auth/login";
import Admin from "./components/admin/admin";
import CreateUser from "./users/create-user";
import EditUser from "./users/edit-user";
import UserDetail from "./users/user-detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/users/:id",
        element: <UserDetail />,
      },
      {
        path: "/users/:id/edit",
        element: <EditUser />,
      }
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Admin />,
      },
      {
        path: "/admin/users/create",
        element: <CreateUser />,
      }
    ],
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App;
