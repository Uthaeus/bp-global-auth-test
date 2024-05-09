import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./components/layouts/root-layout";
import AdminLayout from "./components/layouts/admin-layout";
import Home from "./pages/home";
import Admin from "./components/admin/admin";
import CreateUser from "./components/admin/create-user";
import EditUser from "./components/admin/edit-user";
import UserDetail from "./components/admin/user-detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
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
      },
      {
        path: "/admin/users/:id",
        element: <UserDetail />,
      },
      {
        path: "/admin/users/:id/edit",
        element: <EditUser />,
      }
    ],
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App;
