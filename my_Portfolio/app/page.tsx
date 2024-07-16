import About from "@/components/about";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Project from "@/components/project";
import Skills from "@/components/skills";
import Image from "next/image";


export default function Home() {
  return (
    <div>
    <Hero/>
    <Project/>
    <Contact/>
    <About/>
    <Skills/>
    </div>
  );
}
