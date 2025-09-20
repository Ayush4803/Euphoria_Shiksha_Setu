import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Teacher",
    message:
      "Shiksha Setu has helped my students access books they could never afford. The process is seamless and impactful!",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Rohan Verma",
    role: "Donor",
    message:
      "Donating books and funds through Shiksha Setu feels rewarding. I love seeing the real difference it makes.",
    img: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Anita Desai",
    role: "Student",
    message:
      "Thanks to Shiksha Setu, I now have access to a wide range of books that make learning fun and easy!",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

const Home = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-green-50 min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-20 px-4 bg-white shadow-md">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-green-800 mb-4">
          Ensuring Every Child Can Read, Learn & Grow
        </h1>
        <p className="text-lg sm:text-xl text-green-700 max-w-2xl mx-auto mb-6">
          Shiksha Setu collects gently used books and offers them to students
          and schools at a minimal price of INR 10-20 to keep learning affordable.
        </p>
        <button
          onClick={() => navigate("/donate")}
          className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition transform hover:-translate-y-1 hover:scale-105"
        >
          Donate Books
        </button>
      </section>

      {/* How it Works & Impact Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-1">
          <h2 className="text-2xl font-bold text-green-800 mb-4">How it Works</h2>
          <ol className="list-decimal list-inside text-green-700 space-y-2">
            <li>Donate gently used books or pick books from our catalogue.</li>
            <li>We sort, clean and distribute to schools & students.</li>
            <li>Books are offered at INR 10-20 to cover operational costs.</li>
          </ol>
        </div>

        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-1">
          <h2 className="text-2xl font-bold text-green-800 mb-4">Impact</h2>
          <p className="text-green-700">
            We reach government schools and low-cost private schools to support children
            with reading material and educational resources.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 text-center">
        <h2 className="text-3xl font-bold text-green-800 mb-4">Join Us in Making a Difference</h2>
        <p className="text-green-700 mb-6">
          Your small contribution can bring a huge change in a child's life.
        </p>
        <button
          onClick={() => navigate("/donate-funds")}
          className="px-8 py-4 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition transform hover:-translate-y-1 hover:scale-105"
        >
          Donate Funds 💰
        </button>
      </section>

      {/* Testimonial Section (Bottom) */}
      <section className="py-16 bg-green-100">
        <h2 className="text-3xl font-bold text-green-800 text-center mb-12">What People Say</h2>
        <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-lg transition duration-500 transform hover:-translate-y-2 text-center">
          <img
            src={testimonials[current].img}
            alt={testimonials[current].name}
            className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-green-600"
          />
          <p className="text-green-700 mb-4 italic">"{testimonials[current].message}"</p>
          <h3 className="text-green-900 font-bold">{testimonials[current].name}</h3>
          <p className="text-green-600 text-sm">{testimonials[current].role}</p>
        </div>
      </section>
    </div>
  );
};

export default Home;

