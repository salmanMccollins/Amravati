import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
export default function PageHeader(props) {

  return (
    <>
      <section>
        <div className="PageHeaderWrap">
            <Image
                src="/hero.jpg"
                layout="fill"
                priority={true}
                className="MainBanner"
            />
            <div className="PageHeaderContent">
                <div>
                    <div className="PageTitle position-relative" >{props.title}</div>
                </div>
            </div>
        </div>
      </section>
    </>
  );
}
