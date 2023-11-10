import { Outlet } from "react-router-dom";
import Footer from "./componenets/Footer/Footer";
import Header from "./componenets/Header/Header";

export default function Layout(){
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer />
        </>
    );
}