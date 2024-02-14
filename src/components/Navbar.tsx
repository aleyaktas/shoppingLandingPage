import React, { useState } from "react";
import { navbarItems } from "../utils/navbarItems";
import Icon from "../utils/Icon";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="p-4 lg:py-7 lg:px-20">
      <div className="mx-auto flex justify-between items-center">
        {!nav && (
          <h1 className="text-2xl md:text-3xl font-bold text-amber-900">
            Collers
          </h1>
        )}

        <ul className="hidden md:flex md:gap-4">
          {navbarItems.map((item, index) => (
            <li
              key={index}
              className="p-4 text-amber-900 cursor-pointer px-2 py-3"
            >
              {item}
            </li>
          ))}
        </ul>
        <button onClick={handleNav} className="block md:hidden ml-auto">
          <Icon name={nav ? "Close" : "Menu"} />
        </button>
        <ul
          className={
            nav
              ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-300 bg-amber-50 ease-in-out duration-500 z-20"
              : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
          }
        >
          <h1 className="w-full text-3xl font-bold text-amber-900 m-4">
            Collers
          </h1>
          {navbarItems.map((item, index) => (
            <li
              key={index}
              className="p-4 border-b text-amber-900 rounded-lg hover:bg-amber-100 duration-300 hover:text-black cursor-pointer border-gray-300"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
