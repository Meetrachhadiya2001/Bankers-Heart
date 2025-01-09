import React from "react";
import { pricePlans } from "@/utils/pricePlanData";
import checkImage from "@/public/checkIcon.svg";
import Image from "next/image";
import "./style.css";

export const PricePlan = () => {
  return (
    <section className="py-8 md:py-12 lg:py-[64px] container px-4 md:px-6">
      <div className="flex flex-col lg:flex-row gap-6 md:gap-[24px] items-start lg:items-center">
        <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[48px] leading-tight md:leading-[1.25] lg:leading-[60px] w-full lg:min-w-[636px]">
          Comprehensive Care, Tailored for You
        </h2>
        <p className="font-normal text-sm sm:text-base lg:text-[16px] leading-relaxed lg:leading-[28px] text-gray-600">
          Explore our specialized health checkup packages designed to keep you
          and your loved ones healthy.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 mt-8 md:mt-12 lg:mt-[46px]">
        {pricePlans.map((plan) => (
          <div
            key={plan.id}
            className="card rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100"
          >
            <h3 className="text-xl md:text-2xl font-bold text-[#111827] mb-2">
              {plan.title}
            </h3>
            <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6 min-h-[50px]">
              {plan.description}
            </p>

            <div className="flex items-baseline mb-4 md:mb-[17px]">
              <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827]">
                ₹{plan.price}
              </span>
            </div>
            <p className="text-base md:text-lg font-bold text-[#111827] mb-4 md:mb-6">
              What`s included
            </p>

            <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
              {plan.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Image
                    src={checkImage}
                    alt="check"
                    className="w-5 h-5 md:w-6 md:h-6"
                  />
                  <span className="text-[#4B5563] text-sm md:text-base lg:text-lg font-medium">
                    {feature.feature}
                  </span>
                </div>
              ))}
            </div>

            <button className="w-full bg-red-600 text-white py-3 md:py-4 px-4 rounded-lg md:rounded-xl font-semibold hover:bg-red-700 transition-colors duration-300 text-sm md:text-base">
              CONSULT NOW
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};
