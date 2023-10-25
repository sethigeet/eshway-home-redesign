import { FC } from "react";

import { motion, useScroll, useTransform } from "framer-motion";
import { Bars3BottomRightIcon } from "@heroicons/react/24/outline";

export const Navbar: FC = () => {
  const { scrollYProgress } = useScroll();
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.2],
    ["hsl(213, 18%, 10%, 0)", "hsl(213, 18%, 10%, 1)"]
  );

  return (
    <div className="drawer drawer-end">
      <input id="side-drawer" type="checkbox" className="drawer-toggle" />
      <motion.nav
        style={{ backgroundColor }}
        className="drawer-content fixed top-0 left-0 right-0 flex justify-between items-center px-4 z-10"
      >
        <div className="h-20 flex items-center">
          <img className="h-16 w-16" src="/logo.png" alt="eshway-logo" />
          <h1 className="text-5xl uppercase ml-3 font-bold">Eshway</h1>
        </div>
        <label htmlFor="side-drawer" className="drawer-button btn btn-ghost">
          <Bars3BottomRightIcon className="h-10 w-10" />
        </label>
      </motion.nav>
      <div className="drawer-side z-20">
        <label
          htmlFor="side-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}

          <li>
            <a href="#about-us">About Us</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#team">The Team</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
