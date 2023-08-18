"use client";

import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";
import gsap from "gsap";
import { useRef, useEffect } from "react";

const Hero = () => {
  const heroTexts = useRef([]);
  useEffect(() => {
    gsap.from(heroTexts.current, {
      scale: 0.6,
      duration: 0.5,
      stagger: 0.05,
    });
  }, []);
  return (
    <section className="relative w-full h-screen md:h-[980px] font-open-sauce-one">
      {/* Hero Background: Gradients + Image */}
      <div className="w-full h-full flex">
        <div className="relative w-full xl:w-[50%] h-full overflow-hidden">
          <div className="absolute top-0 left-0 h-[683px] w-[683px] bg-[#92f0ce] rounded-[1200px] blur-[149.995px] translate-x-[-40%] translate-y-[-40%]" />
          <div className="absolute bottom-0 right-0 h-[683px] w-[683px] bg-[#c7f092] rounded-[1200px] blur-[149.995px] translate-x-[30%] translate-y-[50%]" />
        </div>
        <div className="hidden xl:block relative w-[50%] h-full">
          <Image src="/hero_img.jpg" fill priority alt="Hero Image" />
        </div>
      </div>

      {/* Hero Content */}
      <div className="absolute top-0 left-0 w-full h-full px-[27px] flex flex-col items-center xl:items-start justify-center gap-[48px]">
        <div className="w-fit hero-text flex flex-col items-center xl:items-start gap-[12px]">
          <div className="w-fit flex gap-[12px] justify-center">
            <span ref={(e) => heroTexts.current.push(e)}>SPACE FOR</span>{" "}
            <span ref={(e) => heroTexts.current.push(e)}>YOUR</span>
          </div>
          <div className="w-fit flex gap-[12px]">
            <span ref={(e) => heroTexts.current.push(e)}>NEXT</span>{" "}
            <span ref={(e) => heroTexts.current.push(e)}>BIG MOVE.</span>
          </div>
        </div>
        <p className="text-[21px] xmd:text-[36px] text-center">
          Creative Co-Working Spaces <br /> in the heart of Melbourne.
        </p>
        <CustomButton text="VIEW WORKSPACES" />
        <div className="text-[21px]">
          or{" "}
          <Link href="/" className="font-[600] underline">
            Book a Tour
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
