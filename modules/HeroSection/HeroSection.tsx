"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { HeroSlide } from "./components/HeroSlide";
import "swiper/css";
import "swiper/css/pagination";
import "./style.css";

const heroContent = [
  {
    subtitle: "Best Medical Services in 1 Place",
    title: ["Dedicated", "Human", "Touch"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit urna, tortor pulvinar dolor rhoncus.Tristique sit eros consectetur adipiscing elit.",
  },
  {
    subtitle: "Advanced Healthcare Technology",
    title: ["Modern", "Medical", "Care"],
    description:
      "Experience state-of-the-art medical care with our advanced diagnostic and treatment facilities, ensuring precise and effective healthcare solutions.",
  },
  {
    subtitle: "Expert Healthcare Team",
    title: ["Expert", "Medical", "Staff"],
    description:
      "Our team of dedicated healthcare professionals is committed to providing personalized care and support throughout your medical journey.",
  },
];

export const HeroSection = () => {
  return (
    <div className="hero-wrapper mt-16 flex items-center justify-center">
      <Swiper
        // modules={[Pagination, Autoplay]}
        // pagination={{
        //   clickable: true,
        // }}
        // loop={true}
        // speed={800}
        // allowTouchMove={true}
        // slidesPerView={1}
        // centeredSlides={true}
        // watchSlidesProgress={true}
        // preventInteractionOnTransition={true}
        // className="hero-swiper"
        loop={true}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper hero-swiper"
      >
        {heroContent.map((content, index) => (
          <SwiperSlide key={index}>
            <HeroSlide sectionNumber={(index + 1) as 1 | 2 | 3} {...content} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
