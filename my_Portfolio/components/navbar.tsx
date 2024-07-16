import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiDownloadCloud2Fill } from "react-icons/ri";

const Navbar = () => {
  console.log("Navbar component is rendered");

  return (
    <div className="sticky top-0 z-50">
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image
              height={100}
              width={100}
              alt="Logo"
              src={require("../public/assets/picture/logo.webp")}
              className="w-10"
            />
            <span className="ml-3 text-xl font-bold">My Portfolio</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center ">
            <Link href={"/"} className="mr-5 hover:text-blue-600">
              Home
            </Link>
            <Link href={"#about"} className="mr-5 hover:text-blue-600">
              About
            </Link>
            <Link href={"#skills"} className="mr-5 hover:text-blue-600">
              Skills
            </Link>
            <Link href={"#projects"} className="mr-5 hover:text-blue-600">
              Projects
            </Link>
            <Link href={"#contact"} className="mr-5 hover:text-blue-600">
              Contact
            </Link>
          </nav>
          <Link href="/assets/cv/myCv.pdf">
            <button
              className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none
             hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
            >
              Downlode CV
              <RiDownloadCloud2Fill className="text-xl ml-2" />
            </button>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
