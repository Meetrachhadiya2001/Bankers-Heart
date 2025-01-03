import Image from "next/image";
import HeroImage from "@/public/hero-image.png";
import "./style.css";

export const HeroSection = () => {
  return (
    <section className="container hero-section relative">
      <div className="round" />
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
          <span className="subtitle">Best Medical Services in 1 Place</span>
          <h1 className="title">
            Dedicated
            <br />
            Human
            <br />
            Touch
          </h1>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit urna,
            tortor pulvinar dolor rhoncus.Tristique sit eros consectetur
            adipiscing elit.
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
  );
};
