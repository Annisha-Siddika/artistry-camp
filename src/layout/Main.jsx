import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";

const Main = () => {
    return (
        <>
        <Navbar></Navbar>
            <div className="mt-24">
            <Outlet></Outlet>
            </div>
        <Footer></Footer>
        <ScrollRestoration></ScrollRestoration>
        </>
    );
};

export default Main;