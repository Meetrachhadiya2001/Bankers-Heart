import { expertDoctors } from "@/utils/constant";
import "./style.css";
import Image from "next/image";
export const ExpertDoctors = () => {
  return (
    <section className="gradient-bg">
      <div className="py-8 md:py-12 lg:py-[64px] px-4 md:px-6 flex flex-col gap-[46px] container">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-[24px] items-start md:items-center">
          <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[48px] leading-tight md:leading-[1.25] lg:leading-[60px] w-full md:min-w-[636px]">
            Compassionate Care from Experts
          </h2>
          <p className="font-normal text-sm sm:text-base lg:text-[16px] leading-relaxed lg:leading-[28px] text-gray-700">
            Our skilled doctors provide personalized treatment, ensuring your
            health and well-being at every step.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-[40px] gap-[24px]">
          {expertDoctors.map((item) => (
            <div
              key={item.id}
              className="doctor-card overflow-hidden  flex-center"
            >
              <Image
                src={item.img}
                alt="hero"
                width={300}
                height={300}
                className="object-contain md:h-full md:w-full h-[300px] w-[300px]"
              />
              <div className="desc-card">
                <h4 className="text-[20px] font-bold leading-[36px]">
                  {item.name}
                </h4>
                <p className="font-normal text-[16px] leading-[28px]">
                  {item.specialization}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
