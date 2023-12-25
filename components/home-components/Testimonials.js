import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
export default function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
      <section className="bg3 pd-common HomeGallery">
        <div className="container">
          <div className="TestimonialHeader">
            <div className="row align-items-center">
              <div className="col-md-5">
                <div className="RT2">Food Lovers Feedback</div>
                <div className="RT3">
                  <div class="StarItems">
                    <div class="StarItem">&nbsp;</div>
                    <div class="StarItem">&nbsp;</div>
                    <div class="StarItem">&nbsp;</div>
                    <div class="StarItem">&nbsp;</div>
                    <div class="StarItem">&nbsp;</div>
                  </div>
                </div>
              </div>
              <div className="col-md-7">
                <div class="RT1">
                  Words from Our Happy Customers: Discover the Delight of Dining
                  with Us! At Amaravathi our passion is not only to serve
                  exquisite dishes but to create unforgettable dining
                  experiences.
                </div>
              </div>
            </div>
          </div>
          <div
            className="GallerySlider1 TestimonilSlider"
            data-aos="flip-up"
            data-aos-duration="800"
          >
            <Slider {...settings}>
              <div>
                <div className="TestimonialItem">
                  <div class="ReviewItemBoxItem">
                    <div class="Rv1">Good pricees, yummy food and perfect</div>
                    <div class="Rv2">
                      “Good pricees, yummy food and perfect presentation of
                      dishes, also for shisha lovers it's good fruitful flavor.“
                    </div>
                    <div class="ReviewAddress">
                      <div class="Rname text-uppercase">Firas Altaweel</div>
                      <div class="RLocation text-uppercase">Dubai</div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="TestimonialItem">
                  <div class="ReviewItemBoxItem">
                    <div class="Rv1">Good pricees, yummy food and perfect</div>
                    <div class="Rv2">
                      “Good pricees, yummy food and perfect presentation of
                      dishes, also for shisha lovers it's good fruitful flavor.“
                    </div>
                    <div class="ReviewAddress">
                      <div class="Rname text-uppercase">Firas Altaweel</div>
                      <div class="RLocation text-uppercase">Dubai</div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="TestimonialItem">
                  <div class="ReviewItemBoxItem">
                    <div class="Rv1">Good pricees, yummy food and perfect</div>
                    <div class="Rv2">
                      “Good pricees, yummy food and perfect presentation of
                      dishes, also for shisha lovers it's good fruitful flavor.“
                    </div>
                    <div class="ReviewAddress">
                      <div class="Rname text-uppercase">Firas Altaweel</div>
                      <div class="RLocation text-uppercase">Dubai</div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="TestimonialItem">
                  <div class="ReviewItemBoxItem">
                    <div class="Rv1">Good pricees, yummy food and perfect</div>
                    <div class="Rv2">
                      “Good pricees, yummy food and perfect presentation of
                      dishes, also for shisha lovers it's good fruitful flavor.“
                    </div>
                    <div class="ReviewAddress">
                      <div class="Rname text-uppercase">Firas Altaweel</div>
                      <div class="RLocation text-uppercase">Dubai</div>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
}
