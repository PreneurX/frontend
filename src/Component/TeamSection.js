import React from "react";

const teamMembers = [
  {
    name: "Mukund Madhav",
    role: "Founder & CEO",
    image: "/images/mukund.jpg", // Replace with your image path
    bio: "Visionary behind PreneurX, leading the mission to empower students through innovation and talent-based opportunities."
  },
  {
    name: "Ananya Sharma",
    role: "Creative Director",
    image: "/images/ananya.jpg",
    bio: "Crafts compelling experiences and visuals that bring Gen Z engagement to life."
  },
  {
    name: "Rohan Verma",
    role: "Tech Head",
    image: "/images/rohan.jpg",
    bio: "Engineer behind the platform's backbone. Makes sure every student interaction is smooth and scalable."
  },
  {
    name: "Sanya Gupta",
    role: "Marketing Lead",
    image: "/images/sanya.jpg",
    bio: "Connects PreneurX with thousands of students across India through brilliant campaigns and school outreach."
  }
];

const TeamSection = () => {
  return (
<section id="team" className="bg-white py-12 px-4 md:px-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#083ca0] mb-2">Meet the Team</h2>
        <p className="text-gray-600">The people behind PreneurX’s vision, tech, and creativity.</p>
      </div>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-[#f4f6fa] shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-60 object-cover"
            />
            <div className="p-5 text-center">
              <h3 className="text-xl font-semibold text-[#083ca0]">{member.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{member.role}</p>
              <p className="text-sm text-gray-700">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
