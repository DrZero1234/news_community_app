import { createBrowserRouter } from "react-router-dom";
import { Overlay } from "../pages/Overlay";
import ErrorPage from "../pages/ErrorPage";
import { Home } from "./Home";
import { Trending } from "./Trending";
import { RecentPosts } from "./RecentPosts";
import { Blog } from "./Blog";
import { ActiveUsers } from "./ActiveUsers";
import { About } from "./About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Overlay />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Home /> },
          {
            path: "/trending",
            element: <Trending />,
          },
          {
            path: "/recent_posts",
            element: <RecentPosts />,
          },
          {
            path: "/blog",
            element: <Blog />,
          },
          {
            path: "/active_users",
            element: <ActiveUsers />,
          },
          {
            path: "/about",
            element: <About />,
          },
        ],
      },
    ],
  },
]);
