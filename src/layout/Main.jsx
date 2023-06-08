import { Outlet } from "react-router-dom";
import Container from "../shared/Container";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";

const Main = () => {
    return (
        <>
        <Navbar></Navbar>
        <Container>
            <Outlet></Outlet>
        </Container>
        <Footer></Footer>
        </>
    );
};

export default Main;