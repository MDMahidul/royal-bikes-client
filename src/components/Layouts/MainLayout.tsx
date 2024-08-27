import { Outlet } from "react-router-dom";
import NavbarItems from "../Shared/NavItems";
import Footer from "../Shared/Footer";


const MainLayout = () => {
    return (
        <div>
            <NavbarItems/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;