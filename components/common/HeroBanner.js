
import Image from "next/image";
export default function HeroBanner() {
    return (
      <>
        
        <div>
            <div className="SliderImage">
            <Image
                src="/hero.jpg"
                layout="fill"
                priority={true}
                className="MainBanner"
              />
            </div>
        </div>
      </>
    );
  }
  