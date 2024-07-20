'use client'
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";
 
interface Singer  {
  title: string;
  description: string;
  link: string;
};

const singers: Singer[] = [
  {
      title: "Nusrat Fateh Ali Khan",
      description: "Legendary Qawwali singer known for his powerful voice and soulful renditions.",
      link: "https://en.wikipedia.org/wiki/Nusrat_Fateh_Ali_Khan"
  },
  {
      title: "Atif Aslam",
      description: "Versatile playback and pop singer famous for his romantic ballads and energetic performances.",
      link: "http://www.aadeez.com/"
  },
  {
      title: "Abida Parveen",
      description: "Renowned Sufi singer celebrated for her spiritual renditions and mesmerizing voice.",
      link: "https://en.wikipedia.org/wiki/Abida_Parveen"
  },
];

const UpcomingWbinars = () => {
  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED WEBINARS
          </h2>
          <p
            className="mt-2 text-2xl leading-8 font-extrabold tracking-tight text-white
                sm:text-4xl"
          >
            ENHASNCE YOUR MUSICLA JOURNEY
          </p>
        </div>
        <div className="mt-10">
        <HoverEffect items={singers} />
        </div>
        <div className="mt-10 text-center">
          <Link
            href={"/courses"}
            className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white 
             hover:bg-gray-100 transition duration-200 hover:shadow-sm hover:shadow-white"
          >
            View All Webinars
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpcomingWbinars;
