import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect , useState } from "react";
import Slider from "react-slick";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

export default function HomeGallery() {
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
          <div
            className="HmT1 text-center"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            Discover the Delights of <br />
            Fine Real Traditional Dining
          </div>
          <div
            className="HmT2 text-center"
            data-aos="fade-left"
            data-aos-duration="800"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </div>
          <div className="GallerySlider1" data-aos="flip-up"
            data-aos-duration="800">
            <Slider {...settings}>
              <div>
                <div className="GelleryItem" onClick={() => setOpen(true)}>
                  <Image
                    src="/g1.jpg"
                    layout="responsive"
                    height={"401"}
                    width={"476"}
                    priority={true}
                    className=""
                  />
                </div>
              </div>
              <div>
                <div className="GelleryItem" onClick={() => setOpen(true)}>
                  <Image
                    src="/g2.jpg"
                    layout="responsive"
                    height={"401"}
                    width={"476"}
                    priority={true}
                    className=""
                  />
                </div>
              </div>
              <div>
                <div className="GelleryItem" onClick={() => setOpen(true)}>
                  <Image
                    src="/g3.jpg"
                    layout="responsive"
                    height={"401"}
                    width={"476"}
                    priority={true}
                    className=""
                  />
                </div>
              </div>
              <div>
                <div className="GelleryItem" onClick={() => setOpen(true)}>
                  <Image
                    src="/g1.jpg"
                    layout="responsive"
                    height={"401"}
                    width={"476"}
                    priority={true}
                    className=""
                  />
                </div>
              </div>
              <div>
                <div className="GelleryItem" onClick={() => setOpen(true)}>
                  <Image
                    src="/g2.jpg"
                    layout="responsive"
                    height={"401"}
                    width={"476"}
                    priority={true}
                    className=""
                  />
                </div>
              </div>
              <div>
                <div className="GelleryItem" onClick={() => setOpen(true)}>
                  <Image
                    src="/g3.jpg"
                    layout="responsive"
                    height={"401"}
                    width={"476"}
                    priority={true}
                    className=""
                  />
                </div>
              </div>
            </Slider>
            <Lightbox
          open={open}
          close={() => setOpen(false)}
          plugins={[Thumbnails]}
          slides={[
            { src: "/g1.jpg" },
            { src: "/g2.jpg" },
            { src: "/g3.jpg" },
            { src: "/g1.jpg" },
            { src: "/g2.jpg" },
            { src: "/g3.jpg" },
            { src: "/g1.jpg" },
            { src: "/g2.jpg" },
            { src: "/g3.jpg" },
            
          ]}
        />
          </div>
        </div>
      </section>
    </>
  );
}
