import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';
import React,{useEffect} from "react";
export default function PromotionalBlock() {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <>
      <section className="bg1 promotionalBlock">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="PromotionalGrid"  data-aos="fade-left" data-aos-duration="800">
                <Image
                  src="/p1.jpg"
                  layout="responsive"
                  height={"319"}
                  width={"476"}
                  priority={true}
                  className=""
                />
                <div className="PromotionalBlockContent">
                    <div className="PbT1">Offers <br/>25% OFF</div>
                    <div className="PbT2">ON FIRST PURCHASE</div>
                    <a href="#" className="color1">View Menu</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="PromotionalGrid"  data-aos="fade-up" data-aos-duration="800">
                <Image
                  src="/p2.jpg"
                  layout="responsive"
                  height={"319"}
                  width={"476"}
                  priority={true}
                  className=""
                />
                <div className="PromotionalBlockContent">
                    <div className="PbT1">Weekend<br/>
Special</div>
                    <div className="PbT2">ON FIRST PURCHASE</div>
                    <a href="#" className="color2">View Menu</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="PromotionalGrid"  data-aos="fade-right" data-aos-duration="800">
                <Image
                  src="/p3.jpg"
                  layout="responsive"
                  height={"319"}
                  width={"476"}
                  priority={true}
                  className=""
                />
                <div className="PromotionalBlockContent">
                    <div className="PbT1">Sea Food<br/>
Special</div>
                    <div className="PbT2">20% Offers</div>
                    <a href="#" className="color3">View Menu</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
