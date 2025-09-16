import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../Layout/Home";
import CategoryNews from "../pages/CategoryNews";
import AuthLayOut from "../Layout/AuthLayOut";
import Login from "../pages/Login";
import Ragister from "../pages/Ragister";
import NewsDetails from "../pages/NewsDetails";
import PrivateRoute from "./PrivateRoute";
import Loading from "../pages/Loading";
import LatestNews from "../compoments/LatestNews";

const Routers = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "",
        element: <Navigate to={"/category/01"}></Navigate>,
      },
      {
        path: "/latest:category_id",
        element: <LatestNews />,
        loader:  ({params}) => {
          return fetch(
            `https://openapi.programming-hero.com/api/news/category/${params.category_id}`
          );
          
        },
      }, 
      {
        path: "/category/:id",
        element: <CategoryNews />,
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/news/category/${params.id}`
          ),
        hydrateFallbackElement: <Loading></Loading>,
      },
    ],
  },
  {
    path: "/news/:id",
    element: (
      <PrivateRoute>
        <NewsDetails />
      </PrivateRoute>
    ),
    loader: ({ params }) =>
      fetch(`https://openapi.programming-hero.com/api/news/${params.id}`),
    hydrateFallbackElement: <Loading></Loading>,
  },
  {
    path: "/auth",
    element: <AuthLayOut />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/signup",
        element: <Ragister />,
      },
    ],
  },
  {
    path: "*",
    element: <div>Error</div>,
  },
]);

export default Routers;
