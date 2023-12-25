import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
export default function OfferBox() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section>
        <div className="OfferImageBox">
          <Image
            src="/horo3.jpg"
            layout="responsive"
            height={"534"}
            width={"1440"}
            priority={true}
            className=""
          />
          <div className="OfferBoxContent container">
            <div className="OfferTexts ">
              <div
                className="OfferT1"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                Discount
              </div>
              <div
                className="OfferT2"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                15% OFF
              </div>
              <div
                className="OfferT1"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                On Dine in
              </div>
              <div data-aos="fade-up"
                data-aos-duration="800">
                <a href="javascript:void(0)" className="OfferT3">
                    Order Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
