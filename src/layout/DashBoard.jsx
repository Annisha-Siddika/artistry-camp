import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const DashBoard = () => {
    return (
        <div className="relative min-h-screen flex">
            <div>
                <Sidebar></Sidebar>
            </div>
            <div className="flex-1 ml-32">
                <div className="p-5">
                    <Outlet></Outlet>
                </div>

            </div>
        </div>
    );
};

export default DashBoard;