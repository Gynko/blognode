import BlogContentPage from "./pages/blogContent/blogContent.page";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import LoginPage from "./pages/login/login.page";
import Home from "./pages/home/home.page";
import "./globalStyles/reset.css";
import "./globalStyles/variables.css";
import Header from "./components/header/header.component";

export default function App() {
  function BasicLayout() {
    return (
      <>
        <Header />
        <Outlet />
      </>
    );
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <BasicLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/blog",
          element: <BlogContentPage />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}
