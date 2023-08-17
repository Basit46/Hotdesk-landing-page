import React from "react";
import Image from "next/image";

const Partners = () => {
  return (
    <section className="w-full h-screen bg-partnersbg text-white flex flex-col justify-center gap-[96px]">
      <h1 className="font-[500] font-unbounded text-[48px] text-center">
        JOIN{" "}
        <span className="relative">
          <Image
            className="absolute left-[-2px] bottom-[-20px]"
            src="/lineicon.svg"
            width="288"
            height="20"
            alt="icon"
          />
          <span className="relative">OVER 200</span>
        </span>{" "}
        COMPANIES
      </h1>
      <div className="flex items-center justify-around">
        <Image src="/partner1.svg" width="198" height="39" alt="partner logo" />
        <Image src="/partner2.svg" width="84" height="71" alt="partner logo" />
        <Image src="/partner3.svg" width="140" height="55" alt="partner logo" />
        <Image src="/partner4.svg" width="83" height="73" alt="partner logo" />
        <Image src="/partner5.svg" width="198" height="62" alt="partner logo" />
      </div>
      <h2 className="font-open-sauce-one text-[36px] text-center">
        They choose Hotdesk to get their best work done.
      </h2>
    </section>
  );
};

export default Partners;
