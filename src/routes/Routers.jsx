
import {
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import Home from "../Layout/Home";
import CategoryNews from "../pages/CategoryNews";
import AuthLayOut from "../Layout/AuthLayOut";
import Login from "../pages/Login";
import Ragister from "../pages/Ragister";
import NewsDetails from "../pages/NewsDetails";
import PrivateRoute from "./PrivateRoute";


const Routers = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path:"",
        element: <Navigate to={'/category/01'}></Navigate>
      },
      {
        path:"/category/:id",
        element: <CategoryNews/>,
        loader:({params})=>
          fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
       
      }
    ]
  },
  {
    path: "/news/:id",
    element: <PrivateRoute>
      <NewsDetails/>
    </PrivateRoute>,
    loader:({params})=>
      fetch(`https://openapi.programming-hero.com/api/news/${params.id}`),
    
  },
  {
    path: "/auth",
    element: <AuthLayOut/>,
    children:[
      {
        path:"/auth/login",
        element: <Login/>
      },
      {
        path:"/auth/signup",
        element: <Ragister/>
      },
    ]
  },
  {
    path: "*",
    element: <div>Error</div>,
  },
]);

export default Routers;