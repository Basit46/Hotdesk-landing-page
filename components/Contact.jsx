"use client";

import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <section className="services w-full md:h-[1337.38px] relative overflow-hidden bg-[#f5f5f5] grid place-items-center">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 h-[683px] w-[683px] bg-[#c7f092] rounded-[1200px] blur-[149.995px] translate-x-[-40%] translate-y-[-40%]" />
      <div className="absolute bottom-0 right-0 h-[683px] w-[683px] bg-[#9492f0] rounded-[1200px] blur-[149.995px] translate-x-[25%] translate-y-[50%]" />{" "}
      {/* Content */}
      <div className="relative w-[70%]">
        <div className="mx-auto relative w-fit">
          <h1 className="mb-[40px] font-unbounded text-[48px] font-[500] text-center">
            HOW CAN HOTDESK WORK <br /> FOR YOUR TEAM?
          </h1>
          <h2 className="font-open-sauce-one text-[36px] text-center">
            Hit the form and we’ll be in touch to discuss.
          </h2>
          <Image
            src="/arrow-icon.svg"
            width={49}
            height={161}
            alt="arrow"
            className="absolute top-[100px] right-[-130px]"
          />
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mx-auto mt-[70px] w-full flex flex-col gap-[48px] items-center"
        >
          <div className="w-full flex justify-between">
            <div className="w-[40%]">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" />
            </div>
            <div className="w-[40%]">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" />
            </div>
          </div>
          <div className="w-full">
            <label htmlFor="cname">COMPANY NAME (OPTIONAL)</label>
            <input type="text" id="cname" />
          </div>
          <div className="w-full">
            <label htmlFor="comments">COMMENTS OR QUESTIONS</label>
            <textarea id="comments" className="h-[200px]"></textarea>
          </div>
          <button className="w-full py-[18px] px-[36px] border-black bg-black hover:bg-white text-white hover:text-black duration-200 border-[2px] font-unbounded text-[14px] font-bold">
            SUBMIT FORM
          </button>
          <p className="font-open-sauce-one text-[21px]">See you soon!✌️</p>
        </form>
      </div>
    </section>
  );
};

export default Contact;
