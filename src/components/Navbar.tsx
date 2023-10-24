import { FC } from "react";

import { Bars3BottomRightIcon } from "@heroicons/react/24/outline";

export const Navbar: FC = () => {
  return (
    <div className="drawer drawer-end">
      <input id="side-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content fixed top-0 left-0 right-0 flex justify-between items-center px-4">
        <div className="h-20 flex items-center">
          <img className="h-16 w-16" src="/logo.png" alt="eshway-logo" />
          <h1 className="text-5xl uppercase ml-3 font-bold">Eshway</h1>
        </div>
        <label htmlFor="side-drawer" className="drawer-button btn btn-ghost">
          <Bars3BottomRightIcon className="h-10 w-10" />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="side-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
