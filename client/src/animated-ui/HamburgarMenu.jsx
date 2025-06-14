import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const HamburgarMenu = ({ list, open }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -200 }}
          className="fixed top-24 w-9/10 rounded-3xl bg-black/50 "
        >
          <div>
            <ul className="flex flex-col p-5 gap-2">
              {list.map((menu, index) => (
                <li
                  key={index}
                  className=" text-center hover:bg-white hover:text-black py-2 px-1.5 rounded-3xl"
                >
                  <a href={`#${menu}`}>{menu}</a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HamburgarMenu;
