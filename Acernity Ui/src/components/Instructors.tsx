'use client'
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { WavyBackground } from "./ui/wavy-background";

type Singer = {
    id: number;
    name: string;
    description: string;
    image: string;
    designation: string; 
};

const pakistaniSingers: Singer[] = [
    {
        id: 1,
        name: "Nusrat Fateh Ali Khan",
        description: "Legendary Qawwali singer known for his powerful voice and soulful renditions.",
        image:"/nusrat.jpg",
        designation: "Qawwali Maestro"
    },
    {
        id: 2,
        name: "Atif Aslam",
        description: "Versatile playback and pop singer famous for his romantic ballads and energetic performances.",
        image:"/atif.jpg",
        designation: "Playback Singer"
    },
    {
        id: 3,
        name: "Abida Parveen",
        description: "Renowned Sufi singer celebrated for her spiritual renditions and mesmerizing voice.",
        image: "/abida.jpg",
        designation: "Sufi Singer"
    },
    {
        id: 4,
        name: "Rahat Fateh Ali Khan",
        description: "Versatile Qawwali and playback singer known for his soulful voice and inherited musical talent.",
        image: "/rahat.jpeg",
        designation: "Qawwali and Playback Singer"
    },
    {
        id: 5,
        name: "Ali Zafar",
        description: "Multi-talented singer, songwriter, and actor known for his pop and rock music.",
        image: "/ali.jpg",
        designation: "Singer, Songwriter, Actor"
    }
];

const Instructors = () => {
  return (
    <div
      className="h-[40rem] relative overflow-hidden flex 
    item-center justify-center"
    >
      <WavyBackground className="w-full max-w-7xl mx-atuo flex-col flex 
      item-center justify-center h-full">
        <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8 ">
            Meet Our Instructor
        </h2>
        <p className="text-base md:text-lg text-white text-center mb-4">
            Discoverd The Telanted Professionals Who Will guide your Musicl Journey
        </p>
        <div className="flex flex-row items-center justify-center mb-10 w-full ">
            <AnimatedTooltip items={pakistaniSingers}/>
        </div>
      </WavyBackground>
    </div>
  );
};

export default Instructors;
