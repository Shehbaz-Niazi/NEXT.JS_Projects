
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-blue-50">
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <Image
              height={100}
              width={100}
              alt="Logo"
              src={require("../public/assets/picture/logo.webp")}
              className="w-10"
            />
            <span className="ml-3 text-xl font-bold">My Portfolio</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © My Portfolio
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a
              className="ml-3 text-gray-500"
              href="https://www.linkedin.com/in/shehbazniazi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="text-3xl hover:text-blue-600"/>
            </a>
            <a
              className="ml-3 text-gray-500"
              href="https://www.youtube.com/channel/UC84XlGEtPEJF63yezI7kIJA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="text-3xl hover:text-[#ff0000]" />
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
