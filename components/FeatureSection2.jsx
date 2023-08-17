import Image from "next/image";
import React from "react";
import CustomButton from "./CustomButton";

const FeatureSectionTwo = () => {
  return (
    <section className="h-[880px] w-full flex">
      <div className="relative w-[50%] h-full overflow-hidden flex bg-black">
        <div className="absolute left-[-30%] top-[50%] translate-y-[-50%] w-[511px] h-[322.38px] border-[4px] border-white overflow-hidden">
          <Image
            src="/featuresImg2.jpg"
            fill
            className="object-contain"
            alt="Workspace Img"
          />
        </div>
        <div className="absolute right-[-30%] top-[50%] translate-y-[-50%] w-[511px] h-[511px] rounded-full border-[4px] border-white overflow-hidden">
          <Image
            src="/featuresImg3.jpg"
            fill
            className="object-contain"
            alt="Workspace Img"
          />
        </div>
      </div>

      <div className="w-[50%] h-full py-[48px] px-[72px] flex flex-col justify-between">
        <p className="font-unbounded text-[21px] font-bold">NOT JUST DESKS</p>
        <h1 className="font-unbounded text-[48px] font-[500] leading-[52.8px]">
          CREATIVE SPACES FOR RECORDING, PERFORMANCE AND MORE.
        </h1>
        <div>
          <p className="font-open-sauce-one text-[21px] mb-[48px]">
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
