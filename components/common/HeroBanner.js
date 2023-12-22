import Image from "next/image";
import Link from "next/link";
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
          <div className="SliderImageContent">
            <div className="ContentBox">
              <div className="HrT1">A Celebration of Tradition</div>
              <div className="HrT2">
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
