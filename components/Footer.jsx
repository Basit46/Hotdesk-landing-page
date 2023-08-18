"use client";

import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerHeaderTexts = useRef([]);
  const footer = useRef();

  useEffect(() => {
    gsap.from(footerHeaderTexts.current, {
      scale: 0.6,
      duration: 0.5,
      stagger: 0.05,
      scrollTrigger: {
        trigger: footer.current,
        start: "top 90%",
      },
    });
  }, []);

  return (
    <footer ref={footer} className="bg-black text-white px-[24px]">
      <div className="py-[100px] border-b-[1px] border-opacity-[0.25] border-white flex flex-col xl:flex-row items-start px-0 vsm:px-[30px] gap-[50px] xl:gap-[200px]">
        <Image src="/logo-white.svg" width="212" height="29" alt="logo" />
        <div className="flex flex-col gap-[12px]">
          <div className="flex gap-[12px]">
            <span ref={(e) => footerHeaderTexts.current.push(e)}>
              Workspace
            </span>
            <span ref={(e) => footerHeaderTexts.current.push(e)}>for</span>
          </div>
          <div className="flex gap-[12px]">
            <span ref={(e) => footerHeaderTexts.current.push(e)}>your</span>
            <span ref={(e) => footerHeaderTexts.current.push(e)}>
              next move.
            </span>
          </div>
        </div>
      </div>

      <div className="links-wrapper pt-[100px] pb-[50px] flex flex-col vsm:flex-row flex-wrap gap-[60px] md:gap-[50px] xmd:gap-[250px]">
        <div className="flex flex-col gap-[24px] vsm:gap-[48px]">
          <h3>CONTACT</h3>
          <p className="font-open-sauce-one text-[18px] xmd:text-[21px] leading-[29.4px]">
            1091 York Street <br /> Prahran <br /> Victoria, 3141
          </p>
          <p className="font-open-sauce-one text-[18px] xmd:text-[21px]">
            <Link
              href="mailTo:contact@hotdesk.io"
              className="underline font-[600]"
            >
              contact@hotdesk.io
            </Link>{" "}
            <br /> (03) 93817 1725
          </p>
        </div>

        <ul className="">
          <h3 className="mb-[24px] vsm:mb-[48px]">NAVIGATE</h3>
          <li>Locations</li>
          <li>Memberships</li>
          <li>Facilities</li>
          <li>News</li>
          <li>Book a tour</li>
          <li>Contact</li>
          <li>About us</li>
          <li>Terms of use</li>
        </ul>

        <ul>
          <h3 className="mb-[24px] vsm:mb-[48px]">TEMPLATE</h3>
          <li>Style Guide</li>
          <li>Getting Started</li>
          <li>Changelog</li>
          <li>Licenses</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
