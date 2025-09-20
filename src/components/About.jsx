import React from "react";

const team = [
  {
    id: 1,
    name: "AYUSH KUMAR",
    role: "Founder & Project Lead ",
    ambition:
      "My ambition is to create a system where no child is deprived of education because of lack of resources.",
    image: "MPICE.jpg",
  },
  {
    id: 2,
    name: "DANISH KAMAAL",
    role: "Operations Manager",
    ambition:
      "I aim to make book donation smooth and impactful, ensuring every contribution reaches the right hands.",
    image: "DB.png",
  },
  {
    id: 3,
    name: "JAY DEB",
    role: "Technical Lead",
    ambition:
      "My goal is to use technology to build scalable platforms that connect donors and students seamlessly.",
    image: "joydeb.jpg",
  },
  {
    id: 4,
    name: "SOMNATH MONDAL",
    role: "Community Coordinator",
    ambition:
      "I want to engage communities to actively support children’s education and create long-lasting change.",
    image: "SM.jpg",
  },
];

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-green-50 px-4 sm:px-6">
        <div className="container text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-900 mb-6">
            About Shiksha Setu
          </h1>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-gray-700 leading-relaxed">
            Shiksha Setu is an initiative to bridge the educational gap by
            providing affordable access to books and learning resources. We
            believe every child deserves the right to read, learn, and grow. Our
            mission is to collect gently used books and distribute them to
            schools and students across the country at minimal prices.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="card bg-white p-6 sm:p-8 shadow-lg rounded-2xl">
            <h2 className="text-2xl sm:text-3xl font-semibold text-green-800 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              To build a world where every child has access to books,
              educational resources, and equal opportunities to learn and grow.
            </p>
          </div>
          <div className="card bg-white p-6 sm:p-8 shadow-lg rounded-2xl">
            <h2 className="text-2xl sm:text-3xl font-semibold text-green-800 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              To create a sustainable system of book donations, cleaning,
              sorting, and redistribution to schools and communities in need —
              making learning affordable for all.
            </p>
          </div>
        </div>
      </section>

      {/* Team with Ambitions */}
      <section className="py-16 sm:py-20 bg-green-50 px-4 sm:px-6">
        <div className="container text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-900 mb-10 sm:mb-12">
            Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
            {team.map((member) => (
              <div
                key={member.id}
                className="bg-white shadow-lg rounded-2xl p-6 sm:p-8 flex flex-col items-center hover:shadow-2xl transition"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-full mb-6 border-4 border-green-600 shadow-md"
                />
                <h3 className="text-xl sm:text-2xl font-semibold text-green-800">
                  {member.name}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base mb-3">
                  {member.role}
                </p>
                <p className="text-gray-700 text-sm sm:text-base italic leading-relaxed">
                  "{member.ambition}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
