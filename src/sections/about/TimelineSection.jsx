import React from "react";
// import StoryImg from "../assets/Story.png"; // adjust path as needed

const TimelineSection = () => {
  return (
    <section className="">
      <div className="container-fluid">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-h2  font-parkinsans">
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
                  className={`w-10 h-10 rounded-full border-2 flex items-center justify-center font-medium 
                ${
                  step === 1
                    ? "border-blue-500 text-blue-500"
                    : "border-gray-400 text-gray-500"
                }`}
                >
                  {step}
                </div>
                {index < 2 && (
                  <div className="md:h-16 md:w-[2px] w-16  bg-gray-300 mx-4 md:mx-0 md:my-2"></div>
                )}
              </div>
            ))}
          </div>

          <div className="col-span-3 flex gap-8 items-end">
            {/* Image */}
            <div className="w-[60%]">
              <img src="/Story.png" alt="Story" className="" />
            </div>

            {/* Text */}
            <div className="w-[50%]">
              <p className="text-[#00100D] font-manrope text-base md:text-2xl lg:text-3xl mb-2">
                2017
              </p>
              <h3 className="text-h2  mb-4 font-parkinsans">
                The Birth of TVG
              </h3>
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
