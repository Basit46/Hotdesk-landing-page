import Image from "next/image";
import React from "react";
import CustomButton from "./CustomButton";

const TextBox = ({ img, text }) => {
  return (
    <span className="text-box">
      <Image src={img} width={48} height={48} alt="Icon" />
      <p>{text}</p>
    </span>
  );
};

const ImgBox = ({ img, rounded }) => {
  return (
    <span
      className={`${
        rounded ? "w-[72px] h-[72px] rounded-full" : "w-[167px] h-[72px]"
      } img-box relative`}
    >
      <Image src={img} fill className="object-cover" alt="img" />
    </span>
  );
};

const Services = () => {
  return (
    <section className="services w-full md:h-[994.39px] relative overflow-hidden bg-[#f5f5f5]">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 h-[683px] w-[683px] bg-[#92f0ce] rounded-[1200px] blur-[149.995px] translate-x-[-40%] translate-y-[-40%]" />
      <div className="absolute bottom-0 right-0 h-[683px] w-[683px] bg-[#9492f0] rounded-[1200px] blur-[149.995px] translate-x-[25%] translate-y-[50%]" />

      {/* Content */}
      <div className="w-full h-full relative flex flex-col justify-center gap-[96px] items-center">
        <h1 className="text-black font-unbounded text-[48px] font-[500] text-center">
          FOR ALL HOTDESK MEMBERS
        </h1>

        <div className="flex flex-col justify-center items-center gap-[18px]">
          <div className="flex items-center justify-center gap-[18px]">
            <TextBox img="/line1-icon1.svg" text="24/7 Access" />
            <ImgBox img="/line1-img1.jpg" />
            <TextBox img="/line1-icon2.svg" text="Concierge" />
            <ImgBox img="/line1-img2.jpg" rounded />
          </div>
          <div className="flex items-center justify-center gap-[18px]">
            <ImgBox img="/line2-img1.jpg" />
            <TextBox img="/line2-icon1.svg" text="Snack Bar" />
            <ImgBox img="/line2-img2.jpg" rounded />
            <TextBox img="/line2-icon2.svg" text="Gigabit Internet" />
          </div>
          <div className="flex items-center justify-center gap-[18px]">
            <TextBox img="/line3-icon1.svg" text="Studios" />
            <ImgBox img="/line3-img1.jpg" rounded />
            <TextBox img="/line3-icon2.svg" text="Mail Handling" />
            <ImgBox img="/line3-img2.jpg" />
          </div>
        </div>

        <div className="flex flex-col items-center gap-[48px]">
          <p className="w-[70%] text-[36px] font-open-sauce-one text-center">
            That’s just the beginning, see the entire range of Hotdesk
            membership amenities.
          </p>
          <CustomButton text="BOOK A TOUR" />
        </div>
      </div>
    </section>
  );
};

export default Services;