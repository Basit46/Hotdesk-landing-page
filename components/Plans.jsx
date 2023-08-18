"use client";

import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Plans = () => {
  const plansList = [
    {
      id: 1,
      title: "SOLO",
      desc: "Workspace options to suit every demand with access to all centres and amenities.",
      price: 250,
      users: 1,
    },
    {
      id: 2,
      title: "TEAM",
      desc: "A coworking plan for your team to work when and where you want.",
      price: 750,
      users: 3,
    },
  ];

  const plansRef = useRef();
  const plansBoxes = useRef([]);

  useEffect(() => {
    gsap.from(plansBoxes.current, {
      scale: 0.7,
      duration: 0.5,
      scrollTrigger: {
        trigger: plansRef.current,
        start: "top 30%",
      },
    });
  }, []);
  return (
    <div
      ref={plansRef}
      className="w-full min-h-[961.97px] py-[50px] xl:py-0 bg-black text-white flex flex-col justify-center gap-[50px] vsm:gap-[120px]"
    >
      <h1 className="font-[500] font-unbounded text-[28px] vsm:text-[36px] xmd:text-[48px] xl:text-[60px] text-center px-[20px] xl:px-[101px] leading-[30.8px] vsm:leading-[66px]">
        ON-DEMAND OPTIONS FOR TEAMS OF{" "}
        <span className="relative">
          <Image
            src="/line.svg"
            width={418}
            height={89}
            className="hidden xl:hidden absolute left-[-5px] top-[3px]"
            alt="line svg"
          />
          <span className="relative">ALL SIZES.</span>
        </span>
      </h1>

      <div className="flex flex-col xl:flex-row gap-[40px] xl:gap-0 items-center justify-start xl:justify-around">
        {plansList.map((plan) => (
          <div
            ref={(e) => plansBoxes.current.push(e)}
            key={plan.id}
            className="w-[85%] xmd:w-[608px] min-h-[417.969px] border-white border-[2px] flex flex-col"
          >
            <h1 className="h-[102.8px] p-[24px] text-[24px] vsm:text-[48px] font-[500] font-unbounded flex items-center">
              {plan.title}
            </h1>
            <p className="border-y-[2px] border-white h-[130px] xmd:h-[108.78px] p-[24px] text-[16px] vsm:text-[21px] font-open-sauce-one">
              {plan.desc}
            </p>
            <div className="h-[110px] vsm:h-[90.39px] px-[24px] border-b-[2px] border-white flex flex-col vsm:flex-row gap-[6px] vsm:gap-[24px] justify-center vsm:justify-start items-start vsm:items-center">
              <span className="px-[24px] py-[9px] rounded-[200px] bg-white font-bold font-open-sauce-one text-black">
                From ${plan.price}/m
              </span>
              <span className="px-[24px] py-[9px] rounded-[200px] bg-white font-bold font-open-sauce-one text-black">
                {plan.users}+ User
              </span>
            </div>
            <div className="flex-1 w-full p-[24px] flex items-center">
              <Link
                href="/"
                className="uppercase w-full py-[18px] bg-white hover:bg-black text-black hover:text-white border-[2px] border-white duration-200 font-unbounded text-[14px] font-bold grid place-items-center"
              >
                SEE {plan.title} PLANS
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
