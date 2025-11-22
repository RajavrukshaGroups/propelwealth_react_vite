import React from "react";
 import trustworthyImg from "../assets/image-trustworthy.jpg";
 import influentialImg from "../assets/image-influential.jpg";
 import trustworthyIcon from "../assets/trustworthy-icon.jpg";
 import influentialIcon from "../assets/influential-icon.jpg";

export default function FinancialExperts() {
  return (
    <section className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">

      {/* Heading + Description */}
      <div className="flex flex-col md:flex-row gap-8 mb-8 items-start">
        <div className="md:w-1/3 flex items-start gap-5">
          <h1 className="text-4xl sm:text-5xl font-normal leading-tight text-gray-800">
            Trust your financial affairs to our experts
          </h1>
          <div className="hidden md:block w-0.5 h-24 bg-gray-300"></div>
        </div>

        <div className="md:w-2/3 pt-4">
          <p className="text-base text-gray-600 leading-relaxed">
            Established in 2015, our company happily gathers the most
            professional consultants under one roof. From financial consultancy 
            to investment planning and risk management, we proudly take any 
            challenge thrown down to our customers. Your prosperity is what 
            we strive for.
          </p>
        </div>
      </div>

      {/* Two Image Blocks */}
      <div className="flex flex-col md:flex-row gap-4">

        {/* Trustworthy Block */}
        <div className="flex-1 relative h-96 overflow-hidden rounded-xl bg-[#d8e5d2]">
          <img
            src={trustworthyImg}
            alt="Trustworthy financial expert"
            className="absolute inset-0 w-full h-full object-cover opacity-90 
                       sepia-[0.2] saturate-[0.8]"
          />

          <div className="absolute bottom-8 left-8 text-white">
            <span className="inline-flex justify-center items-center 
                             w-16 h-16 bg--900 rounded-full shadow-lg mb-2">
              <img src={trustworthyIcon} alt="Trustworthy" className="w-8 h-8" />
            </span>

            <p className="text-3xl font-bold drop-shadow-lg">Trustworthy</p>
          </div>
        </div>

        {/* Influential Block */}
        <div className="flex-1 relative h-96 overflow-hidden rounded-xl bg-[#ede9e0]">
          <img
            src={influentialImg}
            alt="Influential financial documents"
            className="absolute inset-0 w-full h-full object-cover opacity-90 
                       grayscale-[0.5] sepia-[0.2]"
          />

          <div className="absolute bottom-8 left-8 text-white">
            <span className="inline-flex justify-center items-center 
                             w-16 h-16 bg-grey-900 rounded-full shadow-lg mb-2">
              <img src={influentialIcon} alt="Influential" className="w-8 h-8 " />
            </span>

            <p className="text-3xl font-bold drop-shadow-lg">Influential</p>
          </div>
        </div>

      </div>

    </section>
  );
}
