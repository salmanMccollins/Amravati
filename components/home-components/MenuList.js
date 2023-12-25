
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import Slider from "react-slick";
import ProductGrid from "../common/ProductGrid";
export default function MenuList() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode: true,
        },
      },
    ],
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section className="bg1 MenuList pd-common">
        <div className="container">
          <div
            className="T1 text-center color-fff"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            Trending Now In Town
          </div>
          <div
            className="T2 text-center color-fff"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do{" "}
          </div>
          <div className="slider1" data-aos="flip-up"
            data-aos-duration="800">
            <Slider {...settings}>
                <div>
                    <ProductGrid imageSrc="/m1.jpg" menuTitle="Chicken Biriyani" menuPrice="150"/>
                </div>
                <div>
                    <ProductGrid imageSrc="/m2.jpg" menuTitle="Mutton Kuruma" menuPrice="80"/>
                </div>
                <div>
                    <ProductGrid imageSrc="/m3.jpg" menuTitle="Butter Chicken" menuPrice="70"/>
                </div>
                <div>
                    <ProductGrid imageSrc="/m4.jpg" menuTitle="Chana Masala" menuPrice="50"/>
                </div>
                <div>
                    <ProductGrid imageSrc="/m1.jpg" menuTitle="Chicken Biriyani" menuPrice="55"/>
                </div>
                <div>
                    <ProductGrid imageSrc="/m2.jpg" menuTitle="Fried Rice" menuPrice="69"/>
                </div>
            </Slider>
          </div>
          <div className="MobCenter">
            <a href="javascript:void(0);" className="Slider1Link">Explore More</a>
          </div>
        </div>
      </section>
    </>
  );
}
