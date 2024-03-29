import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "./context/authProvider";

// Layout
import RootLayout from "./layouts/RootLayout";

// Pages
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import AboutUs from "./pages/AboutUs";
import UserProfile from "./pages/UserProfile";
import Homepage from "./pages/Homepage";
import Posts from "./pages/Posts";
import Post from "./pages/Post";
import NotFound from "./pages/NotFound";
import AccessDenied from "./pages/AccessDenied";

const Routes = () => {
  const { token } = useAuth();

  const routesForPublic = [
    {
      path: "/about-us",
      element: <AboutUs />,
    },
    {
      path: "/posts",
      element: <Posts />,
    },
    {
      path: "/posts/:post_id",
      element: <Post />,
    },
  ];

  const routesForAuthenticatedOnly = [
    {
      path: "/user-profile",
      element: <UserProfile />,
    },
  ];

  const routesForNotAuthenticatedOnly = [
    {
      path: "/sign-up",
      element: <SignUp />,
    },
    { path: "/login", element: <Login /> },
  ];

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: token ? <NotFound /> : <AccessDenied />,
      children: [
        { index: true, element: <Homepage /> },
        ...(!token ? routesForNotAuthenticatedOnly : []),
        ...(token ? routesForAuthenticatedOnly : []),
        ...routesForPublic,
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
