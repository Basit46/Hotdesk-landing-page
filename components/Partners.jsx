"use client";

import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Partners = () => {
  const partnersRef = useRef();
  const logosRef = useRef([]);

  useEffect(() => {
    gsap.from(logosRef.current, {
      opacity: 0,
      scale: 0.7,
      duration: 1,
      stagger: 0.1,
      scrollTrigger: {
        trigger: partnersRef.current,
        start: "top 30%",
      },
    });
  }, []);

  return (
    <section
      ref={partnersRef}
      className="w-full min-h-screen bg-partnersbg text-white flex flex-col justify-center gap-[96px]"
    >
      <h1 className="font-[500] font-unbounded text-[28px] xmd:text-[36px] xl:text-[48px] text-center">
        JOIN{" "}
        <span className="relative">
          <Image
            className="absolute left-[-30px] xmd:left-[-2px] bottom-[-60px] xmd:bottom-[-20px]"
            src="/lineicon.svg"
            width="288"
            height="20"
            alt="icon"
          />
          <span className="relative">OVER 200</span>
        </span>{" "}
        COMPANIES
      </h1>
      <div className="flex flex-wrap gap-[10px] xl:gap-0 items-center justify-around">
        <Image
          ref={(e) => logosRef.current.push(e)}
          src="/partner1.svg"
          width="198"
          height="39"
          alt="partner logo"
        />
        <Image
          ref={(e) => logosRef.current.push(e)}
          src="/partner2.svg"
          width="84"
          height="71"
          alt="partner logo"
        />
        <Image
          ref={(e) => logosRef.current.push(e)}
          src="/partner3.svg"
          width="140"
          height="55"
          alt="partner logo"
        />
        <Image
          ref={(e) => logosRef.current.push(e)}
          src="/partner4.svg"
          width="83"
          height="73"
          alt="partner logo"
        />
        <Image
          ref={(e) => logosRef.current.push(e)}
          src="/partner5.svg"
          width="198"
          height="62"
          alt="partner logo"
        />
      </div>
      <h2 className="font-open-sauce-one text-[18px] vsm:text-[21px] xmd:text-[28px] xl:text-[36px] text-center">
        They choose Hotdesk to get their best work done.
      </h2>
    </section>
  );
};

export default Partners;
