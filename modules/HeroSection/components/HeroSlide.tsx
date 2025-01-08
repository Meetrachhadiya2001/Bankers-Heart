import Image from "next/image";
import HeroImage from "@/public/hero-image.png";
import { ServiceCard } from "./ServiceCard";

interface HeroSlideProps {
  sectionNumber: 1 | 2 | 3;
  subtitle: string;
  title: string[];
  description: string;
}

export const HeroSlide = ({
  sectionNumber,
  subtitle,
  title,
  description,
}: HeroSlideProps) => {
  const services = [
    {
      icon: "phone",
      title: "Emergency Care",
      actionText: "CALL NOW",
    },
    {
      icon: "note",
      title: "Health Checkups",
      actionText: "CONNECT NOW",
    },
    {
      icon: "user",
      title: "Online Consultation",
      actionText: "CONSULT ONLINE",
    },
  ];

  return (
    <section className={`hero-section${sectionNumber} relative`}>
      <div className={`round${sectionNumber}`} />
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
          <span className="subtitle">{subtitle}</span>
          <h1 className="title">
            {title.map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </h1>
          <p className="description">{description}</p>
          <button className="book-button">BOOK AN APPOINTMENT</button>
        </div>

        <div className="hero-right">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};
