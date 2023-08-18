"use client";

import Image from "next/image";
import React from "react";
import CustomButton from "./CustomButton";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const FeatureSectionOne = () => {
  const imgContRef = useRef();
  const sectionRef = useRef();
  useEffect(() => {
    gsap.from(imgContRef.current, {
      scale: 0.6,
      duration: 0.5,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 30%",
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-[880px] w-full flex flex-col xl:flex-row"
    >
      <div className="w-full xl:w-[50%] h-[80vh] xl:h-full py-[48px] px-[72px] flex flex-col justify-between">
        <p className="font-unbounded text-[21px] font-bold">HOTDESK YOUR WAY</p>
        <h1 className="font-unbounded text-[36px] leading-[39.6px] xl:leading-normal xl:text-[48px] font-[500]">
          SILENT OR BUZZING. SPACES FOR EVERY VIBE.
        </h1>
        <div>
          <p className="font-open-sauce-one text-[18px] xl:text-[21px] mb-[48px]">
            At Hotdesk, we have spaces for everyone to do their best work –
            whether that’s amongst buzzing activity or tucked away in a cozy
            nook.
          </p>
          <CustomButton text="SEE MEMBERSHIPS" />
        </div>
      </div>

      <div className="relative w-full xl:w-[50%] h-[100vh] xl:h-full overflow-hidden grid place-items-center">
        <div className="absolute top-0 right-0 h-[683px] w-[683px] bg-[#9492f0] rounded-[1200px] blur-[149.995px] translate-x-[25%] -translate-y-[50%]" />
        <div className="absolute bottom-0 right-0 h-[683px] w-[683px] bg-[#92f0ce] rounded-[1200px] blur-[149.995px]  translate-y-[50%]" />
        <div
          ref={imgContRef}
          className="relative z-[2] h-[511px] w-[511px] rounded-full border-[4px] border-black overflow-hidden"
        >
          <Image
            src="/featuresImg1.jpg"
            fill
            className="object-contain"
            alt="Workspace Img"
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureSectionOne;
