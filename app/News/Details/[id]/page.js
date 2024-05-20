"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/app/_components/navbar/navbar";
import Header from "@/app/_components/header/Header";
import Title from "@/app/_components/title/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const newsItems = [
  {
    id: 1,
    title: "Underwater Police Force Launches New Anti-Smuggling Operation",
    description:
      "The underwater police force has initiated a groundbreaking operation to combat smuggling activities beneath the waves, utilizing advanced detection technology and coordinated patrols. This new initiative aims to curb the increasing incidence of smuggling operations that use underwater routes to evade traditional law enforcement. With state-of-the-art submersibles equipped with sonar and thermal imaging, the underwater police are now able to detect and intercept smuggling vessels far more efficiently. Additionally, coordinated patrols with neighboring regions are set to create a comprehensive network of surveillance, making it nearly impossible for illegal activities to go unnoticed. This operation not only underscores the commitment of the underwater police to maintaining maritime security but also highlights their innovative approach in tackling modern-day challenges. The community has expressed strong support for these efforts, appreciating the proactive measures being taken to safeguard their waters. Experts believe that this initiative could serve as a model for other regions facing similar challenges, emphasizing the importance of technological advancement and international cooperation in ensuring maritime safety.",
    image: "/assests/news/1.png",
  },
  {
    id: 2,
    title: "Deep-Sea Rescue: Underwater Police Save Stranded Diver",
    description:
      "In a heroic effort, the underwater police successfully rescued a diver stranded in a deep-sea cave, showcasing their exceptional training and bravery. The diver, who had been exploring a remote underwater cave system, became trapped after a sudden rockslide blocked his exit. With limited oxygen and no means of communication, the situation grew increasingly dire. Responding swiftly to the distress call, the underwater police mobilized a specialized rescue team equipped with cutting-edge diving gear and life-support systems. After hours of navigating through the perilous and narrow passages of the cave, the team managed to locate and extricate the diver safely. The rescue operation, which was streamed live on social media, captivated viewers worldwide and drew widespread acclaim. This successful mission not only demonstrated the underwater police's unparalleled expertise in deep-sea operations but also reinforced their role as guardians of the ocean. The rescued diver, recovering in the hospital, expressed immense gratitude towards his saviors, calling them 'real-life superheroes.' The operation has sparked discussions about the importance of safety measures for extreme sports enthusiasts and the crucial role of specialized rescue teams in ensuring their well-being.",
    image: "/assests/news/2.png",
  },
  {
    id: 3,
    title: "Marine Crime Rates Drop Thanks to Underwater Patrols",
    description:
      "Recent reports indicate a significant decrease in marine-related crimes, attributed to the diligent efforts and increased presence of the underwater police patrols. Over the past year, the introduction of regular underwater patrols has transformed the seascape of crime prevention, acting as a powerful deterrent against illegal activities such as poaching, smuggling, and unauthorized fishing. Utilizing a fleet of advanced submarines and underwater drones, these patrols cover vast expanses of territorial waters, ensuring constant vigilance and rapid response capabilities. The comprehensive surveillance system, enhanced by AI-powered analytics, allows for real-time detection and tracking of suspicious activities, leading to prompt interdiction and arrests. Fishermen and maritime businesses have reported feeling much safer, with many acknowledging the positive impact on their livelihoods due to the reduction in illegal competition and environmental damage. The underwater police's success story is now being studied by other coastal nations as a model for improving maritime security and fostering sustainable oceanic management. This success highlights the potential for technological innovation and strategic patrol initiatives to drastically reduce crime rates and protect marine ecosystems.",
    image: "/assests/news/3.png",
  },
  {
    id: 4,
    title: "Innovative Tech Enhances Underwater Policing Efficiency",
    description:
      "The introduction of state-of-the-art technology, including advanced sonar and communication systems, has greatly improved the efficiency and effectiveness of underwater policing operations. This technological leap forward encompasses a range of innovations, from autonomous underwater vehicles (AUVs) equipped with high-resolution imaging and environmental sensors to robust underwater communication networks that enable seamless coordination among divers and surface units. The new sonar systems, capable of penetrating deeper and providing clearer images, have revolutionized the way underwater police conduct search and rescue missions, criminal investigations, and environmental monitoring. Moreover, the integration of machine learning algorithms allows for predictive analysis, helping to anticipate and prevent criminal activities before they occur. Training programs for the underwater police have also been upgraded, incorporating virtual reality simulations to better prepare officers for the challenges of underwater law enforcement. These advancements not only bolster the operational capabilities of the underwater police but also pave the way for a new era of maritime safety and security. The impact of these technologies extends beyond policing, promising benefits for scientific research, environmental conservation, and the overall understanding of underwater ecosystems.",
    image: "/assests/news/4.png",
  },
];

const NewsDetail = () => {
  const pathname = usePathname();
  const id = pathname.split("/").pop();

  const newsItem = newsItems.find((item) => item.id === parseInt(id));

  if (!newsItem) {
    return <div>News item not found</div>;
  }

  return (
    <>
      <Header />
      <Navbar />
      <div className="flex justify-center items-center text-white dark:text-black pt-3">
        <h1 className="px-4 opacity-65">Home</h1>
        <FontAwesomeIcon icon={faAngleRight} color="#41A7FF" />
        <h1 className="px-4 opacity-65">{newsItem.title}</h1>
      </div>
      <div className="flex justify-center text-white dark:text-black items-center font-semibold pt-11">
        <h1 className="px-4 text-4xl">{newsItem.title}</h1>
      </div>

      <div className="flex justify-center">
        <div className="max-w-4xl p-4">
          <img
            className="w-full rounded-lg"
            src={newsItem.image}
            alt={newsItem.title}
          />
          <div className="mt-24 flex justify-center text-white dark:text-black font-bold text-2xl">
            <h1>{newsItem.title}</h1>
          </div>
          <p className="mt-4 text-lg dark:text-black text-white">
            {newsItem.description}
          </p>
        </div>
      </div>
    </>
  );
};

export default NewsDetail;
