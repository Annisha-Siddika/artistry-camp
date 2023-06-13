import { createBrowserRouter } from "react-router-dom";
import Home from "../Page/Home/Home/Home";
import Login from "../Page/Login/Login";
import Signup from "../Page/Signup/Signup";
import Main from "../layout/Main";
import DashBoard from "../layout/DashBoard";
import PrivateRoute from "./PrivateRoute";
import AddClass from "../Page/InstructorPages/AddClass/AddClass";
import ManageClass from "../Page/AdminPages/ManageClass";

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
        element: <PrivateRoute><DashBoard/></PrivateRoute>,
        children: [
            {
                path:'/dashboard/add-class',
                element: <AddClass/>
            },
            {
                path:'/dashboard/manage-classes',
                element: <ManageClass/>
            },
        ]
    }
    
    ])
    
    export default Routes;