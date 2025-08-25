import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";

const teamMembers = [
  {
    name: "Nancy Varallo",
    role: "Founder",
    image: "team-1.jpg",
    linkedin: "#",
  },
  {
    name: "George Catuogno",
    role: "CEO",
    image: "team-2.jpg",
    linkedin: "#",
  },
  {
    name: "Cedar Bushong",
    role: "Director of IT and Marketing",
    image: "team-3.jpg",
    linkedin: "#",
  },
  {
    name: "Ellie Reinhardt",
    role: "Director of Financial Operations",
    image: "team-4.jpg",
    linkedin: "#",
  },
  {
    name: "Mike Schena",
    role: "Director of Business Development",
    image: "team-5.jpg",
    linkedin: "#",
  },
  {
    name: "Sarah Moynihan",
    role: "Director of Court Reporting Operations",
    image: "team-6.jpg",
    linkedin: "#",
  },
  {
    name: "Pat Blaskopf",
    role: "Director of Video Services",
    image: "team-7.jpg",
    linkedin: "#",
  },
  {
    name: "Amelia Schneider",
    role: "Director of Association Services",
    image: "team-8.jpg",
    linkedin: "#",
  },
];

const Team = () => {
  return (
    <section className="py-16 bg-white">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-h2 font-parkinsans">The Pillars of Varallo</h2>
        <p className="font-manrope text-xl mt-2">
          The thinkers, doers and leaders shaping your future.
        </p>
      </div>

      {/* Team Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5  md:gap-10 px-4">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            {/* Image */}
            <div className="overflow-hidden rounded-xl shadow-md">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Info */}
            <div className="mt-4 ">
              <div className="flex justify-between w-full  gap-2">
                <div className="">
                  <h3 className="font-manrope font-medium text-xl">
                    {member.name}
                  </h3>
                  <p className="text-[#6C6C6C] text-base">{member.role}</p>
                </div>

                <div className="">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black hover:text-blue-600"
                    >
                      <FaLinkedin size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Team;
