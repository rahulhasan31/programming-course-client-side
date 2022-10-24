import { createBrowserRouter } from "react-router-dom";
import Home from "../Component/Home/Home";
import Login from "../Component/Login/Login";
import Register from "../Component/Login/Register/Register";
import Main from "../Layout/Main";


export const routes= createBrowserRouter([

{
    path:'/',
    element: <Main></Main>,
    children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            
        }
    ]
    
}
])