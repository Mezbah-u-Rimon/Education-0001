import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { Toaster } from "react-hot-toast";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const MainLayout = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 100,
        });
    }, [])


    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster />
        </div>
    );
};

export default MainLayout;