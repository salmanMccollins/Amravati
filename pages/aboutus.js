import PageHeader from "@/components/common/PageHeader";
import InstaBlock from "@/components/home-components/InstaBlock";
import Testimonials from "@/components/home-components/Testimonials";
import AboutAMV from "@/components/about-components/aboutamv";
export default function aboutus() {
  return (
    <>
      
      <div>
        <PageHeader title="about us"/>
        <AboutAMV/>
        
        <InstaBlock/>
        <Testimonials/>
        </div>
    </>
  );
}
