import React from "react";
import Image from "next/image";

const Posts = () => {
  return (
    <div className="space-y-52 pt-24">
      <div className="flex flex-col items-center">
        <div className="flex flex-col md:flex-row justify-center items-center space-x-0 md:space-x-52 space-y-8 md:space-y-0">
          {/* Text Block */}
          <div className="text-center">
            <h1 className="text-white dark:text-black font-medium text-4xl">
              <span className="border-b-4 border-blue-500 rounded-sm">
                Who We Are
              </span>
            </h1>
            <h1 className="font-light opacity-65 text-lg pt-6 dark:text-black text-white">
              We are a dedicated team of highly trained officers, specializing
              in underwater law enforcement
              <br />
              and emergency response. Our officers are equipped with
              state-of-the-art aquatic suits,
              <br />
              submarines, and advanced technology to navigate and protect the
              depths of our city.
            </h1>
          </div>

          {/* Image Block - hidden on mobile */}
          <div className="hidden md:block">
            <Image
              src="/assests/aboutus/1.png"
              alt="Services"
              width={500}
              height={300}
              objectFit="cover"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="flex flex-col md:flex-row justify-center items-center space-x-0 md:space-x-52 space-y-8 md:space-y-0">
          {/* Image Block - hidden on mobile */}
          <div className="hidden md:block">
            <Image
              src="/assests/aboutus/2.png" // Ensure the path is correct
              alt="Services"
              width={500}
              height={300}
              style={{ objectFit: "cover" }}
            />
          </div>

          {/* Text Block */}
          <div className="text-center">
            <h1 className="text-white dark:text-black font-medium text-4xl">
              <span className="border-b-4 border-blue-500 rounded-sm">
                Our Mission
              </span>
            </h1>
            <h1 className="font-light opacity-65 text-lg pt-6 dark:text-black text-white">
              Our primary goal is to maintain peace and order in our underwater
              world.
              <br />
              We tackle a wide range of challenges, from preventing crime and
              protecting marine life
              <br />
              to conducting deep-sea rescues and handling hazardous materials.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
