import React from "react";
import Image from "next/image";
import { blogPosts } from "@/utils/constant";

const Blogs = () => {
  return (
    <section className="py-[64px] flex flex-col gap-[46px] container">
      <div className="flex gap-[24px] items-center">
        <h2 className="font-semibold text-[48px] leading-[60px] min-w-[618px]">
          Stay Informed, Stay Healthy
        </h2>
        <p className="font-normal text-[16px] leading-[28px]">
          Explore our latest articles on wellness, heart health, and disease
          management. Stay up to date with expert advice, patient stories, and
          tips for maintaining a healthier lifestyle.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div key={post.id} className="group cursor-pointer p-6">
            <div className="relative w-full h-[240px] rounded-2xl overflow-hidden mb-6">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                quality={100}
              />
            </div>

            <h3 className="text-xl font-bold text-[#111827] mb-2 group-hover:text-red-600 transition-colors">
              {post.title}
            </h3>
            <p className="text-gray-600 mb-4">{post.description}</p>

            <div className="flex items-center">
              <div className="relative w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src={post.author.image}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="ml-3">
                <p className="text-sm font-semibold text-[#111827]">
                  {post.author.name}
                </p>
                <p className="text-sm text-gray-500">{post.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button className="bg-red-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-red-700 transition-colors">
          EXPLORE OUR BLOGS
        </button>
      </div>
    </section>
  );
};

export default Blogs;
