"use client"

import Link from "next/link";
import NavLink from "./NavLink";
import SideBar from "./SideBar";

const navLinks = [
    {
        title : "About Me",
        path : "#about",
    },
    {
        title : "Projects",
        path : "#projects",
    },
    {
        title : "Contact Me",
        path : "#contact",
    }
]

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#6d6d6d] bg-opacity-100">
      <div className="flex flex-wrap items-center justify-center mx-auto gap-4">
        <SideBar />
       
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className=" flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
           {
            navLinks.map((link, index) => (
                <li key={index}>
                    <NavLink href={link.path} title={link.title} />
                </li>
            )) 
           }
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
