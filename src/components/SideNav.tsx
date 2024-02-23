import { FiUser } from "react-icons/fi"
import { NavLink } from "react-router-dom"
import { LinkClassProps } from "./Navbar";

type SideNavProps = {
  isHamMenu: boolean
  linkClass: (props: LinkClassProps) => string;
  toggleHamMenu: () => void
}

export const SideNav = ({ isHamMenu, linkClass, toggleHamMenu }: SideNavProps) => {
  return (
    <>
      <div className={`fixed w-full h-full top-0 left-0 bg-overlay ${!isHamMenu ? "hidden" : ""}`} onClick={toggleHamMenu}/>
      <div className={`h-full p-10 fixed top-0 flex flex-col justify-center items-center gap-4 bg-sky-800 transition-all duration-300 ${isHamMenu ? "right-0 -translate-x-10a" : "-right-60"}`}>
        <div className="px-3 py-2 bg-lime-600 rounded-2xl cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-300">
          <FiUser className="w-6" />
        </div>
        <NavLink className={linkClass} to={"/"}>Home</NavLink>
        <NavLink className={linkClass} to={"/store"}>Store</NavLink>
        <NavLink className={linkClass} to={"/about"}>About</NavLink>
      </div>
    </>
  )
}