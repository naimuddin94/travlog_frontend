import Container from "@/components/utility/Container";
import BannerContent from "./BannerContent";
import BannerDesignSection from "./BannerDesignSection";

const Banner = () => {
  return (
    <Container>
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <BannerContent />
        <BannerDesignSection />
      </div>
    </Container>
  );
};

export default Banner;
