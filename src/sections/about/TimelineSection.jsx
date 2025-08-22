import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TimelineSection = () => {
  const sectionRef = useRef(null);
  const stepsRef = useRef([]);
  const lineRef = useRef([]);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate timeline steps
      stepsRef.current.forEach((el, i) => {
        gsap.fromTo(
          el,
          { scale: 0.8, opacity: 0.3 },
          {
            scale: 1,
            opacity: 1,
            borderColor: "#3B82F6", // blue-500
            color: "#3B82F6",
            duration: 0.5,
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Animate lines connecting steps
      lineRef.current.forEach((el) => {
        gsap.fromTo(
          el,
          { scaleY: 0, transformOrigin: "top" },
          {
            scaleY: 1,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Animate image
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animate text
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container-fluid">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-h2 font-parkinsans">
            Managing a court reporting agency
          </h2>
          <p className="mt-4 font-manrope text-[#00100D] text-xl max-w-4xl mx-auto">
            Managing a court reporting agency means balancing client demands,
            coordinating with reporters, billing cycles and deadlines all while
            maintaining your firm&apos;s reputation.
          </p>
        </div>

        {/* Content Grid */}
        <div className="flex gap-8 items-center">
          {/* Timeline */}
          <div className="flex md:flex-col items-center justify-center">
            {[1, 2, 3].map((step, index) => (
              <div
                key={index}
                className="relative flex items-center md:flex-col"
              >
                <div
                  ref={(el) => (stepsRef.current[index] = el)}
                  className="w-10 h-10 rounded-full border-2 flex items-center justify-center font-medium border-gray-400 text-gray-500"
                >
                  {step}
                </div>
                {index < 2 && (
                  <div
                    ref={(el) => (lineRef.current[index] = el)}
                    className="md:h-16 md:w-[2px] w-16 bg-gray-300 mx-4 md:mx-0 md:my-2"
                  ></div>
                )}
              </div>
            ))}
          </div>

          {/* Image + Text */}
          <div className="col-span-3 flex gap-8 items-end">
            {/* Image */}
            <div className="w-[60%]" ref={imageRef}>
              <img src="/Story.png" alt="Story" className="rounded-2xl shadow-lg" />
            </div>

            {/* Text */}
            <div className="w-[50%]" ref={textRef}>
              <p className="text-[#00100D] font-manrope text-base md:text-2xl lg:text-3xl mb-2">
                2017
              </p>
              <h3 className="text-h2 mb-4 font-parkinsans">The Birth of TVG</h3>
              <p className="font-manrope text-[#00100D] text-base md:text-lg lg:text-xl">
                Managing a court reporting agency means balancing client
                demands, coordinating with reporters, billing cycles and
                deadlines all while maintaining your firm&apos;s reputation.
                That&apos;s where TVG Management comes in. We help you as your
                supportive operational partner.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
