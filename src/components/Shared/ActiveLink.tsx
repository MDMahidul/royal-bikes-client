import { ReactNode } from "react";
import { NavLink, useMatch } from "react-router-dom";

type TNavLinkProps = {
  to: string;
  children: ReactNode;
};

const ActiveLink = ({ to, children }: TNavLinkProps) => {
  const match = useMatch({ path: to, end: true });

  return (
    <div className="relative group">
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive && match
            ? "py-1 md:py-0 text-base block bg-primary text-white rounded px-2 md:px-0   md:rounded-none md:pb-1  md:text-primary font-bold md:dark:text-white  md:border-b-2 md:bg-transparent border-secondary "
            : "nav-item"
        }
      >
        {children}
      </NavLink>
      {/* Span for the underline effect */}
      <span className="absolute left-0 bottom-0 h-[2px] w-0 rounded-full bg-secondary transition-all duration-300 group-hover:w-full"></span>
    </div>
  );
};

export default ActiveLink;
