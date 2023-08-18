import Contact from "@/components/Contact";
import CustomButton from "@/components/CustomButton";
import FeatureSectionTwo from "@/components/FeatureSection2";
import FeatureSectionOne from "@/components/FeatureSectionOne";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Partners from "@/components/Partners";
import Plans from "@/components/Plans";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <section className="slide-cont w-full h-[507.59px] bg-black text-white flex flex-col justify-center gap-[120px]">
        <div className="relative w-full overflow-x-hidden">
          <div className="slide w-fit px-[96px] flex items-center gap-[48px]">
            <ul className="relative w-fit flex gap-[96px] items-center font-unbounded">
              <li>hawthorn</li>
              <li>richmond</li>
              <li>south yarra</li>
              <li>windsor</li>
              <li>hawthorn</li>
              <li>richmond</li>
              <li>south yarra</li>
              <li>windsor</li>
              <li className="bg-white text-black rounded-[200px] text-[21px] font-[700] px-[24px] py-[9px]">
                NEW!
              </li>
            </ul>
            <ul className="relative w-fit flex gap-[96px] items-center font-unbounded">
              <li>hawthorn</li>
              <li>richmond</li>
              <li>south yarra</li>
              <li>windsor</li>
              <li>hawthorn</li>
              <li>richmond</li>
              <li>south yarra</li>
              <li>windsor</li>
              <li className="bg-white text-black rounded-[200px] text-[21px] font-[700] px-[24px] py-[9px]">
                NEW!
              </li>
            </ul>
          </div>
        </div>
        <h1 className="font-open-sauce-one text-center text-[36px] tracking-[-0.36px] font-[600]">
          New creative co-working spaces opening in 2023.
        </h1>
      </section>
      <FeatureSectionOne />
      <FeatureSectionTwo />
      <Services />
      <Plans />
      <Partners />
      <Reviews />
      <Contact />
      <section className="w-full md:h-[816.36px] bg-bg2 text-white flex items-center justify-around ">
        <div className="relative w-fit h-fit">
          <div className="relative w-[511px] h-[322.36px] border-white border-[4px]">
            <Image src="/line3-img2.jpg" fill alt="img" className="" />
          </div>
          <div className="absolute right-[80px] bottom-[-200px] w-[278px] h-[278px] rounded-full border-white border-[4px] overflow-hidden">
            <Image src="/girlimg.jpg" fill alt="img" className="object-cover" />
          </div>
        </div>
        <div className="w-[40%] h-full flex flex-col justify-center gap-[48px]">
          <p className="font-unbounded text-[21px] font-bold">
            CUSTOMIZE HOTDESK
          </p>
          <h1 className="font-unbounded text-[48px] font-[500] leading-[52.8px]">
            LET’S DISCUSS YOUR TEAM’S REQUIREMENTS.
          </h1>

          <CustomButton text="GET IN TOUCH" reverse />
        </div>
      </section>
    </main>
  );
}
