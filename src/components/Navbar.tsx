import { useState } from "react";
import { PiBasketLight } from "react-icons/pi";
import { FiUser } from "react-icons/fi";
// import Cart from "../assets/cart.svg";

type LinkClassProps = {
  isActive: boolean;
  isPending: boolean;
}

import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const linkClass = ({ isActive, isPending }: LinkClassProps) => isPending ? "text-red-900" : isActive ? "text-lime-500" : "transition-all duration-300 hover:text-neutral-400";
  const hoverAnimation = (bool: boolean) => setIsHover(bool)

  return (
    <div className="px-8 py-4 flex items-center justify-between text-3xl bg-emerald-800 select-none">
      <Link to={"/"} className="flex items-center gap-4 cursor-pointer" onMouseEnter={() => hoverAnimation(true)} onMouseLeave={() => hoverAnimation(false)}>
        <svg
          className={`w-16 stroke-lime-500 stroke-1 fill-none transition-all ${isHover ? "translate-x-2" : ""}`}
          viewBox="0 0 24 24"
        >
          <path
            d="M7.2998 5H22L20 12H8.37675M21 16H9L7 3H4M4 8H2M5 11H2M6 14H2M10 20C10 20.5523 9.55228 21 9 21C8.44772 21 8 20.5523 8 20C8 19.4477 8.44772 19 9 19C9.55228 19 10 19.4477 10 20ZM21 20C21 20.5523 20.5523 21 20 21C19.4477 21 19 20.5523 19 20C19 19.4477 19.4477 19 20 19C20.5523 19 21 19.4477 21 20Z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h1 className="text-5xl pt-2">Shop.ts</h1>
      </Link>
      <div className="flex items-center gap-4 d-lg:hidden">
        <NavLink className={linkClass} to={"/"}>Home</NavLink>
        <NavLink className={linkClass} to={"/store"}>Store</NavLink>
        <NavLink className={linkClass} to={"/about"}>About</NavLink>
        <div className="px-3 py-2 bg-lime-600 rounded-2xl cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-300">
          <PiBasketLight className="w-6" />
        </div>
        <div className="px-3 py-2 bg-lime-600 rounded-2xl cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-300">
          <FiUser className="w-6" />
        </div>
      </div>
    </div>
  );
};
