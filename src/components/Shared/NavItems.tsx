import { Navbar } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo/ffflogo.png";
import { useEffect, useState } from "react";
import ActiveLink from "./ActiveLink";
import DropdownMenu from "../Menus/DropDownMenu";
import { FiMoon, FiSun } from "react-icons/fi";

const NavbarItems = () => {
  const location = useLocation();
  const [navbarHeight, setNavbarHeight] = useState("py-5");
  const [navbarBg, setNavbarBg] = useState("bg-transparent");

  /* check if home page or not */
  const isHomePage = location.pathname === "/";

  /* Control navbar background and padding */
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 120) {
        setNavbarHeight("py-3");
        setNavbarBg("bg-white shadow-md");
      } else {
        setNavbarHeight("py-5");
        /* if homepage then set bg transparent by default */
        setNavbarBg(isHomePage ? "bg-transparent" : "bg-white shadow-md");
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHomePage]);

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
    <Navbar
      className={`${navbarBg} ${
        navbarBg === "bg-transparent" ? "md:text-white text-primary" : "text-blue-900"
      } border-gray-200 dark:bg-gray-500 fixed w-full z-20 top-0 start-0 transition-all ease-out duration-200 ${navbarHeight} -px-20 `}
    >
      <Navbar.Brand>
        <Link to="/">
          <div className="flex justify-center items-center gap-x-2">
            <img src={logo} className="w-12 md:w-16" alt="madridita sports" />
            <p className="md:text-[23px] font-bold  dark:text-white hidden sm:block font-robotoSlab">
              Royal Bikes
            </p>
          </div>
        </Link>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <div className="flex items-center md:gap-7 space-x-4 md:space-x-0 rtl:space-x-reverse me-3.5 sm:me-3 md:me-0">
          <DropdownMenu />
          <button
            onClick={handleThemeToggle}
            className="relative  hover:text-primary"
          >
            {theme == "light" ? (
              <FiMoon
                className={`w-5 h-5 md:w-6 md:h-6 dark:text-white animate-rotate`}
              />
            ) : (
              <FiSun
                className={`w-5 h-5 md:w-6 md:h-6 dark:text-white animate-rotate`}
              />
            )}
          </button>
        </div>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <ActiveLink to="/">Home</ActiveLink>
        <ActiveLink to="/all-products">Bikes</ActiveLink>
        <ActiveLink to="/about-us">About Us</ActiveLink>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarItems;
