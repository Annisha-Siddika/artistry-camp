import { createBrowserRouter } from "react-router-dom";
import Home from "../Page/Home/Home/Home";
import Login from "../Page/Login/Login";
import Signup from "../Page/Signup/Signup";
import Main from "../layout/Main";
import DashBoard from "../layout/DashBoard";
import AddClass from "../Page/InstructorPages/AddClass/AddClass";
import ManageClass from "../Page/AdminPages/ManageClass";
import ManageUsers from "../Page/AdminPages/ManageUsers";
import Instructors from "../Page/Instructors/Instructors";
import Classes from "../Page/Classes/Classes";
import AdminRoute from "./AdminRoute";

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
            {
                path: 'instructors',
                element: <Instructors/>
            },
            {
                path: 'classes',
                element: <Classes/>
            },
           
        ]
    },
    {
        path: '/dashboard',
        element: <DashBoard/>,
        children: [
            {
                path:'/dashboard/manage-classes',
                element: <AdminRoute><ManageClass/></AdminRoute>
            },
            {
                path:'/dashboard/allusers',
                element: <AdminRoute><ManageUsers/></AdminRoute>
            },
            {
                path:'/dashboard/add-class',
                element: <AddClass/>
            },
        ]
    }
    
    ])
    
    export default Routes;