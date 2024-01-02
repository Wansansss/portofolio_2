"use client"

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon} from "@heroicons/react/16/solid";
import { AddressBook, CubeTransparent, Envelope, House, IdentificationCard, InstagramLogo, LinkedinLogo, ReadCvLogo, X } from "@phosphor-icons/react";

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
        <Link href={"/"} className="text-xl md:text-4xl text-white font-semibold cursor-pointer hover:opacity-50">
          Wansans
        </Link>
        <div onClick={handleNav} className="text-white sm:hidden">
            <Bars3Icon className="h-10 w-10" />
        </div>

        <div className={
            menuOpen 
            ?  "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-gray-500 p-10 ease-in duration-500"
            : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
        }>
            <div className="gap-4 p-4 flex flex-col h-screen overflow-y-auto">  
        <div className="flex justify-end items-center hover:text-pink-500 cursor-pointer text-white ">
        <X size={20} onClick={handleNav} />
        </div>  
        <Image
          className="bg-white h-24 w-24 rounded-full mx-auto mt-5"
          src="/img/formal.png"
          alt=""
          width={350}
          height={350}
        />
          <h3 className=" justify-center text-center mb-10 text-md text-white">Ridhwan Ardiyansyah</h3>
          <div className="flex hover:text-pink-500 cursor-pointer text-white transition-all duration-200 ease-out">
            <House size={26} weight="fill" />
            <Link href={"#Home"}>
              Home
            </Link>
          </div>
          <div className="flex hover:text-pink-500 cursor-pointer text-white transition-all duration-200 ease-out">
            <IdentificationCard size={26} weight="fill" />
            <Link href={"#Home"}>
              About Me
            </Link>
          </div>
          <div className="flex hover:text-pink-500 cursor-pointer text-white transition-all duration-200 ease-out">
            <ReadCvLogo size={26} weight="fill" />
            <Link href={"#Home"}>
              Resume
            </Link>
          </div>
          <div className="flex hover:text-pink-500 cursor-pointer text-white transition-all duration-200 ease-out">
          <CubeTransparent size={26} weight="fill" />
            <Link href={"#Home"}>
              Works
            </Link>
          </div>
          <div className="flex hover:text-pink-500 cursor-pointer text-white transition-all duration-200 ease-out">
          <AddressBook size={26} weight="fill" />
            <Link href={"#Home"}>
              Contact Me
            </Link>
          </div>
          <div className="flex flex-row justify-center gap-2 mt-20 ">
          <Link href="" className="flex  hover:text-pink-500 cursor-pointer text-white transition-all duration-200 ease-out" >
        <InstagramLogo size={26} />
        </Link>
        <Link href="" className="flex  hover:text-pink-500 cursor-pointer text-white transition-all duration-200 ease-out">
        <LinkedinLogo size={26} />
        </Link>
        <Link href="" className="flex  hover:text-pink-500 cursor-pointer text-white transition-all duration-200 ease-out">
        <Envelope size={28} />
        </Link>
        
          </div>
          </div>
          
        </div>
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
