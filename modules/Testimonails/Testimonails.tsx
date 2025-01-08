import Image from "next/image";
import VideoImage from "@/public/testimonial.png";
import quote from "@/public/quote.svg";
import "./style.css";

export const Testimonails = () => {
  return (
    <section className="container px-4 md:px-6">
      <div className="flex flex-col gap-8 md:gap-[46px] py-8 md:py-[64px]">
        <div className="text-start">
          <h2 className="testimonials-title text-3xl md:text-4xl lg:text-5xl">
            Patient Testimonials
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[74px]">
          <Image
            src={VideoImage}
            alt="Patient testimonial video"
            width={618}
            height={450}
            className="object-contain w-full h-auto"
            priority
          />
          <div className="flex flex-col gap-4 md:gap-6 justify-center">
            <Image
              src={quote}
              alt="Quote icon"
              width={88}
              height={83}
              className="object-contain w-16 md:w-20 lg:w-[88px] h-auto"
            />
            <h4 className="text-xl md:text-2xl text-[#1F2A37] font-medium leading-normal md:leading-[45px]">
              {`"I can't express how grateful I am to the entire team at Bankers
              Hospital. When my husband, John, started experiencing severe chest
              pain, we rushed him to the hospital. From the moment we arrived,
              the care and attention were extraordinary."`}
            </h4>
            <div>
              <h4 className="text-xl md:text-2xl text-[#1F2A37]">Peter John</h4>
              <span className="text-xs md:text-sm text-[#1F2A37]">
                Cardiology Patient
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
