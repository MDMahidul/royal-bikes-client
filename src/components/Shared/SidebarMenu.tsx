import { useEffect, useState } from "react";
import logo from "@/assets/logo/ffflogo.png";
import { FiMenu, FiMoon, FiSun } from "react-icons/fi";
import { FaHome, FaSignOutAlt } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logOut, selectCurrentUser } from "@/redux/features/auth/authSlice";
import AdminMenu from "../Menus/AdminMenu";
import UserMenu from "../Menus/UserMenu";

const SidebarMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = useAppSelector(selectCurrentUser);
  const handleToggleSidebar = () => setIsOpen(!isOpen);
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logOut());
  };

  /* set theme */
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeToggle = () => {
    setTheme((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <>
      {/* for small dispaly */}
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer px-4  py-2 font-bold">
            <img className="w-12" src={logo} alt="" />
          </div>
        </div>

        <button
          onClick={handleToggleSidebar}
          className="p-4 focus:outline-none  transform transition-all duration-300 ease-in-out"
        >
          {isOpen ? (
            <FiMenu className="h-6 w-6" />
          ) : (
            <RxCross2 className="h-6 w-6" />
          )}
        </button>
      </div>
      {/* main sidebar */}
      <div
        className={` z-10 md:fixed flex flex-col  overflow-x-hidden bg-gradient-to-r from-[#00293b] via-[#00296b] to-[#00293b] w-[300px] space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isOpen && "-translate-x-full"
        } md:translate-x-0 transition-all duration-300 ease-in-out`}
      >
        <div>
          <Link
            to="/"
            className="flex justify-center items-center gap-x-2 mt-2 border border-secondary p-2 rounded-lg bg-gray-200 dark:bg-gray-400"
          >
            <img src={logo} className="w-12 md:w-[70px]" alt="Flowbite Logo" />
            <p className="text-xl md:text-[28px] font-bold text-primary dark:text-white font-robotoSlab capitalize">
              royal bikes
            </p>
          </Link>
        </div>
        <div className="flex-grow">
          <nav>
            {user?.role === "superAdmin" || user?.role === "admin " ? (
              <AdminMenu />
            ) : (
              <UserMenu />
            )}
          </nav>
        </div>
        <div className="mt-auto">
          <hr />
          <button
            onClick={handleThemeToggle}
            className="w-full sidebar text-white"
          >
            {theme == "light" ? (
              <FiMoon
                className={`w-5 h-5 md:w-6 md:h-6 dark:text-white animate-rotate`}
              />
            ) : (
              <FiSun
                className={`w-5 h-5 md:w-6 md:h-6 dark:text-white animate-rotate`}
              />
            )}{" "}
            <span className="mx-4 font-medium">Theme</span>
          </button>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `sidebar ${isActive ? "sidebar-active" : "text-white"}`
            }
          >
            <FaHome className="w-5 h-5" />

            <span className="mx-4 font-medium">Home Page</span>
          </NavLink>
          <button onClick={handleLogout} className="w-full sidebar text-white">
            <FaSignOutAlt className="w-5 h-5" />

            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default SidebarMenu;
