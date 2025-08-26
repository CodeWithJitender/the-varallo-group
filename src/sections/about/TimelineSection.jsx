import React, { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const TimelineSection = () => {
  useGSAP(() => {
    let sections = gsap.utils.toArray(".work-item");
    sections.forEach((container, i) => {
      let pin = i === sections.length - 1;
      console.log(pin);

      ScrollTrigger.create({
        trigger: container,
        start: "top top",
        pin: true,
        pinSpacing: pin,
        // markers: true,
      });
    });
  });
  const data = [
    {
      year: "2017",
      title: "The Birth of TVG",
      para: "Managing a court reporting agency means balancing client demands, coordinating with reporters, billing cycles and deadlines all while maintaining your firm's reputation. That's where TVG Management comes in. We help you as your supportive operational partner.",
      img: "/Story.png",
    },
    {
      year: "2017",
      title: "The Birth of TVG",
      para: "Managing a court reporting agency means balancing client demands, coordinating with reporters, billing cycles and deadlines all while maintaining your firm's reputation. That's where TVG Management comes in. We help you as your supportive operational partner.",
      img: "/Story.png",
    },
    {
      year: "2017",
      title: "The Birth of TVG",
      para: "Managing a court reporting agency means balancing client demands, coordinating with reporters, billing cycles and deadlines all while maintaining your firm's reputation. That's where TVG Management comes in. We help you as your supportive operational partner.",
      img: "/Story.png",
    },
  ];

  return (
    <section className="">
      <div className="container-fluid">
        {/* Heading */}
        <div className="text-center md:mb-12">
          <h2 className="text-h2 font-parkinsans">
            Managing a court reporting agency
          </h2>
          <p className="mt-4 font-manrope text-[#00100D] text-xl max-w-4xl mx-auto">
            Managing a court reporting agency means balancing client demands,
            coordinating with reporters, billing cycles and deadlines all while
            maintaining your firm&apos;s reputation.
          </p>
        </div>
      </div>
      {/* Content Grid */}
      {data.map((item, index) => (
        <div className="work-item bg-white" key={index}>
          <div className="max-w-[1600px] m-auto px-4 py-[50px]">
            <div className="flex flex-col md:flex-row gap-8 items-end  ">
              {/* Image */}
              <div className="md:w-[60%]">
                <img
                src={item.img}
                alt="Story"
                className="rounded-2xl w-full shadow-lg"
              />
            </div>

            {/* Text */}
            <div className="md:w-[50%]">
              <p className="text-[#00100D] font-manrope text-base md:text-2xl lg:text-3xl mb-2">
                {item.year}
              </p>
              <h3 className="text-h2 mb-4 font-parkinsans">{item.title}</h3>
              <p className="font-manrope text-[#00100D] text-base md:text-lg lg:text-xl">
                {item.para}
              </p>
            </div>
          </div>
        </div>
        </div>
      ))}
    </section>
  );
};

export default TimelineSection;
