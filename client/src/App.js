import { useState, createContext, useEffect } from "react";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import BlogContentPage from "./pages/blogContent/blogContent.page";
import LoginPage from "./pages/login/login.page";
import Home from "./pages/home/home.page";
import Header from "./components/header/header.component";
import "./globalStyles/reset.css";
import "./globalStyles/variables.css";

export const MyContext = createContext();

export default function App() {
  const [user, setUser] = useState({ username: "", password: "" });
  useEffect(() => {
    const isLoggedIn = document.cookie.includes("user=");
    if (isLoggedIn) {
      setUser({ username: document.cookie.split("=")[1] });
    }
  }, []);
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

  return (
    <MyContext.Provider value={{ user, setUser }}>
      <RouterProvider router={router}></RouterProvider>
    </MyContext.Provider>
  );
}
