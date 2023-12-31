"use client";

import Image from "next/image";
import React from "react";
import CustomButton from "./CustomButton";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const FeatureSectionTwo = () => {
  const imgsContRef = useRef([]);
  const section2Ref = useRef();
  useEffect(() => {
    gsap.from(imgsContRef.current, {
      scale: 0.6,
      duration: 0.5,
      stagger: 0.1,
      scrollTrigger: {
        trigger: section2Ref.current,
        start: "top 30%",
      },
    });
  }, []);
  return (
    <section
      ref={section2Ref}
      className="relative min-h-[880px] w-full flex flex-col xl:flex-row"
    >
      <div className="relative order-2 xl:order-1 w-full xl:w-[50%] h-[80vh] xmd:h-[100vh] xl:h-[880px] overflow-hidden flex bg-black">
        <div
          ref={(e) => imgsContRef.current.push(e)}
          className="absolute left-[-70%] vsm:left-[-40%] xmd:left-[-10%] xl:left-[-30%] top-[50%] translate-y-[-50%] w-[394px] md:w-[511px] h-[249.25px] md:h-[322.38px] border-[4px] border-white overflow-hidden"
        >
          <Image
            src="/featuresImg2.jpg"
            fill
            className="object-contain"
            alt="Workspace Img"
          />
        </div>
        <div
          ref={(e) => imgsContRef.current.push(e)}
          className="absolute right-[-60%] vsm:right-[-40%] xmd:right-[-15%] xl:right-[-30%] top-[50%] translate-y-[-50%] w-[394px] md:w-[511px] h-[394px]  md:h-[511px] rounded-full border-[4px] border-white overflow-hidden"
        >
          <Image
            src="/featuresImg3.jpg"
            fill
            className="object-cover"
            alt="Workspace Img"
          />
        </div>
      </div>

      <div className="order-1 xl:order-2 w-full xl:w-[50%] h-[90vh] xl:h-[880px] py-[54px] vsm:py-[48px] px-[24px] vsm:px-[72px] flex flex-col justify-between">
        <p className="font-unbounded text-[21px] font-bold">NOT JUST DESKS</p>
        <h1 className="font-unbounded text-[34px] vsm:text-[36px] leading-[39.6px] xl:leading-normal xl:text-[48px]">
          CREATIVE SPACES FOR RECORDING, PERFORMANCE AND MORE.
        </h1>
        <div>
          <p className="font-open-sauce-one text-[18px] xl:text-[21px] mb-[48px]">
            At Hotdesk, we have spaces for everyone to do their best work –
            whether that’s amongst buzzing activity or tucked away in a cozy
            nook.
          </p>
          <CustomButton text="EXPLORE FACILITIES" />
        </div>
      </div>
    </section>
  );
};

export default FeatureSectionTwo;
