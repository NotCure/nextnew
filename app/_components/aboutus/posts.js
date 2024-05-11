import React from 'react';
import Image from 'next/image';

const Posts = () => {
    return (
        <div className="space-y-52 pt-24">
            <div className="flex flex-col items-center">
                <div className="flex flex-col md:flex-row justify-center items-center space-x-0 md:space-x-80 space-y-8 md:space-y-0">
                    {/* Text Block */}
                    <div className="text-center">
                        <h1 className="text-white font-medium text-4xl">
                            <span className="border-b-4 border-blue-500 rounded-sm">Overview</span>
                        </h1>
                        <h1 className="font-light opacity-65 text-lg pt-6 text-white">hey</h1>
                    </div>

                    {/* Image Block - hidden on mobile */}
                    <div className="hidden md:block">
                        <Image
                            src="/assests/services/Services.png" // Ensure the path is correct
                            alt="Services"
                            width={500} // Adjust width as needed
                            height={300} // Adjust height as needed
                            objectFit="cover" // Adjust object-fit as needed
                        />
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center">
                <div className="flex flex-col md:flex-row justify-center items-center space-x-0 md:space-x-80 space-y-8 md:space-y-0">
                    {/* Image Block - hidden on mobile */}
                    <div className="hidden md:block">
                        <Image
                            src="/assests/services/Services.png" // Ensure the path is correct
                            alt="Services"
                            width={500} // Adjust width as needed
                            height={300} // Adjust height as needed
                            objectFit="cover" // Adjust object-fit as needed
                        />
                    </div>

                    {/* Text Block */}
                    <div className="text-center">
                        <h1 className="text-white font-medium text-4xl">
                            <span className="border-b-4 border-blue-500 rounded-sm">Overview</span>
                        </h1>
                        <h1 className="font-light opacity-65 text-lg pt-6 text-white">hey</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Posts;
