import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import useMediaQuery from "@/hooks/useMediaQuery";
export default function Header() {
  const router = useRouter();
  const isDesktop = useMediaQuery("(min-width: 960px)");
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (open) {
      document.body.classList.add("PanelActivated");
    } else {
      document.body.classList.remove("PanelActivated");
    }
  }, [open]);
  return (
    <>
      <header>
        <div className="container">
          <div className="HeaderFlex">
            {isDesktop && (
              <>
                <div className="HeaderItem">
                  <Link
                    href={"/"}
                    className={
                      router.pathname == "/" ? "link1 active" : "link1"
                    }
                  >
                    Home
                  </Link>
                </div>
                <div className="HeaderItem">
                  <Link
                    href={"/aboutus"}
                    className={
                      router.pathname == "/aboutus" ? "link1 active" : "link1"
                    }
                  >
                    About Us
                  </Link>
                </div>
                <div className="HeaderItem">
                  <Link
                    href={"/catering"}
                    className={
                      router.pathname == "/catering" ? "link1 active" : "link1"
                    }
                  >
                    Catering
                  </Link>
                </div>
              </>
            )}
            <div className="HeaderItem">
              <Link href={"/"}>
                <div className="LogoImageBox">
                  <Image
                    src="/logo.png"
                    layout="responsive"
                    height={"180"}
                    width={"92"}
                    priority={true}
                    className=""
                  />
                </div>
              </Link>
            </div>
            {isDesktop && (
              <>
                <div className="HeaderItem">
                  <Link
                    href={"/offers"}
                    className={
                      router.pathname == "/offers" ? "link1 active" : "link1"
                    }
                  >
                    Offers
                  </Link>
                </div>
                <div className="HeaderItem">
                  <Link
                    href={"/contactus"}
                    className={
                      router.pathname == "/contactus" ? "link1 active" : "link1"
                    }
                  >
                    Contact Us
                  </Link>
                </div>
                <div className="HeaderItem">
                  <Link
                    href={"/menu"}
                    className={
                      router.pathname == "/menu" ? "link1 active" : "link1"
                    }
                  >
                    Order Now
                  </Link>
                </div>
              </>
            )}
            <div className="MenuIconsWrap">
              <div className="HMenuItems">
                {isDesktop && (
                  <>
                    <div className="HMenuItem">
                      <a href="#">
                        <div className="hederMenuIcon whatsapp">&nbsp;</div>
                      </a>
                    </div>
                    <div className="HMenuItem">
                      <a href="#">
                        <div className="hederMenuIcon location">&nbsp;</div>
                      </a>
                    </div>
                  </>
                )}
                <div className="HMenuItem" onClick={() => setOpen(true)}>
                  <div className="hederMenuIcon MenuClickActivator">&nbsp;</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="OverLay1" onClick={() => setOpen(false)}>
          &nbsp;
        </div>
        <div className="SideNav">
          <div className="SideNavHeader">
            <div className="NavLogo">
              <Link href={"/"}>
                <div className="">
                  <Image
                    src="/logo.png"
                    layout="responsive"
                    height={"180"}
                    width={"92"}
                    priority={true}
                    className=""
                  />
                </div>
              </Link>
            </div>
            <div className="CloseBtn1" onClick={() => setOpen(false)}>
              &nbsp;
            </div>
          </div>
          <div className="SideNavLinks">
            <div className="SideNavLinksRow" onClick={() => setOpen(false)}>
              <Link
                href={"/"}
                className={router.pathname == "/" ? "link1 active" : "link1"}
              >
                Home
              </Link>
            </div>
            <div className="SideNavLinksRow" onClick={() => setOpen(false)}>
              <Link
                href={"/"}
                className={router.pathname == "/" ? "link1 active" : "link1"}
              >
                About Us
              </Link>
            </div>
            <div className="SideNavLinksRow" onClick={() => setOpen(false)}>
              <Link
                href={"/"}
                className={router.pathname == "/" ? "link1 active" : "link1"}
              >
                Catering Services
              </Link>
            </div>
            <div className="SideNavLinksRow" onClick={() => setOpen(false)}>
              <Link
                href={"/"}
                className={router.pathname == "/" ? "link1 active" : "link1"}
              >
                Our Offers
              </Link>
            </div>
            <div className="SideNavLinksRow" onClick={() => setOpen(false)}>
              <Link
                href={"/"}
                className={router.pathname == "/" ? "link1 active" : "link1"}
              >
                Contact us
              </Link>
            </div>
            <div className="SideNavLinksRow" onClick={() => setOpen(false)}>
              <Link
                href={"/"}
                className={router.pathname == "/" ? "link1 active" : "link1"}
              >
                Order Now
              </Link>
            </div>
          </div>
          <div className="SideNavFooter">
            <div className="row">
              <div className="col-md-4">
              <Image
                    src="/i1.jpg"
                    layout="responsive"
                    height={"451"}
                    width={"405"}
                    priority={true}
                    className=""
                  />
              </div>
              <div className="col-md-4">
              <Image
                    src="/i2.jpg"
                    layout="responsive"
                    height={"451"}
                    width={"405"}
                    priority={true}
                    className=""
                  />
              </div>
              <div className="col-md-4">
              <Image
                    src="/i3.jpg"
                    layout="responsive"
                    height={"451"}
                    width={"405"}
                    priority={true}
                    className=""
                  />
              </div>
            </div>
          </div>
          <div class="T4">Follow us for mouthwatering food photos, special offers, and a taste of our vibrant dining experience</div>
        </div>
      </header>
    </>
  );
}
