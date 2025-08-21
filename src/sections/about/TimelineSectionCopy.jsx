import React, { useRef, useEffect, useState } from "react";

const steps = [
  {
    year: "2017",
    title: "Managing a court reporting agency",
    desc: "Managing a court reporting agency means balancing client demands, coordinating with reporters, billing cycles and deadlines all while maintaining your firm's reputation.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop"
  },
  {
    year: "2017",
    title: "The Birth of TVG",
    desc: "Managing a court reporting agency means balancing client demands, coordinating with reporters, billing cycles and deadlines all while maintaining your firm's reputation. That's where TVG Management comes in. We help you as your supportive operational partner.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop"
  },
  {
    year: "2017",
    title: "Next Phase",
    desc: "Step 3 content goes here. Add relevant descriptive text and swap the image.",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop"
  }
];

const TimelineSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef();
  const lineRefs = [useRef(), useRef()];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const containerHeight = containerRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;

      const scrollStart = -rect.top;
      const scrollEnd = containerHeight - viewportHeight;
      const progress = Math.max(0, Math.min(1, scrollStart / scrollEnd));

      const changeStep = (newStep) => {
        if (newStep !== activeStep) {
          setIsTransitioning(true);
          setTimeout(() => {
            setActiveStep(newStep);
            setTimeout(() => setIsTransitioning(false), 50);
          }, 300);
        }
      };

      if (progress < 0.2) {
        changeStep(0);
        lineRefs.forEach((ref) => ref.current && (ref.current.style.height = "0%"));
      } else if (progress < 0.4) {
        changeStep(0);
        if (lineRefs[0].current) {
          const p = (progress - 0.2) / 0.2;
          lineRefs[0].current.style.height = `${p * 100}%`;
        }
      } else if (progress < 0.6) {
        changeStep(1);
        if (lineRefs[0].current) lineRefs[0].current.style.height = "100%";
        if (lineRefs[1].current) lineRefs[1].current.style.height = "0%";
      } else if (progress < 0.8) {
        changeStep(1);
        if (lineRefs[1].current) {
          const p = (progress - 0.6) / 0.2;
          lineRefs[1].current.style.height = `${p * 100}%`;
        }
      } else {
        changeStep(2);
        lineRefs.forEach((ref) => ref.current && (ref.current.style.height = "100%"));
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeStep]);

  return (
    <section className="bg-gray-50 min-h-screen">
      <div
        ref={containerRef}
        className="relative min-h-[200vh] flex items-center justify-center px-6 py-16"
      >
        
        <div className="flex items-center gap-12 max-w-6xl w-full sticky top-1/2 -translate-y-1/2">
          {/* Timeline */}
          <div className="flex flex-col items-center">
            {steps.map((_, idx) => (
              <React.Fragment key={idx}>
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl transition-all duration-300 ${
                    activeStep >= idx
                      ? "border-4 border-blue-500 text-blue-500 shadow-lg"
                      : "border-2 border-gray-300 text-gray-400"
                  }`}
                >
                  {idx + 1}
                </div>
                {idx < steps.length - 1 && (
                  <div className="relative w-1 h-32 bg-gray-200 my-2">
                    <div
                      ref={lineRefs[idx]}
                      className="absolute top-0 left-0 w-full bg-blue-500 rounded transition-all duration-300"
                      style={{ height: "0%" }}
                    />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Image */}
          <div className="w-[400px] h-[500px] rounded-2xl overflow-hidden shadow-xl relative">
            <img
              key={activeStep}
              src={steps[activeStep].img}
              alt={steps[activeStep].title}
              className={`w-full h-full object-cover transition-all duration-500 ${
                isTransitioning ? "scale-105 opacity-0" : "scale-100 opacity-100"
              }`}
            />
          </div>

          {/* Text */}
          <div className="max-w-lg flex-1 transition-all duration-500">
            <p
              className={`text-blue-500 font-semibold mb-2 transition-all duration-500 ${
                isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
              }`}
            >
              {steps[activeStep].year}
            </p>
            <h2
              className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 transition-all duration-500 ${
                isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
              }`}
            >
              {steps[activeStep].title}
            </h2>
            <p
              className={`text-gray-600 text-lg leading-relaxed transition-all duration-500 ${
                isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
              }`}
            >
              {steps[activeStep].desc}
            </p>
          </div>
        </div>
      </div>
      <div className="h-screen" />
    </section>
  );
};

export default TimelineSection;
