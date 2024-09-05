import { FaUser, FaUsers, FaList, FaMotorcycle } from "react-icons/fa";
import { HiMiniRectangleStack } from "react-icons/hi2";
import { MdShoppingCart, MdDashboard } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { RiAdminFill } from "react-icons/ri";

const AdminMenu = () => {
 
    return (
      <div>
        <NavLink
          to="/dashboard"
          end
          className={({ isActive }) =>
            `sidebar ${isActive ? "sidebar-active" : "text-white"}`
          }
        >
          <FaUser className="w-5 h-5" />
          <span className="mx-4 font-medium">Profile</span>
        </NavLink>
        <NavLink
          to="manage-bikes"
          className={({ isActive }) =>
            `sidebar ${isActive ? "sidebar-active" : "text-white"}`
          }
        >
          <FaMotorcycle className="w-5 h-5" />
          <span className="mx-4 font-medium">Manage Bikes</span>
        </NavLink>
        <NavLink
          to="manage-orders"
          className={({ isActive }) =>
            `sidebar ${isActive ? "sidebar-active" : "text-white"}`
          }
        >
          <MdShoppingCart className="w-5 h-5" />
          <span className="mx-4 font-medium"> Orders</span>
        </NavLink>
        <NavLink
          to="manage-blogs"
          className={({ isActive }) =>
            `sidebar ${isActive ? "sidebar-active" : "text-white"}`
          }
        >
          <HiMiniRectangleStack className="w-5 h-5" />
          <span className="mx-4 font-medium"> Blogs</span>
        </NavLink>
        <NavLink
          to="listuser"
          className={({ isActive }) =>
            `sidebar ${isActive ? "sidebar-active" : "text-white"}`
          }
        >
          <RiAdminFill className="w-5 h-5" />
          <span className="mx-4 font-medium">Admin Panel</span>
        </NavLink>
        <NavLink
          to="listuser"
          className={({ isActive }) =>
            `sidebar ${isActive ? "sidebar-active" : "text-white"}`
          }
        >
          <FaUsers className="w-5 h-5" />
          <span className="mx-4 font-medium">All Users List</span>
        </NavLink>
      </div>
    );
};

export default AdminMenu;