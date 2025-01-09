import React from "react";
import Image from "next/image";
import { blogPosts } from "@/utils/constant";

const Blogs = () => {
  return (
    <section className="py-8 md:py-12 lg:py-[64px] container px-4 md:px-6">
      <div className="flex flex-col lg:flex-row gap-6 md:gap-[24px] items-start lg:items-center">
        <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[48px] leading-tight md:leading-[1.25] lg:leading-[60px] w-full lg:min-w-[618px]">
          Stay Informed, Stay Healthy
        </h2>
        <p className="font-normal text-sm sm:text-base lg:text-[16px] leading-relaxed lg:leading-[28px] text-gray-600">
          Explore our latest articles on wellness, heart health, and disease
          management. Stay up to date with expert advice, patient stories, and
          tips for maintaining a healthier lifestyle.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12 lg:mt-[46px]">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="group cursor-pointer p-4 sm:p-5 md:p-6 hover:bg-gray-50 rounded-xl transition-colors duration-300"
          >
            <div className="relative w-full h-[200px] sm:h-[220px] md:h-[240px] rounded-xl sm:rounded-2xl overflow-hidden mb-4 sm:mb-5 md:mb-6">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={100}
              />
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-[#111827] mb-2 group-hover:text-red-600 transition-colors line-clamp-2">
              {post.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-2">
              {post.description}
            </p>

            <div className="flex items-center">
              <div className="relative w-8 sm:w-10 h-8 sm:h-10 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={post.author.image}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                  sizes="40px"
                />
              </div>
              <div className="ml-3">
                <p className="text-xs sm:text-sm font-semibold text-[#111827]">
                  {post.author.name}
                </p>
                <p className="text-xs sm:text-sm text-gray-500">{post.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8 md:mt-12">
        <button className="bg-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold hover:bg-red-700 transition-colors text-sm sm:text-base">
          EXPLORE OUR BLOGS
        </button>
      </div>
    </section>
  );
};

export default Blogs;
