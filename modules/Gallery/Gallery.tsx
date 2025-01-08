import { galleryData } from "@/utils/constant";
import Image from "next/image";

export const Gallery = () => {
  return (
    <section className="py-8 md:py-12 lg:py-[64px] container px-4 md:px-6">
      <div className="flex flex-col lg:flex-row gap-6 md:gap-[24px] items-start md:items-center">
        <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[48px] leading-tight md:leading-[1.25] lg:leading-[60px] w-full md:min-w-[636px]">
          World-Class Care Close to Home
        </h2>
        <p className="font-normal text-sm sm:text-base lg:text-[16px] leading-relaxed lg:leading-[28px] text-gray-700">
          Discover advanced technology, modern infrastructure, and compassionate
          care—all designed to provide the best healthcare experience.
        </p>
      </div>

      <div className="flex flex-col gap-4 md:gap-[24px] mt-8 md:mt-12 lg:mt-[46px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-[24px]">
          {galleryData.slice(0, 2).map((item, index) => (
            <div key={index} className="relative w-full aspect-video">
              <Image
                src={item}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-[24px]">
          {galleryData.slice(2, 5).map((item, index) => (
            <div key={index} className="relative w-full aspect-video">
              <Image
                src={item}
                alt={`Gallery image ${index + 3}`}
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-[24px]">
          {galleryData.slice(5).map((item, index) => (
            <div key={index} className="relative w-full aspect-video">
              <Image
                src={item}
                alt={`Gallery image ${index + 6}`}
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
