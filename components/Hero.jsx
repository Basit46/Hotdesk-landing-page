import Image from "next/image";
import Link from "next/link";
import React from "react";
import CustomButton from "./CustomButton";

const Hero = () => {
  return (
    <section className="relative w-full h-screen md:h-[980px] font-open-sauce-one">
      {/* Hero Background: Gradients + Image */}
      <div className="w-full h-full flex">
        <div className="relative w-[50%] h-full overflow-hidden">
          <div className="absolute top-0 left-0 h-[683px] w-[683px] bg-[#92f0ce] rounded-[1200px] blur-[149.995px] translate-x-[-40%] translate-y-[-40%]" />
          <div className="absolute bottom-0 right-0 h-[683px] w-[683px] bg-[#c7f092] rounded-[1200px] blur-[149.995px] translate-x-[30%] translate-y-[50%]" />
        </div>
        <div className="relative w-[50%] h-full">
          <Image src="/hero_img.jpg" fill priority alt="Hero Image" />
        </div>
      </div>

      {/* Hero Content */}
      <div className="absolute top-0 left-0 w-full h-full px-[27px] flex flex-col justify-center gap-[48px]">
        <div className="hero-text flex flex-col gap-[12px]">
          <div className="flex gap-[12px]">
            <span>SPACE FOR</span> <span>YOUR</span>
          </div>
          <div className="flex gap-[12px]">
            <span>NEXT</span> <span>BIG MOVE.</span>
          </div>
        </div>
        <p className="text-[36px]">
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