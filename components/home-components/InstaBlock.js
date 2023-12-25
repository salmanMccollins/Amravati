import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
export default function InstaBlock() {
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
      <section className="bg4 pd-common HomeGallery">
        <div className="container">
          <div className="InstaGalleryHeader color-fff">
            <div className="row">
              <div className="col-md-5">
                <div
                  class="InstraaLftBox"
                  data-aos="fade-up"
                  data-aos-duration="800"
                >
                  <div class="InstraaLftBoxL">
                    <span class="InstaIcon">&nbsp;</span>
                  </div>
                  <div class="InstraaLftBoxR">#connectAmaravathi</div>
                </div>
              </div>
              <div className="col-md-7">
                <div
                  className="InT1"
                  data-aos="fade-up"
                  data-aos-duration="800"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </div>
              </div>
            </div>
          </div>
          <div
            className="GallerySlider1 InstaGallery"
            data-aos="flip-up"
            data-aos-duration="800"
          >
            <Slider {...settings}>
              <div>
                <div className="GelleryItem">
                  <a href="https://www.instagram.com/" target="_blank">
                    <Image
                      src="/in1.jpg"
                      layout="responsive"
                      height={"451"}
                      width={"405"}
                      priority={true}
                      className=""
                    />
                  </a>
                </div>
              </div>
              <div>
                <div className="GelleryItem">
                  <a href="https://www.instagram.com/" target="_blank">
                    <Image
                      src="/in2.jpg"
                      layout="responsive"
                      height={"451"}
                      width={"405"}
                      priority={true}
                      className=""
                    />
                  </a>
                </div>
              </div>
              <div>
                <div className="GelleryItem">
                  <a href="https://www.instagram.com/" target="_blank">
                    <Image
                      src="/in3.jpg"
                      layout="responsive"
                      height={"451"}
                      width={"405"}
                      priority={true}
                      className=""
                    />
                  </a>
                </div>
              </div>
              <div>
                <div className="GelleryItem">
                  <a href="https://www.instagram.com/" target="_blank">
                    <Image
                      src="/in4.jpg"
                      layout="responsive"
                      height={"451"}
                      width={"405"}
                      priority={true}
                      className=""
                    />
                  </a>
                </div>
              </div>
              <div>
                <div className="GelleryItem">
                  <a href="https://www.instagram.com/" target="_blank">
                    <Image
                      src="/in1.jpg"
                      layout="responsive"
                      height={"451"}
                      width={"405"}
                      priority={true}
                      className=""
                    />
                  </a>
                </div>
              </div>
              <div>
                <div className="GelleryItem">
                  <a href="https://www.instagram.com/" target="_blank">
                    <Image
                      src="/in2.jpg"
                      layout="responsive"
                      height={"451"}
                      width={"405"}
                      priority={true}
                      className=""
                    />
                  </a>
                </div>
              </div>
              <div>
                <div className="GelleryItem">
                  <a href="https://www.instagram.com/" target="_blank">
                    <Image
                      src="/in3.jpg"
                      layout="responsive"
                      height={"451"}
                      width={"405"}
                      priority={true}
                      className=""
                    />
                  </a>
                </div>
              </div>
              <div>
                <div className="GelleryItem">
                  <a href="https://www.instagram.com/" target="_blank">
                    <Image
                      src="/in4.jpg"
                      layout="responsive"
                      height={"451"}
                      width={"405"}
                      priority={true}
                      className=""
                    />
                  </a>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
}
