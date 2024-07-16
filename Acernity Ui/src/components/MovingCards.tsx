'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";


const musicContent = [
    {
        name: "Music Academy",
        title: "Music Theory Basics",
        quote: "Learn the foundational concepts of music theory, including notes, scales, chords, and rhythm. Understand how these elements combine to create music and enhance your musical understanding."
    },
    {
        name: "Rock History Institute",
        title: "History of Rock and Roll",
        quote: "Explore the origins and evolution of rock and roll music, from its roots in blues, jazz, and folk music to its emergence as a global cultural phenomenon."
    },
    {
        name: "Music Legends Society",
        title: "Guide to Famous Musicians",
        quote: "Discover the lives and legacies of influential musicians across genres, from classical composers like Mozart and Beethoven to modern icons such as The Beatles, Michael Jackson, and Beyoncé."
    },
    {
        name: "Studio Sound Labs",
        title: "Music Production Techniques",
        quote: "Explore techniques used in music production, including recording, mixing, and mastering. Learn about software tools and hardware equipment used to create professional-quality recordings."
    },
    {
        name: "Culture and Music Research Center",
        title: "Impact of Music on Society",
        quote: "Examine the role of music in society and culture. Explore how music reflects social issues, shapes identity, and influences movements for change."
    }
];

const MovingCards = () => {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex
    flex-col items-center  justify-center overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-8 z-10">
            Hear Our Harmony: Voices of Success
        </h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
            <InfiniteMovingCards
                items={musicContent}
                direction="right"
                speed="slow"
      />
            </div>
        </div>
    </div>
  )
}

export default MovingCards