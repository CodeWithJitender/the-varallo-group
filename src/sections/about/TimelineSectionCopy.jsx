import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    year: "2017",
    title: "Managing a court reporting agency",
    desc: "Managing a court reporting agency means balancing client demands, coordinating with reporters, billing cycles and deadlines all while maintaining your firm's reputation.",
    img: "/Story.png"
  },
  {
    year: "2017",
    title: "The Birth of TVG",
    desc: "Managing a court reporting agency means balancing client demands, coordinating with reporters, billing cycles and deadlines all while maintaining your firm's reputation. That's where TVG Management comes in. We help you as your supportive operational partner.",
    img: "/Story.png"
  },
  {
    year: "2017",
    title: "Next Phase",
    desc: "Step 3 content goes here. Add relevant descriptive text and swap the image.",
    img: "/Story.png"
  }
];

const TimelineSection = () => {
  const containerRef = useRef(null);
  const stepRefs = useRef([]);
  const imgRef = useRef(null);
  const textRefs = useRef({ year: null, title: null, desc: null });
  const lineRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Step indicators
      stepRefs.current.forEach((step, idx) => {
        gsap.fromTo(
          step,
          { scale: 0.8, borderColor: "#d1d5db", color: "#9ca3af" },
          {
            scale: 1,
            borderColor: "#3b82f6",
            color: "#3b82f6",
            scrollTrigger: {
              trigger: containerRef.current,
              start: `${idx * 40}% center`,
              end: `${(idx + 1) * 40}% center`,
              scrub: true,
              toggleActions: "play reverse play reverse"
            }
          }
        );
      });

      // Line animations
      lineRefs.current.forEach((line, idx) => {
        gsap.fromTo(
          line,
          { height: "0%" },
          {
            height: "100%",
            scrollTrigger: {
              trigger: containerRef.current,
              start: `${(idx + 0.2) * 40}% center`,
              end: `${(idx + 1) * 40}% center`,
              scrub: true
            }
          }
        );
      });

      // Image fade + scale
      gsap.utils.toArray(stepRefs.current).forEach((_, idx) => {
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: `${idx * 40}% center`,
          end: `${(idx + 1) * 40}% center`,
          onEnter: () => {
            gsap.fromTo(
              imgRef.current,
              { opacity: 0, scale: 1.05 },
              { opacity: 1, scale: 1, duration: 0.6, ease: "power2.out" }
            );
            gsap.fromTo(
              Object.values(textRefs.current),
              { opacity: 0, y: 30 },
              { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" }
            );
          },
          onEnterBack: () => {
            gsap.fromTo(
              imgRef.current,
              { opacity: 0, scale: 1.05 },
              { opacity: 1, scale: 1, duration: 0.6, ease: "power2.out" }
            );
            gsap.fromTo(
              Object.values(textRefs.current),
              { opacity: 0, y: 30 },
              { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" }
            );
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-gray-50 min-h-screen">
      <div
        ref={containerRef}
        className="relative min-h-[200vh] flex items-center justify-center px-6 py-16 container-fluid"
      >
        <div className="flex items-center gap-12 w-full sticky top-1/2 -translate-y-1/2">
          {/* Timeline */}
          <div className="flex flex-col items-center">
            {steps.map((_, idx) => (
              <React.Fragment key={idx}>
                <div
                  ref={(el) => (stepRefs.current[idx] = el)}
                  className="w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl border-2 border-gray-300 text-gray-400 shadow-md"
                >
                  {idx + 1}
                </div>
                {idx < steps.length - 1 && (
                  <div className="relative w-1 h-32 bg-gray-200 my-2 overflow-hidden">
                    <div
                      ref={(el) => (lineRefs.current[idx] = el)}
                      className="absolute top-0 left-0 w-full bg-blue-500 rounded"
                      style={{ height: "0%" }}
                    />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Content */}
          <div className="flex gap-5 items-end content">
            {/* Image */}
            <div className="rounded-2xl  relative ">
              <img
                ref={imgRef}
                src={steps[0].img}
                alt={steps[0].title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text */}
            <div className="max-w-lg flex-1">
              <p ref={(el) => (textRefs.current.year = el)} className="text-[#00100D] font-manrope text-base md:text-2xl lg:text-3xl mb-2">
                {steps[0].year}
              </p>
              <h2 ref={(el) => (textRefs.current.title = el)} className="text-h2 mb-4 font-parkinsans">
                {steps[0].title}
              </h2>
              <p ref={(el) => (textRefs.current.desc = el)} className="font-manrope text-[#00100D] text-base md:text-lg lg:text-xl">
                {steps[0].desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
