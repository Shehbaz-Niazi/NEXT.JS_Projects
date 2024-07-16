import React from "react";
import { ImHtmlFive2, ImCss3 } from "react-icons/im";
import { SiJavascript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";

const Skills = () => {
  return (
    <div id="skills">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-blue-500 tracking-widest font-medium title-font mb-1">
              Skills..
            </h2>
            <h1 className="sm:text-3xl text-2xl font-bold title-font text-gray-900">
              My Skills
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
             {/* Skills Portions */}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div
                    className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full
             bg-blue-500 text-white flex-shrink-0"
                  >
                    <ImHtmlFive2 />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    HTML
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className=" h-1 w-full rounded-xl bg-gray-300">
                    <div className=" bg-blue-500 h-1 rounded-xl w-[100%]"></div>
                  </div>
                  <p className="font-bold text-blue-500 text-right">100%</p>
                </div>
              </div>
            </div>
             {/* Skills Portions */}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div
                    className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full
             bg-blue-500 text-white flex-shrink-0"
                  >
                    <ImCss3 />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    CSS
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className=" h-1 w-full rounded-xl bg-gray-300">
                    <div className=" bg-blue-500 h-1 rounded-xl w-[95%]"></div>
                  </div>
                  <p className="font-bold text-blue-500 text-right">95%</p>
                </div>
              </div>
            </div>
             {/* Skills Portions */}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div
                    className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full
             bg-blue-500 text-white flex-shrink-0"
                  >
                    <SiJavascript />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Javascript/Typescript
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className=" h-1 w-full rounded-xl bg-gray-300">
                    <div className=" bg-blue-500 h-1 rounded-xl w-[90%]"></div>
                  </div>
                  <p className="font-bold text-blue-500 text-right">90%</p>
                </div>
              </div>
            </div>
             {/* Skills Portions */}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div
                    className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full
                  bg-blue-500 text-white flex-shrink-0"
                  >
                    <RiTailwindCssFill/>
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Tailwind Css
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className=" h-1 w-full rounded-xl bg-gray-300">
                    <div className=" bg-blue-500 h-1 rounded-xl w-[90%]"></div>
                  </div>
                  <p className="font-bold text-blue-500 text-right">90%</p>
                </div>
              </div>
            </div>
             {/* Skills Portions */}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div
                    className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full
             bg-blue-500 text-white flex-shrink-0"
                  >
                    <TbBrandNextjs />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Next.js 14
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className=" h-1 w-full rounded-xl bg-gray-300">
                    <div className=" bg-blue-500 h-1 rounded-xl w-[70%]"></div>
                  </div>
                  <p className="font-bold text-blue-500 text-right">70%</p>
                </div>
              </div>
            </div>
             {/* Skills Portions */}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div
                    className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full
             bg-blue-500 text-white flex-shrink-0"
                  >
                    <FaBootstrap />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Bootstrap
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className=" h-1 w-full rounded-xl bg-gray-300">
                    <div className=" bg-blue-500 h-1 rounded-xl w-[96%]"></div>
                  </div>
                  <p className="font-bold text-blue-500 text-right">96%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
