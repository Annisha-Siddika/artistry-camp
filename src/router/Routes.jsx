import { createBrowserRouter } from "react-router-dom";
import Home from "../Page/Home/Home/Home";
import Login from "../Page/Login/Login";
import Signup from "../Page/Signup/Signup";
import Main from "../layout/Main";
import DashBoard from "../layout/DashBoard";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <Signup></Signup>
            },
           
        ]
    },
    {
        path: '/dashboard',
        element: <DashBoard/>,
        children: [
            {
                path:'/dashboard/add-class',
                element: <p>Add class form</p>
            }
        ]
    }
    
    ])
    
    export default Routes;