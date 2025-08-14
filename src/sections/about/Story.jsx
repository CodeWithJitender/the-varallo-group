import React from "react";
import { motion } from "framer-motion";

const timelineData = [
  {
    number: 1,
    year: "2017",
    title: "The Birth of TVG",
    description:
      "Managing a court reporting agency means balancing client demands, coordinating with reporters, billing cycles and deadlines all while maintaining your firm's reputation. That's where TVG Management comes in. We help you as your supportive operational partner.",
    image: "/story-1.jpg",
  },
  {
    number: 2,
    year: "2019",
    title: "Expansion",
    description:
      "TVG expanded operations to serve more agencies nationwide, improving efficiency and coverage.",
    image: "/story-2.jpg",
  },
  {
    number: 3,
    year: "2023",
    title: "Innovation",
    description:
      "We introduced cutting-edge tools to help agencies manage their reporting needs faster and easier.",
    image: "/story-3.jpg",
  },
];

const Story = () => {
  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Managing a court reporting agency</h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Managing a court reporting agency means balancing client demands,
          coordinating with reporters, billing cycles and deadlines all while
          maintaining your firm's reputation.
        </p>
      </div>

      <div className="space-y-20">
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 items-center"
          >
            {/* Timeline Steps */}
            <div className="flex flex-col items-center relative">
              {/* Connector Line */}
              {index !== timelineData.length - 1 && (
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-300 h-full z-0"></div>
              )}
              <div
                className={`relative z-10 flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                  index === 0
                    ? "bg-blue-100 border-blue-400 text-blue-500"
                    : "bg-white border-gray-300 text-gray-500"
                }`}
              >
                {item.number}
              </div>
            </div>

            {/* Image */}
            <motion.div
              initial={{ scale: 0.95 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6 }}
              className="overflow-hidden rounded-xl shadow-md"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Content */}
            <div>
              <p className="text-gray-500">{item.year}</p>
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Story;
