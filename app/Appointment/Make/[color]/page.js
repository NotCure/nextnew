"use client";

import { usePathname, useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Title from "@/app/_components/title/Title";
import Navbar from "@/app/_components/navbar/navbar";
import Header from "@/app/_components/header/Header";
import servicesData from "@/app/_components/settings/servicesData"; // Adjust the import path as needed
import colorSettings from "@/app/_components/settings/colorSettings"; // Adjust the import path as needed
import AppointmentForm from "@/app/_components/datepicker/AppointmentForm"; // Adjust the import path as needed

const ServiceDetail = () => {
  const pathname = usePathname();
  const router = useRouter();
  const color = pathname.split("/").pop();
  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user || !user.Email) {
      router.push("/NotLogged");
    }
  }, [router]);

  const { title, gridClasses, specialGrid } = colorSettings[color] || {};
  const services = servicesData[color] || [];

  return (
    <>
      <Header />
      <Navbar />
      {mainImage && (
        <div className="flex justify-center items-center">
          <Image
            src={mainImage}
            alt="Services"
            width={300}
            height={300}
            objectFit="cover"
          />
        </div>
      )}
      <Title title={title} />
      {specialGrid ? (
        specialGrid(setMainImage, mainImage) // Pass setMainImage and mainImage to specialGrid
      ) : (
        <div className="max-w-4xl mx-auto p-4">
          <div className={gridClasses}>
            {services.map((service) => (
              <a
                key={service.id}
                onClick={() => setMainImage(service.image)}
                className={`flex flex-col items-center text-white cursor-pointer p-2 ${
                  mainImage === service.image
                    ? "ring-4 ring-white dark:ring-black"
                    : ""
                }`}
              >
                <Image
                  src={service.image}
                  alt={service.name}
                  width={48}
                  height={48}
                  className="image-min-width"
                />
                <p className="mt-2 text-center text-white dark:text-black">
                  {service.name}
                </p>
              </a>
            ))}
          </div>
        </div>
      )}

      <AppointmentForm />
    </>
  );
};

export default ServiceDetail;
