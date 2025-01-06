import Blogs from "@/modules/Blogs/Blogs";
import { Expert } from "@/modules/Expert/Expert";
import { ExpertDoctors } from "@/modules/ExpertDoctors/ExpertDoctors";
import { Gallery } from "@/modules/Gallery/Gallery";
import { HeroSection } from "@/modules/HeroSection/HeroSection";
import { PricePlan } from "@/modules/PricePlan/PricePlan";
import { Testimonails } from "@/modules/Testimonails/Testimonails";

const page = () => {
  return (
    <section>
      <HeroSection />
      <Testimonails />
      <Expert />
      <Gallery />
      <ExpertDoctors />
      <PricePlan />
      <Blogs />
    </section>
  );
};

export default page;
