"use client"

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon} from "@heroicons/react/16/solid";
import { AddressBook, CubeTransparent, Envelope, House, IdentificationCard, InstagramLogo, LinkedinLogo, ReadCvLogo, X } from "@phosphor-icons/react";
import SideBar from "./SideBar";

const navLinks = [
    {
        title : "About Me",
        path : "#about",
    },
    {
        title : "Resume",
        path : "#resume",
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
    const [menuOpen, setMenuOpen] = useState(false) 

    const handleNav = () => {
        setMenuOpen(!menuOpen)
    }
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href={"/"} className="text-2xl md:text-4xl text-white font-semibold">
          Wansans
        </Link>

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
