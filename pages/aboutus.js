import PageHeader from "@/components/common/PageHeader";
import InstaBlock from "@/components/home-components/InstaBlock";
import Testimonials from "@/components/home-components/Testimonials";
import HomeGallery from "@/components/home-components/HomeGallery";
export default function aboutus() {
  return (
    <>
      
      <div>
        <PageHeader title="about us"/>
        <HomeGallery/>
        <Testimonials/>
        <InstaBlock/>
        </div>
    </>
  );
}
