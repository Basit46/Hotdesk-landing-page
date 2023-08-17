import Image from "next/image";
import React from "react";

const Reviews = () => {
  const reviewsList = [
    {
      id: 1,
      logo: "/logo-dark1.svg",
      name: "LISA ANDERSON",
      img: "/img1.jpg",
      role: "Luminous Group",
      text: "“We found the opportunity to hit the ground running with minimal overheads was great. Having a huge variety of facilities at our fingertips has empowered the team to do better work.”",
    },
    // {
    //   id: 2,
    //   logo: "/logo-dark2.svg",
    //   name: "ANDREW SIMPSON",
    //   img: "/img2.jpg",
    //   role: "Freelance Designer",
    //   text: "“Hotdesk has been a lifesaver for me as a remote worker. I was tired of working from home and needed a change of scenery, but didn't want the hassle of committing to a long-term lease”",
    // },
    // {
    //   id: 3,
    //   logo: "/logo-dark3.svg",
    //   name: "LUKE PHILLIPS",
    //   img: "/img3.jpg",
    //   role: "Content Creator",
    //   text: "“Hotdesk has exceeded all our expectations. The staff are incredibly accommodating, and the space is always clean and well-maintained. We love the sense of community that exists here.”",
    // },
  ];

  return (
    <section className="w-full md:h-[855.77px] flex justify-center items-center">
      <div className="w-full overflow-x-hidden">
        <div className="mx-auto w-fit flex justify-center">
          {reviewsList.map((review) => (
            <div
              key={review.id}
              className="w-[90vw] h-[506.77px] border-black border-[4px] flex"
            >
              <div className="w-[65%] h-full border-r-[4px] border-black p-[36px] flex flex-col justify-between">
                <Image
                  src={review.logo}
                  width="198"
                  height="39"
                  alt="partner logo"
                />
                <p className="text-[36px] font-open-sauce-one leading-[46.8px]">
                  {review.text}
                </p>
                <div>
                  <p className="font-unbounded font-bold text-[21px]">
                    {review.name}
                  </p>
                  <p className="font-open-sauce-one">{review.role}</p>
                </div>
              </div>
              <div className="flex-1 grid place-items-center">
                <div className="relative h-[394px] w-[394px] rounded-full border-[4px] border-black overflow-hidden">
                  <Image src={review.img} fill alt="Reviewer" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
