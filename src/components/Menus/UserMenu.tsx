import { NavLink } from "react-router-dom";
import { FaClipboardList, FaMotorcycle, FaUser } from "react-icons/fa";

const UserMenu = () => {
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
          to="bikeslist"
          className={({ isActive }) =>
            `sidebar ${isActive ? "sidebar-active" : "text-white"}`
          }
        >
          <FaMotorcycle className="w-5 h-5" />
          <span className="mx-4 font-medium">Bikes List</span>
        </NavLink>
        <NavLink
          to="my-bookings"
          className={({ isActive }) =>
            `sidebar ${isActive ? "sidebar-active" : "text-white"}`
          }
        >
          <FaClipboardList className="w-5 h-5" />
          <span className="mx-4 font-medium">My Bookings</span>
        </NavLink>
      </div>
    );
};

export default UserMenu;