import Contact from "@/components/Contact";
import CustomButton from "@/components/CustomButton";
import FeatureSectionTwo from "@/components/FeatureSection2";
import FeatureSectionOne from "@/components/FeatureSectionOne";
import Footer from "@/components/Footer";
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
      <section className="slide-cont w-full h-[283px] vsm:h-[507.59px] bg-black text-white flex flex-col justify-center gap-[40px] vsm:gap-[120px]">
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
        <h1 className="font-open-sauce-one text-center px-[10px] vsm:px-0 text-[18px] vsm:text-[21px] xmd:text-[28px] xl:text-[36px] tracking-[-0.36px] font-[600]">
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
      <section className="w-full min-h-[816.36px] py-[50px] xl:py-0 bg-bg2 text-white flex flex-col xl:flex-row items-center justify-around ">
        <div className="relative w-fit h-fit">
          <div className="relative w-[90vw] md:w-[511px] h-[216px] vsm:h-[300px] md:h-[322.36px] border-white border-[4px]">
            <Image src="/line3-img2.jpg" fill alt="img" className="" />
          </div>
          <div className="absolute right-[20px] vsm:right-[60px] bottom-[-150px] vsm:bottom-[-200px] w-[180px] vsm:w-[278px] h-[180px] vsm:h-[278px] rounded-full border-white border-[4px] overflow-hidden">
            <Image src="/girlimg.jpg" fill alt="img" className="object-cover" />
          </div>
        </div>
        <div className="mt-[250px] xl:mt-[30px] w-full xl:w-[40%] h-full flex flex-col items-center xl:items-start justify-center gap-[48px]">
          <p className="font-unbounded text-[18px] xmd:text-[21px] font-bold text-center xl:text-start">
            CUSTOMIZE HOTDESK
          </p>
          <h1 className="font-unbounded text-[24px] vsm:text-[28px] xmd:text-[36px] xl:text-[48px] font-[500] leading-[31.2px] vsm:leading-[52.8px] text-center xl:text-start">
            LET’S DISCUSS YOUR TEAM’S REQUIREMENTS.
          </h1>

          <CustomButton text="GET IN TOUCH" reverse />
        </div>
      </section>
      <Footer />
    </main>
  );
}
