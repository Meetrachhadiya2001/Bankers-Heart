import Image from "next/image";

interface ServiceCardProps {
  icon: string;
  title: string;
  actionText: string;
}

export const ServiceCard = ({ icon, title, actionText }: ServiceCardProps) => {
  return (
    <div className="service-card">
      <Image
        src={`/Hero/${icon}.svg`}
        alt={icon}
        width={86}
        height={86}
        className="icon"
      />
      <div className="content">
        <h3>{title}</h3>
        <span className="link">{actionText} →</span>
      </div>
    </div>
  );
};
