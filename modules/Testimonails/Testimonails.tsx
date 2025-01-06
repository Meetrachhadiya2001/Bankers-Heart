import Image from "next/image";
import VideoImage from "@/public/testimonial.png";
import quote from "@/public/quote.svg";
import "./style.css";

export const Testimonails = () => {
  return (
    <section className="container">
      <div className="flex flex-col gap-[46px] py-[64px]">
        <div className="text-start">
          <h2 className="testimonials-title">Patient Testimonials</h2>
        </div>
        <div className="grid grid-cols-2 gap-[74px]">
          <Image
            src={VideoImage}
            alt="hero"
            width={618}
            height={450}
            className="object-contain"
          />
          <div className="flex flex-col gap-6 justify-center">
            <Image
              src={quote}
              alt="hero"
              width={88}
              height={83}
              className="object-contain"
            />
            <h4 className="text-2xl text-[#1F2A37] font-medium leading-[45px]">
              {`"I can't express how grateful I am to the entire team at Bankers
              Hospital. When my husband, John, started experiencing severe chest
              pain, we rushed him to the hospital. From the moment we arrived,
              the care and attention were extraordinary."`}
            </h4>
            <div>
              <h4 className="text-2xl text-[#1F2A37]">Peter John</h4>
              <span className="text-sm text-[#1F2A37]">Cardiology Patient</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
