import Image from "next/image";
import Link from "next/link";
import React from "react";

const Project = () => {
  return (
    <div id="projects">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              My Projects ShowCase
            </h1>
          </div>
          {/* Projects Parts Boxes */}
          <div className="flex flex-wrap -m-8">
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  width={1000}
                  height={1000}
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../public/assets/picture/conditional.png")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    Conditional Randring in Nextjs 14
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    RANDRING
                  </h1>
                  <Link href={"https://rendring.vercel.app/"}>
                    <p className="leading-relaxed">
                      This is My First Project Which is Conditional Randring.
                    </p>
                    <p className="leading-relaxed text-blue-600 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  width={1000}
                  height={1000}
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../public/assets/picture/facebook.jpg")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    Facebook Page Clone
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    FACEBOOK
                  </h1>
                  <p className="leading-relaxed">
                    This is My 2nd Project Which is Facebook Page Clone
                  </p>
                  <Link href={"https://materialslogin.vercel.app/"}>
                    <p className="leading-relaxed text-blue-600 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  width={1000}
                  height={1000}
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../public/assets/picture/zomato2.png")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    Facebook Page Clone
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    ZOMATO
                  </h1>
                  <p className="leading-relaxed">
                    Only Picture not is Project. Only on Dammi Projects my Practice
                  </p>
                  <Link href={""}>
                    <p className="leading-relaxed text-blue-600 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
