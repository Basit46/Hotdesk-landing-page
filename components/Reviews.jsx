"use client";

import Image from "next/image";
import Slider from "react-slick";

const Reviews = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    draggable: true,
    centerPadding: "100px",
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
    <section className="w-full min-h-[855.77px] overflow-hidden py-[80px]">
      <div className="w-fit flex flex-col items-center gap-[50px]">
        {reviewsList.map((review) => (
          <div
            key={review.id}
            className="w-[90%] relative h-fit xl:h-[506.77px] border-black border-[4px] flex flex-col xl:flex-row justify-start items-center"
          >
            <div className="w-full xl:w-[65%] h-full border-b-[4px] xl:border-b-0 xl:border-r-[4px] border-black p-[36px] flex gap-[20px] xl:gap-0 flex-col justify-between">
              <Image
                src={review.logo}
                width="198"
                height="39"
                alt="partner logo"
              />
              <p className="text-[21px] xl:text-[36px] font-open-sauce-one leading-[27.3px] vsm:leading-[46.8px]">
                {review.text}
              </p>
              <div>
                <p className="font-unbounded font-bold text-[21px]">
                  {review.name}
                </p>
                <p className="font-open-sauce-one">{review.role}</p>
              </div>
            </div>
            <div className="w-full xl:w-[35%] h-full flex justify-center items-center p-[30px] xl:p-0">
              <div className="relative border-[4px] border-black h-[200px] vsm:h-[394px] w-[200px] vsm:w-[394px] rounded-full overflow-hidden">
                <Image
                  src={review.img}
                  fill
                  className="object-cover rounded-full"
                  alt="Reviewer"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
