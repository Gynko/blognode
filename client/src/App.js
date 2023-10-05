import BlogContentPage from "./pages/blogContent/blogContent.page";
import {
  Route,
  Routes,
  Outlet,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from "./pages/login/login.page";
import Home from "./pages/home/home.page";
import "./globalStyles/reset.css";
import "./globalStyles/variables.css";
import Header from "./components/header/header.component";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
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
