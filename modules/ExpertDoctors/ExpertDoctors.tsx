import { expertDoctors } from "@/utils/constant";
import "./style.css";
import Image from "next/image";
export const ExpertDoctors = () => {
  return (
    <section className="gradient-bg">
      <div className="py-[64px] flex flex-col gap-[46px] container ">
        <div className="flex gap-[24px] items-center">
          <h2 className="font-semibold text-[48px] leading-[60px] min-w-[636px]">
            Compassionate Care from Experts
          </h2>
          <p className="font-normal text-[16px] leading-[28px]">
            Our skilled doctors provide personalized treatment, ensuring your
            health and well-being at every step.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-[48px]">
          {expertDoctors.map((item) => (
            <div key={item.id} className="doctor-card overflow-hidden">
              <Image
                src={item.img}
                alt="hero"
                width={300}
                height={300}
                className="object-contain"
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
