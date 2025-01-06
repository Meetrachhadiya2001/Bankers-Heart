import Image from "next/image";
import expert from "@/public/expert.png";
import "./Expert.css";

export const Expert = () => {
  return (
    <section className="expert-section">
      <div className="container py-[64px] flex justify-between">
        <div className="flex flex-col justify-center max-w-[503px] w-full">
          <h4 className="text-[48px] font-bold leading-[76px]">
            Get Expert Care From Home
          </h4>
          <p className="text-[18px] leading-[28px] mt-[22px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit urna,
            tortor pulvinar dolor rhoncus.Tristique sit eros consectetur
            adipiscing elit..
          </p>
          <button className="expert-button mt-[36px] w-fit">Consult Now</button>
        </div>
        <div className="">
          <Image
            src={expert}
            alt="hero"
            width={618}
            height={450}
            className="object-contain"
            quality={100}
          />
        </div>
      </div>
    </section>
  );
};
