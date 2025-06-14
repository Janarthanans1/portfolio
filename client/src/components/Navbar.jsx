import React, { useState } from "react";
import { Volleyball, ArrowUpRight } from "lucide-react";

import { Logs } from "lucide-react";
import HamburgarMenu from "../animated-ui/HamburgarMenu";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const menus = ["Home", "About", "Services", "Skill", "Projects", "Contact"];
  return (
    <div className="w-full text-white font-black flex justify-center items-center">
      <nav className="w-19/20 h-[70px] px-8 rounded-full flex justify-between items-center bg-black/50 shadow-2xl fixed top-5">
        <div id="logo">
          <Volleyball className="w-8 h-8 md:w-10 md:h-10" />
        </div>

        <div id="menu">
          <ul className="hidden md:flex space-x-16">
            {menus.map((menu, index) => (
              <li key={index}>
                <a href={`#${menu}`}>{menu}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="group flex items-center gap-4" id="hire me btn">
          <a href="#Contact">
            <div className="w-40 h-fit bg-black/60 group-hover:pl-3 pl-5 pr-3 py-2 rounded-2xl flex justify-center items-center gap-2">
              <p className="group-hover:hidden min-w-fit">Hire Me</p>
              <div className="group-hover:w-full z-20 transition-all duration-75 bg-red-600 w-8 h-8 flex justify-center items-center  rounded-xl">
                <ArrowUpRight />
              </div>
            </div>
          </a>
          <div className="md:hidden" onClick={() => setOpen(!open)}>
            <Logs />
          </div>
        </div>
      </nav>
      <div className="flex justify-center md:hidden">
        <HamburgarMenu open={open} list={menus} />
      </div>
    </div>
  );
};

export default Navbar;
