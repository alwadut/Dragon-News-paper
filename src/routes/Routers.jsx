
import {
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import Home from "../Layout/Home";
import CategoryNews from "../pages/CategoryNews";


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
    path: "/news",
    element: <div>News </div>,
  },
  {
    path: "/auth",
    element: <div>Auth</div>,
  },
  {
    path: "*",
    element: <div>Error</div>,
  },
]);

export default Routers;