"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section className="text-gray-600 body-font bg-fixed bg-cover bg-center custom-image">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Iam a
            <br className="hidden lg:inline-block" />
            <Typewriter
              options={{
                strings: ["Web Developer", "UI/UX Designer", "Graphic Designer"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className="h-[2px] w-[100px] bg-blue-600"></div>
          <p className="mb-8 leading-relaxed">
            Experienced Web Developer specializing in UI design, currently
            enhancing my skills in Artificial Intelligence through studies in
            Pakistan. Passionate about integrating AI with web development for
            innovative solutions.
          </p>
          <div className="flex justify-center">
            <Link href={"#contact"}>
            <button
              className="inline-flex text-white bg-blue-500 
              border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
            >
              Contact
            </button>
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center mx-auto rounded w-[15rem]"
            alt="hero"
            width={1000}
            height={1000}
            src={require("../public/assets/picture/24-removebg-preview.jpg")}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
