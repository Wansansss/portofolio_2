"use client";
import { Bars3Icon } from "@heroicons/react/16/solid";
import {
  AddressBook,
  CubeTransparent,
  Envelope,
  House,
  IdentificationCard,
  InstagramLogo,
  LinkedinLogo,
  WhatsappLogo,
  X,
} from "@phosphor-icons/react";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

function SideBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <div onClick={handleNav} className="text-white sm:hidden">
        <Bars3Icon className="h-10 w-10" />
      </div>

      <div
        className={
          menuOpen
            ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-gray-500 p-10 ease-in duration-500"
            : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
        }
      >
        <div className="gap-4 p-4 flex flex-col h-screen overflow-y-auto">
          <div className="flex justify-end items-center hover:text-blue-700 cursor-pointer text-white ">
            <X size={20} onClick={handleNav} />
          </div>
          <Image
            className="bg-white h-24 w-24 rounded-full mx-auto mt-5"
            src="/img/formal.png"
            alt=""
            width={350}
            height={350}
          />
          <h3 className=" justify-center text-center mb-10 text-md text-white">
            Ridhwan Ardiyansyah
          </h3>
          <div className="flex hover:text-blue-700 cursor-pointer text-white transition-all duration-200 ease-out">
            <House size={26} weight="fill" />
            <Link href={"/"}>Home</Link>
          </div>
          <div className="flex hover:text-blue-700 cursor-pointer text-white transition-all duration-200 ease-out">
            <IdentificationCard size={26} weight="fill" />
            <Link href={"#about"}>About Me</Link>
          </div>
          <div className="flex hover:text-blue-700 cursor-pointer text-white transition-all duration-200 ease-out">
            <CubeTransparent size={26} weight="fill" />
            <Link href={"#projects"}>Projects</Link>
          </div>
          <div className="flex hover:text-blue-700 cursor-pointer text-white transition-all duration-200 ease-out">
            <AddressBook size={26} weight="fill" />
            <Link href={"#contact"}>Contact Me</Link>
          </div>
          <div className="flex flex-row justify-center gap-2 mt-20 ">
            <Link
              href="https://www.instagram.com/rdwnardynsyh"
              className="flex  hover:text-blue-700 cursor-pointer text-white transition-all duration-200 ease-out"
            >
              <InstagramLogo size={26} />
            </Link>
            <Link
              href=""
              className="flex  hover:text-blue-700 cursor-pointer text-white transition-all duration-200 ease-out"
            >
              <LinkedinLogo size={26} />
            </Link>
            <Link
              href="mailto:ridhwanardiansyah@gmail.com"
              className="flex  hover:text-blue-700 cursor-pointer text-white transition-all duration-200 ease-out"
            >
              <Envelope size={28} />
            </Link>
            <Link
              href="https://wa.me/6285710093376"
              className="flex  hover:text-blue-700 cursor-pointer text-white transition-all duration-200 ease-out"
            >
              <WhatsappLogo size={28} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBar;
