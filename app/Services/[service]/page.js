"use client";

import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Title from "@/app/_components/title/Title";
import Navbar from "@/app/_components/navbar/navbar";
import Header from "@/app/_components/header/Header";

const ServicePage = () => {
  const pathname = usePathname();
  const service = pathname.split("/").pop();
  const router = useRouter();

  let imagePath;
  if (["Theft", "Burglary", "Store", "ItemTheft"].includes(service)) {
    imagePath = `/assests/services/blue/${service}.png`;
  } else if (["Block", "EventSafety", "Escort"].includes(service)) {
    imagePath = `/assests/services/green/${service}.png`;
  } else if (["Crashes", "Parking", "Traffic", "Wreck"].includes(service)) {
    imagePath = `/assests/services/red/${service}.png`;
  }

  if (!service) {
    return <div>Loading service details...</div>;
  }
  const handleAccessClick = () => {
    router.push(`/service-details/${service}`);
  };

  return (
    <>
      <Header />
      <Navbar />
      <div className="flex flex-col items-center justify-center text-white dark:text-black pt-10">
        <Image src={imagePath} alt={service} width={200} height={200} />
        <Title title={service} />
        <button
          onClick={handleAccessClick}
          className="mt-10 border px-16 border-white dark:border-black py-2 text-white dark:text-black font-medium rounded-3xl duration-150 col-span-2"
        >
          Access
        </button>
      </div>
    </>
  );
};

export default ServicePage;
