import Layout from "./layout/layout";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from "./pages/Login";
import SignUpPage from "./pages/SignUp";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
      // children: [
      //   {
      //     path: "/",
      //     element: <HomePage />
      //   },
      //   {
      //     path: "/list",
      //     element: <ListPage />,
      //     loader: listPageLoader,
      //   },
      //   {
      //     path: "/post/:id",
      //     element: <SinglePage />,
      //     loader: singlePageLoader,
      //   },
      //   {
      //     path: "/login",
      //     element: <Login />
      //   },
      //   {
      //     path: "/register",
      //     element: <Register />
      //   }
      // ]
    },
    {
      path: "/register",
      element: <SignUpPage />,
    },
    {
      path: "/:username",
      element: <Layout />,
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}