import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

export default function AboutAMV() {
  const [open, setOpen] = useState(false);
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
      <section className="bg3 pd-common HomeGallery">
        <div className="container">
          <div className="DetBox1">
            <div className="row">
              <div className="col-md-7">
                <div
                  className="HmT1"
                  data-aos="fade-up"
                  data-aos-duration="800"
                >
                  Discover the History of <br />
                  Our Story
                </div>
                <div
                  className="HmT2"
                  data-aos="fade-left"
                  data-aos-duration="800"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et
                  
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </div>
                <div
                  className="HmT2"
                  data-aos="fade-left"
                  data-aos-duration="800"
                >
                  of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                </div>
                <div
                  className="HmT2"
                  data-aos="fade-left"
                  data-aos-duration="800"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et
                  
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </div>
              </div>
              <div className="col-md-5">
                <Image
                data-aos="fade-up"
                data-aos-duration="800"
                  src="/g1.jpg"
                  layout="responsive"
                  height={"401"}
                  width={"476"}
                  priority={true}
                  className=""
                />
              </div>
            </div>
          </div>
          <div className="DetBox1 DetBox1Mrg">
            <div className="row">
            <div className="col-md-5">
                <Image
                data-aos="fade-up"
                data-aos-duration="800"
                  src="/g2.jpg"
                  layout="responsive"
                  height={"401"}
                  width={"476"}
                  priority={true}
                  className=""
                />
              </div>
              <div className="col-md-7">
                <div
                  className="HmT1"
                  data-aos="fade-up"
                  data-aos-duration="800"
                >
                  Discover the History of <br />
                  Our Mission
                </div>
                <div
                  className="HmT2"
                  data-aos="fade-left"
                  data-aos-duration="800"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et
                  
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </div>
                <div
                  className="HmT2"
                  data-aos="fade-left"
                  data-aos-duration="800"
                >
                  of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                </div>
                <div
                  className="HmT2"
                  data-aos="fade-left"
                  data-aos-duration="800"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et
                  
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </div>
              </div>
              
            </div>
          </div>
          <div className="DetBox1 DetBox1Mrg">
            <div className="row">
              <div className="col-md-7">
                <div
                  className="HmT1"
                  data-aos="fade-up"
                  data-aos-duration="800"
                >
                  Discover the History of <br />
                  Our Mission
                </div>
                <div
                  className="HmT2"
                  data-aos="fade-left"
                  data-aos-duration="800"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et
                  
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </div>
                <div
                  className="HmT2"
                  data-aos="fade-left"
                  data-aos-duration="800"
                >
                  of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                </div>
                <div
                  className="HmT2"
                  data-aos="fade-left"
                  data-aos-duration="800"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et
                  
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </div>
              </div>
              <div className="col-md-5">
                <Image
                data-aos="fade-up"
                data-aos-duration="800"
                  src="/g3.jpg"
                  layout="responsive"
                  height={"401"}
                  width={"476"}
                  priority={true}
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
