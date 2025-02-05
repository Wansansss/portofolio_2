"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Typewriter } from "react-simple-typewriter";

function HederSection() {
  const [message] = useState(["Universitas", "Tarumanagara"]);
  const [name] = useState(["Ridhwan Ardiyansyah"]);
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-emerald-700">
              Hello, I'm{" "}
            </div>
            <Typewriter words={name} loop={false} cursor />
          </h1>
          <h1 className="font-extrabold text-white mb-4 text-xl lg:text-2xl">
            I am Student {""}
            <Typewriter words={message} loop={false} cursor />
          </h1>
          <p className="text-white text-base sm:text-lg mb-6 lg:text-xl">
            I design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web services and
            online stores.
          </p>
          <div>
            <Link
              href={"mailto:ridhwanardiansyah@gmail.com"}
              target="_blank"
              rel="noopener noreferrer"
              locale={false}
              download
            >
              <button className="text-black hover:text-white bg-white hover:bg-blue-700  rounded-full w-full sm:w-fit px-4 py-4 shadow-xl shadow-blue-700 hover:shadow-white mr-4">
                Hire Me
              </button>
            </Link>

            <Link
              href={"/img/CV_Ridhwan_Ardiyansyah.pdf"}
              target="_blank"
              rel="noopener noreferrer"
              locale={false}
              download
            >
              <button className="text-black hover:text-white bg-white hover:bg-blue-700 rounded-full w-full sm:w-fit px-4 py-4 shadow-xl shadow-blue-700 hover:shadow-white mt-4">
                Download CV
              </button>
            </Link>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-10 lg:mt-0">
          {/* <div className="rounded-full bg-gray-600/70 shadow-blue-950 shadow-xl w-[350px] h-[350px] lg:w-[400] lg:[400] relative">
            <Image
              src="/img/formal.png"
              alt=""
              width={240}
              height={240}
              className="absolute transform -translate-x-1/2 -tranlate-y-1/2 top-1 left-1/2"
            />
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default HederSection;
