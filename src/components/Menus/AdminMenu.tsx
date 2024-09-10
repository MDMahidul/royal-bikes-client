import { FaUser, FaUsers, FaMotorcycle, FaClipboardList } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import {  RiCoupon3Fill } from "react-icons/ri";


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
          to="manage-users"
          className={({ isActive }) =>
            `sidebar ${isActive ? "sidebar-active" : "text-white"}`
          }
        >
          <FaUsers className="w-5 h-5" />
          <span className="mx-4 font-medium">Manage Users</span>
        </NavLink>
        <NavLink
          to="manage-rentals"
          className={({ isActive }) =>
            `sidebar ${isActive ? "sidebar-active" : "text-white"}`
          }
        >
          <FaClipboardList className="w-5 h-5" />
          <span className="mx-4 font-medium">Manage Rentals</span>
        </NavLink>
        <NavLink
          to="manage-coupons"
          className={({ isActive }) =>
            `sidebar ${isActive ? "sidebar-active" : "text-white"}`
          }
        >
          <RiCoupon3Fill className="w-5 h-5" />
          <span className="mx-4 font-medium">Manage Coupons</span>
        </NavLink>
      </div>
    );
};

export default AdminMenu;