import servicesData from "./servicesData";
import Image from "next/image";

const colorSettings = {
  red: {
    title: "Traffic Services",
    mainImage: "/assests/services/red/Crashes.png",
    gridClasses: "grid grid-cols-2 gap-6 mb-8",
  },
  green: {
    title: "Requests Services",
    mainImage: null,
    gridClasses: "grid grid-cols-2 gap-6 p-4",
    specialGrid: (setMainImage, mainImage) => (
      <div className="max-w-4xl mx-auto p-4">
        <div className="grid grid-cols-2 gap-6">
          {servicesData.green.slice(0, 2).map((service) => (
            <a
              key={service.id}
              onClick={() => setMainImage(service.image)}
              className={`flex flex-col items-center text-white cursor-pointer p-2 ${
                mainImage === service.image ? "ring-4 ring-white" : ""
              }`}
            >
              <Image
                src={service.image}
                alt={service.name}
                width={48}
                height={48}
                className="image-min-width"
              />
              <p className="mt-2 text-center">{service.name}</p>
            </a>
          ))}
        </div>
        <div className="flex justify-center p-4">
          {servicesData.green.slice(2, 3).map((service) => (
            <a
              key={service.id}
              onClick={() => setMainImage(service.image)}
              className={`flex flex-col items-center text-white cursor-pointer p-2 ${
                mainImage === service.image ? "ring-4 ring-white" : ""
              }`}
            >
              <Image
                src={service.image}
                alt={service.name}
                width={48}
                height={48}
                className="image-min-width"
              />
              <p className="mt-2 text-center">{service.name}</p>
            </a>
          ))}
        </div>
      </div>
    ),
  },
  blue: {
    title: "Theft Services",
    mainImage: null,
    gridClasses: "grid grid-cols-2 gap-4 mb-8",
  },
};

export default colorSettings;
