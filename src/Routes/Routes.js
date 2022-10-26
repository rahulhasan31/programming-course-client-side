import { createBrowserRouter } from "react-router-dom";
import Home from "../Component/Home/Home";
import Login from "../Component/Login/Login";
import Register from "../Component/Login/Register/Register";
import Main from "../Layout/Main";
import Blog from "../Others/Blog";
import CoureseDetails from "../Others/CoureseDetails";
import Courses from "../Others/Courses";
import ErrorPage from "../Others/ErrorPage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


export const routes= createBrowserRouter([

{
    path:'/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
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
            path:'/course',
            element:<Courses></Courses>,
            loader: ()=> fetch(`http://localhost:5000/course`)
           
            
        },
        {
           path:'/course/:id',
           element: <PrivateRoute><CoureseDetails></CoureseDetails></PrivateRoute>,
           loader: ({params})=> fetch(`http://localhost:5000/course/${params.id}`)
        },
        {
            path: '/blog',
            element: <Blog></Blog>
        }
        
    ]
    
}
])