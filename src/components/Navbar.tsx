import { useState } from "react";
import { PiBasketLight } from "react-icons/pi";
import { FiUser } from "react-icons/fi";
// import Cart from "../assets/cart.svg";

export type LinkClassProps = {
  isActive: boolean;
  isPending: boolean;
}

// type Item = {
//   id: number;
//   name: string;
//   price?: number;
//   imgUrl: string;
// };

import { Link, NavLink } from "react-router-dom";
import { HamburgerMenu } from "./Animated/HamburgerMenu";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { SideNav } from "./SideNav";
import { CartMenu } from "./CartMenu";

export const Navbar = () => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const [isHamMenu, setIsHamMenu] = useState<boolean>(false);
  // const [isCartMenu, setIsCartMenu] = useState<boolean>(false);
  const { openCart, closeCart, cartItems, cartQuantity, isCartMenu, decreaseCartQuantity, increaseCartQuantity } = useShoppingCart();
  const linkClass = ({ isActive, isPending }: LinkClassProps) => isPending ? "text-red-900" : isActive ? "text-lime-500" : "transition-all duration-300 hover:text-neutral-400";
  const hoverAnimation = (bool: boolean) => setIsHover(bool)

  const toggleHamMenu = () => setIsHamMenu(prev => !prev)
  // const toggleCartMenu = () => setIsCartMenu(prev => !prev)

  

  return (
    <div className="px-8 py-4 d-md:px-4 d-md:py-2 flex items-center justify-between text-3xl bg-emerald-800 select-none">
      <Link to={"/"} className="flex items-center gap-4 cursor-pointer" onMouseEnter={() => hoverAnimation(true)} onMouseLeave={() => hoverAnimation(false)}>
        <svg
          className={`w-16 d-md:w-10 stroke-lime-500 stroke-1 fill-none transition-all ${isHover ? "translate-x-2" : ""}`}
          viewBox="0 0 24 24"
        >
          <path
            d="M7.2998 5H22L20 12H8.37675M21 16H9L7 3H4M4 8H2M5 11H2M6 14H2M10 20C10 20.5523 9.55228 21 9 21C8.44772 21 8 20.5523 8 20C8 19.4477 8.44772 19 9 19C9.55228 19 10 19.4477 10 20ZM21 20C21 20.5523 20.5523 21 20 21C19.4477 21 19 20.5523 19 20C19 19.4477 19.4477 19 20 19C20.5523 19 21 19.4477 21 20Z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h1 className="pt-2 text-5xl d-md:text-3xl">Shop.ts</h1>
      </Link>
      {/* SECTION Desktop */}
      <div className="flex items-center gap-4 d-lg:hidden">
        <NavLink className={linkClass} to={"/"}>Home</NavLink>
        <NavLink className={linkClass} to={"/store"}>Store</NavLink>
        <NavLink className={linkClass} to={"/about"}>About</NavLink>
        <div className="px-3 py-2 relative bg-lime-600 rounded-2xl cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-300" onClick={openCart}>
          <PiBasketLight className="w-6" />
          <span className="w-7 h-7 absolute -bottom-3 -right-2 bg-orange-600 text-center pt-[0.8px] text-lg rounded-full">{ cartQuantity }</span>
        </div>
        <CartMenu/>
        <div className="px-3 py-2 bg-lime-600 rounded-2xl cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-300">
          <FiUser className="w-6" />
        </div>
      </div>
      {/* SECTION Mobile */}
      <div className='flex items-center gap-2 u-lg:hidden'>
        <div
          onClick={openCart} 
          className="px-2 py-1 relative bg-lime-600 rounded-xl cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
          <PiBasketLight className="w-6" />
          <span className="w-5 h-5 absolute -bottom-3 -right-2 bg-orange-500 text-center pt-[0.8px] text-sm rounded-full">{ cartQuantity }</span>
        </div>
        <CartMenu/>
        {/* <div className={`fixed w-full h-full top-0 left-0 bg-overlay ${!isCartMenu ? "hidden" : ""}`} onClick={closeCart}/>
        <div className={`z-10 h-full p-10 fixed top-0 flex flex-col justify-center items-center gap-4 bg-sky-800 transition-all duration-300 ${isCartMenu ? "right-0 -translate-x-10a" : "-right-60"}`}>
          {cartItems.map(ci => (
            <div className='p-3 flex items-center gap-3 bg-slate-600 rounded-lg'>
              <img className='w-16 h-16 object-cover' src={itemRetriever(ci.id)?.imgUrl} alt={itemRetriever(ci.id)?.name} />
              <p>{ ci.quantity }</p>
            </div>
          ))}
        </div> */}
        <HamburgerMenu isHamMenu={isHamMenu} toggleHamMenu={toggleHamMenu} />
        <SideNav isHamMenu={isHamMenu} linkClass={linkClass} toggleHamMenu={toggleHamMenu} />
      </div>
    </div>
  );
};
