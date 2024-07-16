import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div id="about">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded mx-auto"
              alt="hero"
              src={require("../public//assets/picture/24-removebg-preview.jpg")}
              height={200}
              width={200}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              About me
              <br className="hidden lg:inline-block" />
            </h1>
            <p className="mb-5 leading-relaxed">
              Hello! My name is Shehbaz Niazi, and I am currently an
              intermediate student based in Karachi. I completed my
              matriculation at Gulistan-e-Hussain Secondary School in Karachi,
              where I developed a strong academic foundation and a passion for
              learning.
            </p>
            <p className="mb-5 leading-relaxed">
              Outside of academics, I enjoy staying updated with the latest
              trends in technology, experimenting with new coding techniques,
              and exploring different programming languages. I am eager to
              continue learning and growing in the field of web development,
              aspiring to contribute meaningfully to innovative projects and
              collaborate with like-minded individuals.
            </p>
            <div className="flex justify-center">
                <Link href={"/assets/cv/myCv.pdf"}>
              <button
                className="inline-flex text-white bg-blue-500 border-0 py-2 
              px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
              >
                View CV
              </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
