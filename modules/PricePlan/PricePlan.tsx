import React from "react";
import { pricePlans } from "@/utils/pricePlanData";
import checkImage from "@/public/checkIcon.svg";
import Image from "next/image";
import "./style.css";

export const PricePlan = () => {
  return (
    <section className="py-[64px] flex flex-col gap-[46px] container">
      <div className="flex gap-[24px] items-center">
        <h2 className="font-semibold text-[48px] leading-[60px] min-w-[636px]">
          Comprehensive Care, Tailored for You
        </h2>
        <p className="font-normal text-[16px] leading-[28px]">
          Explore our specialized health checkup packages designed to keep you
          and your loved ones healthy.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {pricePlans.map((plan) => (
          <div
            key={plan.id}
            className="card rounded-3xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-[#111827] mb-2">
              {plan.title}
            </h3>
            <p className="text-gray-600 mb-6 h-[50px]">{plan.description}</p>

            <div className="flex items-baseline mb-[17px]">
              <span className="text-5xl font-bold text-[#111827]">
                ₹{plan.price}
              </span>
            </div>
            <p className="text-lg font-bold text-[#111827] mb-6">
              What’s included
            </p>

            <div className="space-y-4 mb-8">
              {plan.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Image src={checkImage} alt="check" className="" />
                  <span className="text-[#4B5563] text-lg font-medium">
                    {feature.feature}
                  </span>
                </div>
              ))}
            </div>

            <button className="w-full bg-red-600 text-white py-4 rounded-xl font-semibold hover:bg-red-700 transition-colors duration-300">
              CONSULT NOW
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};
