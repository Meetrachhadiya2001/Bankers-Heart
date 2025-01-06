import { galleryData } from "@/utils/constant";
import Image from "next/image";

export const Gallery = () => {
  return (
    <section className="py-[64px] flex flex-col gap-[46px] container w-full">
      <div className="flex gap-[24px] items-center">
        <h2 className="font-semibold text-[48px] leading-[60px] min-w-[636px]">
          World-Class Care Close to Home
        </h2>
        <p className="font-normal text-[16px] leading-[28px]">
          Discover advanced technology, modern infrastructure, and compassionate
          care—all designed to provide the best healthcare experience.
        </p>
      </div>
      <div className="flex flex-col gap-[24px]">
        <div className="grid grid-cols-2 gap-[24px]">
          {galleryData.slice(0, 2).map((item, index) => (
            <div key={index} className="relative">
              <Image src={item} alt="gallery" />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-[24px]">
          {galleryData.slice(2, 5).map((item, index) => (
            <div key={index} className="relative">
              <Image src={item} alt="gallery" />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-[24px]">
          {galleryData.slice(5).map((item, index) => (
            <div key={index} className="relative">
              <Image src={item} alt="gallery" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
