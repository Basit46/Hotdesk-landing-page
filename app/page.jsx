import Contact from "@/components/Contact";
import FeatureSectionTwo from "@/components/FeatureSection2";
import FeatureSectionOne from "@/components/FeatureSectionOne";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Partners from "@/components/Partners";
import Plans from "@/components/Plans";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";

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
    </main>
  );
}
