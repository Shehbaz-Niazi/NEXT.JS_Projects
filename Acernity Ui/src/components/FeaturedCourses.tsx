"use client"
import coursesData from "@/data/music-Course.json";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";

interface Courses {
  id: number,  
  name: string;
  title: string;
  slug: string;
  description: string;
  price: number | null;
  isFeatured: boolean;
  instructor_image: string;
}

const FeaturedCourses = () => {
  const featuredCourses = coursesData.singers.filter((course:Courses)=> course.isFeatured)

  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED COURSES
          </h2>
          <p
            className="mt-2 text-2xl leading-8 font-extrabold tracking-tight text-white
                sm:text-4xl"
          >
            Learn With the Best
          </p>
        </div>
      </div>

      <div className="mt-10">
        <div className="grid gird-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {featuredCourses.map((course:Courses)=>(
                <div key={course.id} className="flex justify-center">
                   <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                    <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow cursor-pointer">
                        <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                            {course.title}
                        </p>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                            {course.description}
                        </p>
                        <Link href={`/courses/${course.slug}`}>
                        Learn More
                        </Link>
                    </div>
                   </BackgroundGradient>
                </div>
            ))}
        </div>
      </div>

      <div className="mt-20 text-center">
        <Link
          href={"/courses"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white 
             hover:bg-gray-100 transition duration-200 hover:shadow-sm hover:shadow-white"
        >
          View all Courses
        </Link>
      </div>
    </div>
  );
};

export default FeaturedCourses;
