
import HeroBanner from "@/components/common/HeroBanner";
import PromotionalBlock from "@/components/home-components/Promotionalblock";
import MenuList from "@/components/home-components/MenuList";
import OfferBox from "@/components/home-components/OfferBox";
import HomeGallery from "@/components/home-components/HomeGallery";
import InstaBlock from "@/components/home-components/InstaBlock";
import Testimonials from "@/components/home-components/Testimonials";
export default function Home() {
  return (
    <>
      
      <div>
        <HeroBanner/>
        <PromotionalBlock/>
        <MenuList/>
        <OfferBox/>
        <HomeGallery/>
        <Testimonials/>
        <InstaBlock/>
        </div>
    </>
  );
}
