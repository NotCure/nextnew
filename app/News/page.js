import React from "react";
import Navbar from "@/app/_components/navbar/navbar";
import Header from "@/app/_components/header/Header";
import Title from "@/app/_components/title/Title";
import News from "@/app/_components/news/news";

export default function NewsPage() {
  const newsItems = [
    {
      id: 1,
      title: "Underwater Police Force Launches New Anti-Smuggling Operation",
      description:
        "The underwater police force has initiated a groundbreaking operation to combat smuggling activities beneath the waves, utilizing advanced detection technology and coordinated patrols.",
      image: "/assests/news/1.png",
    },
    {
      id: 2,
      title: "Deep-Sea Rescue: Underwater Police Save Stranded Diver",
      description:
        "In a heroic effort, the underwater police successfully rescued a diver stranded in a deep-sea cave, showcasing their exceptional training and bravery.",
      image: "/assests/news/2.png",
    },
    {
      id: 3,
      title: "Marine Crime Rates Drop Thanks to Underwater Patrols",
      description:
        "Recent reports indicate a significant decrease in marine-related crimes, attributed to the diligent efforts and increased presence of the underwater police patrols.",
      image: "/assests/news/3.png",
    },
    {
      id: 4,
      title: "Innovative Tech Enhances Underwater Policing Efficiency",
      description:
        "The introduction of state-of-the-art technology, including advanced sonar and communication systems, has greatly improved the efficiency and effectiveness of underwater policing operations.",
      image: "/assests/news/4.png",
    },
  ];

  return (
    <>
      <Header />
      <Navbar />
      <Title title="News" />
      <div className="flex justify-center">
        <div className="grid gap-20 p-4 md:grid-cols-2 sm:grid-cols-1 max-w-7xl">
          {newsItems.map((news, index) => (
            <News
              key={index}
              id={news.id}
              title={news.title}
              description={news.description}
              image={news.image}
            />
          ))}
        </div>
      </div>
    </>
  );
}
