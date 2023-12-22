import Image from "next/image";
import Link from "next/link";
import AOS from 'aos';
import 'aos/dist/aos.css';
import React,{useEffect} from "react";
export default function HeroBanner() {
  useEffect(() => {
    AOS.init();
  }, [])
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
          <div className="SliderImageContent">
            <div className="ContentBox">
              <div className="HrT1" data-aos="fade-left" data-aos-duration="800">A Celebration of Tradition</div>
              <div className="HrT2"  data-aos="fade-right" data-aos-duration="800">
                Flavorsome spicy Chicken Biryani to enlighten your taste buds{" "}
              </div>
              <div className="ContentBoxButtons">
                <a href="#">Order Now</a>
                <Link href={"/offers"}>View Offers</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
