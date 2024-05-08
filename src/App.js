import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./components/layouts/root-layout";
import AdminLayout from "./components/layouts/admin-layout";
import Home from "./pages/home";
import Admin from "./components/admin/admin";

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
    ],
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App;
