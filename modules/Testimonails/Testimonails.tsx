import Image from "next/image";
import VideoImage from "@/public/testimonial.png";
import quote from "@/public/quote.svg";

export const Testimonails = () => {
  return (
    <section className="container px-4 md:px-6">
      <div className="flex flex-col gap-6 md:gap-8 lg:gap-[46px] py-6 md:py-8 lg:py-[64px]">
        <div className="text-start">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            Patient Testimonials
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-[74px]">
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
              className="object-contain w-12 sm:w-16 md:w-20 lg:w-[88px] h-auto"
            />
            <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#1F2A37] font-medium leading-relaxed md:leading-[1.8] lg:leading-[45px] tracking-tight">
              {`"I can't express how grateful I am to the entire team at Bankers
              Hospital. When my husband, John, started experiencing severe chest
              pain, we rushed him to the hospital. From the moment we arrived,
              the care and attention were extraordinary."`}
            </h4>
            <div className="space-y-1 md:space-y-2">
              <h4 className="text-lg sm:text-xl md:text-2xl text-[#1F2A37] font-medium">
                Peter John
              </h4>
              <span className="text-xs sm:text-sm text-[#1F2A37] block">
                Cardiology Patient
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
