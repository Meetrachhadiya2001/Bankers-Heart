"use client";

import Image from "next/image";
import HeroImage from "@/public/hero-image.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./style.css";

export const HeroSection = () => {
  return (
    <div className="hero-wrapper mt-16 flex items-center justify-center">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        slidesPerView={1}
        centeredSlides={true}
        className="hero-swiper"
      >
        <SwiperSlide>
          <section className="hero-section1 relative">
            <div className="round1" />
            <div className="hero-image">
              <Image
                src={HeroImage}
                alt="hero"
                width={720}
                height={671}
                className="object-contain"
              />
            </div>
            <div className="hero-content">
              <div className="hero-left">
                <span className="subtitle">
                  Best Medical Services in 1 Place
                </span>
                <h1 className="title">
                  Dedicated
                  <br />
                  Human
                  <br />
                  Touch
                </h1>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
                  urna, tortor pulvinar dolor rhoncus.Tristique sit eros
                  consectetur adipiscing elit.
                </p>
                <button className="book-button">BOOK AN APPOINTMENT</button>
              </div>

              <div className="hero-right">
                <div className="service-card">
                  <Image
                    src="/Hero/phone.svg"
                    alt="phone"
                    width={86}
                    height={86}
                    className="icon"
                  />
                  <div className="content">
                    <h3>Emergency Care</h3>
                    <span className="link">CALL NOW →</span>
                  </div>
                </div>

                <div className="service-card">
                  <Image
                    src="/Hero/note.svg"
                    alt="checkup"
                    width={86}
                    height={86}
                    className="icon"
                  />
                  <div className="content">
                    <h3>Health Checkups</h3>
                    <span className="link">CONNECT NOW →</span>
                  </div>
                </div>

                <div className="service-card">
                  <Image
                    src="/Hero/user.svg"
                    alt="user"
                    width={86}
                    height={86}
                    className="icon"
                  />
                  <div className="content">
                    <h3>Online Consultation</h3>
                    <span className="link">CONSULT ONLINE →</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>

        <SwiperSlide>
          <section className="hero-section2 relative">
            <div className="round2" />
            <div className="hero-image">
              <Image
                src={HeroImage}
                alt="hero"
                width={720}
                height={671}
                className="object-contain"
              />
            </div>
            <div className="hero-content">
              <div className="hero-left">
                <span className="subtitle">Advanced Healthcare Technology</span>
                <h1 className="title">
                  Modern
                  <br />
                  Medical
                  <br />
                  Care
                </h1>
                <p className="description">
                  Experience state-of-the-art medical care with our advanced
                  diagnostic and treatment facilities, ensuring precise and
                  effective healthcare solutions.
                </p>
                <button className="book-button">BOOK AN APPOINTMENT</button>
              </div>

              <div className="hero-right">
                <div className="service-card">
                  <Image
                    src="/Hero/phone.svg"
                    alt="phone"
                    width={86}
                    height={86}
                    className="icon"
                  />
                  <div className="content">
                    <h3>Emergency Care</h3>
                    <span className="link">CALL NOW →</span>
                  </div>
                </div>

                <div className="service-card">
                  <Image
                    src="/Hero/note.svg"
                    alt="checkup"
                    width={86}
                    height={86}
                    className="icon"
                  />
                  <div className="content">
                    <h3>Health Checkups</h3>
                    <span className="link">CONNECT NOW →</span>
                  </div>
                </div>

                <div className="service-card">
                  <Image
                    src="/Hero/user.svg"
                    alt="user"
                    width={86}
                    height={86}
                    className="icon"
                  />
                  <div className="content">
                    <h3>Online Consultation</h3>
                    <span className="link">CONSULT ONLINE →</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>

        <SwiperSlide>
          <section className="hero-section3 relative">
            <div className="round3" />
            <div className="hero-image">
              <Image
                src={HeroImage}
                alt="hero"
                width={720}
                height={671}
                className="object-contain"
              />
            </div>
            <div className="hero-content">
              <div className="hero-left">
                <span className="subtitle">Expert Healthcare Team</span>
                <h1 className="title">
                  Expert
                  <br />
                  Medical
                  <br />
                  Staff
                </h1>
                <p className="description">
                  Our team of dedicated healthcare professionals is committed to
                  providing personalized care and support throughout your
                  medical journey.
                </p>
                <button className="book-button">BOOK AN APPOINTMENT</button>
              </div>

              <div className="hero-right">
                <div className="service-card">
                  <Image
                    src="/Hero/phone.svg"
                    alt="phone"
                    width={86}
                    height={86}
                    className="icon"
                  />
                  <div className="content">
                    <h3>Emergency Care</h3>
                    <span className="link">CALL NOW →</span>
                  </div>
                </div>

                <div className="service-card">
                  <Image
                    src="/Hero/note.svg"
                    alt="checkup"
                    width={86}
                    height={86}
                    className="icon"
                  />
                  <div className="content">
                    <h3>Health Checkups</h3>
                    <span className="link">CONNECT NOW →</span>
                  </div>
                </div>

                <div className="service-card">
                  <Image
                    src="/Hero/user.svg"
                    alt="user"
                    width={86}
                    height={86}
                    className="icon"
                  />
                  <div className="content">
                    <h3>Online Consultation</h3>
                    <span className="link">CONSULT ONLINE →</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
