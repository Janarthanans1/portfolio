import React, { useState } from "react";
import { Volleyball } from "lucide-react";
import HireMeBtn from "../animated-ui/HireMeBtn";
import { Logs } from "lucide-react";
import HamburgarMenu from "../animated-ui/HamburgarMenu";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const menus = ["Home", "About", "Services", "Skill", "Projects", "Contact"];
  return (
    <div className="w-full text-white font-black flex justify-center">
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

        <div className="flex gap-4" id="hire me btn">
          <HireMeBtn />
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
