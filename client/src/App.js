import BlogContentPage from "./pages/blogContent/blogContent.page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/login/login.page";
import Home from "./pages/home/home.page";
import "./globalStyles/reset.css";
import "./globalStyles/variables.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/api/blogcontent",
      element: <BlogContentPage />,
    },
    {
      path: "/api/login",
      element: <LoginPage />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
