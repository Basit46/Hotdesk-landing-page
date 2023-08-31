"use client";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Reviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  const reviewsList = [
    {
      id: 1,
      logo: "/logo-dark1.svg",
      name: "LISA ANDERSON",
      img: "/img1.jpg",
      role: "Luminous Group",
      text: "“We found the opportunity to hit the ground running with minimal overheads was great. Having a huge variety of facilities at our fingertips has empowered the team to do better work.”",
    },
    {
      id: 2,
      logo: "/logo-dark2.svg",
      name: "ANDREW SIMPSON",
      img: "/img2.jpg",
      role: "Freelance Designer",
      text: "“Hotdesk has been a lifesaver for me as a remote worker. I was tired of working from home and needed a change of scenery, but didn't want the hassle of committing to a long-term lease”",
    },
    {
      id: 3,
      logo: "/logo-dark3.svg",
      name: "LUKE PHILLIPS",
      img: "/img3.jpg",
      role: "Content Creator",
      text: "“Hotdesk has exceeded all our expectations. The staff are incredibly accommodating, and the space is always clean and well-maintained. We love the sense of community that exists here.”",
    },
  ];

  return (
    <section className="w-full h-fit py-[144px] overflow-hidden">
      <Slider {...settings} className="flex">
        {reviewsList.map((review) => (
          <div key={review.id}>
            <div
              key={review.id}
              className="w-[90%] relative h-fit xl:h-[506.77px] vsm:border-black vsm:border-[4px] flex flex-col xl:flex-row justify-start items-center"
            >
              <div className="w-full xl:w-[65%] h-full vsm:border-b-[4px] xl:border-b-0 xl:border-r-[4px] vsm:border-black vsm:p-[36px] flex flex-col gap-[20px] xl:gap-0 justify-between items-center vsm:items-start">
                <Image
                  src={review.logo}
                  width="198"
                  height="39"
                  alt="partner logo"
                />
                <p className="text-[18px] vsm:text-[21px] text-center vsm:text-start xl:text-[36px] font-open-sauce-one leading-[25.2px] vsm:leading-[27.3px] md:leading-[46.8px]">
                  {review.text}
                </p>
                <div>
                  <p className="font-unbounded font-bold text-center vsm:text-start text-[16px] vsm:text-[21px]">
                    {review.name}
                  </p>
                  <p className="font-open-sauce-one text-center vsm:text-start text-[14px] vsm:text-[16px]">
                    {review.role}
                  </p>
                </div>
              </div>
              <div className="w-full xl:w-[35%] h-full flex justify-center items-center p-[30px] xl:p-0">
                <div className="relative border-[4px] border-black h-[278px] vsm:h-[394px] w-[278px] vsm:w-[394px] rounded-full overflow-hidden">
                  <Image
                    src={review.img}
                    fill
                    className="object-cover rounded-full"
                    alt="Reviewer"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Reviews;
