import Image from "next/image";
import expert from "@/public/expert.png";
import "./Expert.css";

export const Expert = () => {
  return (
    <section className="expert-section">
      <div className="container px-4 md:px-6 py-8 md:py-12 lg:py-[64px]">
        <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-12 lg:justify-between">
          <div className="flex flex-col justify-center max-w-full md:max-w-[503px] w-full">
            <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold leading-tight md:leading-snug lg:leading-[76px]">
              Get Expert Care From Home
            </h4>
            <p className="text-base sm:text-lg lg:text-[18px] leading-relaxed lg:leading-[28px] mt-4 md:mt-[22px] text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit urna,
              tortor pulvinar dolor rhoncus.Tristique sit eros consectetur
              adipiscing elit..
            </p>
            <button className="expert-button mt-6 md:mt-[36px] w-fit px-6 py-3 md:px-8 md:py-4">
              Consult Now
            </button>
          </div>
          <div className="w-full md:w-auto">
            <Image
              src={expert}
              alt="Expert doctor consultation"
              width={618}
              height={450}
              className="object-contain w-full h-auto"
              quality={100}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};
