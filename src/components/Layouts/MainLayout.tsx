import { Outlet } from "react-router-dom";
import NavbarItems from "../Shared/NavItems";
import Footer from "../Shared/Footer";
import LoadPageTop from "../LoadingTop/LoadPageTop";
import LoadingUpButton from "../LoadingTop/LoadingUpButton";


const MainLayout = () => {
    return (
      <div>
        <NavbarItems />
        <LoadPageTop/>
        <LoadingUpButton/>
        <div >
          <Outlet />
        </div>
        <Footer />
      </div>
    );
};

export default MainLayout;