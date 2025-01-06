import { Expert } from "@/modules/Expert/Expert";
import { Gallery } from "@/modules/Gallery/Gallery";
import { HeroSection } from "@/modules/HeroSection/HeroSection";
import { Testimonails } from "@/modules/Testimonails/Testimonails";

const page = () => {
  return (
    <section>
      <HeroSection />
      <Testimonails />
      <Expert />
      <Gallery />
    </section>
  );
};

export default page;
