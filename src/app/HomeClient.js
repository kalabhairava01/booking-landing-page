"use client";

import { motion } from "framer-motion";

export default function HomeClient() {
  const profiles = [
    {
      img: "/images/1.jpeg",
      name: "Aisha",
      desc: "Friendly and professional companion in Gachibowli",
    },
    {
      img: "/images/2.jpeg",
      name: "Riya",
      desc: "Available for private meetings and events",
    },
    {
      img: "/images/11.jpeg",
      name: "Naira",
      desc: "",
    },
    {
      img: "/images/4.jpeg",
      name: "Mahak Sharma",
      desc: "Exclusive service in Banjara Hills and Jubilee Hills",
    },
    {
      img: "/images/5.jpeg",
      name: "Shivani",
      desc: "Premium service in Gachibowli and Banjara Hills",
    },
    {
      img: "/images/6.jpeg",
      name: "Ananya",
      desc: "Premium service in Madhapur and Kondapur",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen px-4 pt-4 pb-32 ">
      {/* HERO */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-green-400">
          Personal Service in Hyderabad
        </h1>
        <p className="text-gray-400 mt-2 text-sm pb-2 pt-2">
          Available 24/7 in Gachibowli, Madhapur, Kondapur
        </p>
      </motion.div>

      {/* MAIN TITLE */}
      <h2 className="text-xl font-semibold leading-snug pb-4">
        Hyderabad Escort Service - Call & WhatsApp Available Now.
      </h2>

      {/* PREMIUM BOX */}
      <div className="bg-gradient-to-br from-gray-900 to-black border border-green-500/20 rounded-2xl p-5 shadow-lg">
        <h3 className="text-lg font-semibold text-green-400 mb-2">
          Premium Service in Hyderabad
        </h3>

        <p className="text-gray-300 text-sm">
          High profile companionship service available for private meetings,
          hotel visits, and home service. Safe and confidential.
        </p>

        <ul className="text-gray-400 text-sm mt-3 space-y-1">
          <li>✔ 24x7 Service Available</li>
          <li>✔ Home & Hotel Service</li>
          <li>✔ Safe & Confidential Meetings</li>
          <li>✔ Affordable Premium Experience</li>
        </ul>
      </div>

      {/* DESCRIPTION */}
      <p className="text-gray-400 text-sm pb-2 pt-3">
        Looking for a reliable and confidential escort service in Hyderabad? We
        offer professional companionship with quick response times.
      </p>

      <a href="/hyderabad" className="text-green-500 underline">
        View Hyderabad Services
      </a>

      <p className="text-gray-400 text-sm">
        Our escort service ensures a safe and enjoyable experience with privacy
        and satisfaction guaranteed.
      </p>

      {/* AREAS */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Areas We Serve</h2>

        <div className="space-y-1 text-sm">
          <a href="/hyderabad/madhapur" className="block text-green-400">
            Madhapur Service
          </a>
          <a href="/hyderabad/kondapur" className="block text-green-400">
            Kondapur Service
          </a>
          <a href="/hyderabad/gachibowli" className="block text-green-400">
            Gachibowli Service
          </a>
        </div>
      </div>

      {/* INFO */}
      <div className="bg-gray-800 p-4 rounded-xl text-center text-sm text-gray-300 mt-2">
        Available now for calls and WhatsApp. Quick response guaranteed.
      </div>

      {/* SERVICES */}
      <div className="bg-gray-900 p-5 rounded-xl mt-2 mb-2">
        <h2 className="text-lg font-semibold text-green-400 mb-2">
          Our Services
        </h2>

        <ul className="text-gray-300 text-sm space-y-1 ">
          <li>• Premium Companion Service</li>
          <li>• Private Meetings</li>
          <li>• Hotel & Home Visits</li>
          <li>• Friendly & Professional Experience</li>
        </ul>
      </div>

      {/* 🔥 PROFILES (single column premium) */}
      <div className="space-y-6">
        {profiles.map((p, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-gradient-to-b from-gray-900 to-black rounded-2xl overflow-hidden shadow-lg"
          >
            <img src={p.img} className="w-full h-auto object-content bg-black" />

            <div className="p-4">
              <h3 className="text-lg font-semibold">{p.name}</h3>

              <p className="text-gray-400 text-sm mt-2">
                {p.desc || "Premium companion available now"}
              </p>

              <div className="flex gap-2 mt-4">
                <a
                  href="tel:8709045174"
                  className="w-1/2 bg-green-600 text-center py-2 rounded-lg font-semibold"
                >
                  Call
                </a>

                <a
                  href="https://wa.me/8709045174"
                  className="w-1/2 bg-white text-black text-center py-2 rounded-lg font-semibold"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* STICKY BAR */}
      <div className="fixed bottom-0 left-0 w-full flex z-50">
        <a
          href="tel:8709045174"
          className="w-1/2 bg-green-600 text-center py-3 font-semibold"
        >
          Call Now
        </a>

        <a
          href="https://wa.me/8709045174"
          className="w-1/2 bg-black text-center py-3 font-semibold border-l border-gray-700"
        >
          WhatsApp
        </a>
      </div>

      {/* FOOTER */}
      <footer className="mt-12 text-center text-gray-400 text-sm">
        <p>© 2026 Personal Service Hyderabad</p>

        <div className="flex justify-center gap-4 mt-3">
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/hyderabad">Hyderabad</a>
        </div>

        <p className="mt-3 text-xs text-gray-500">
          Trusted platform offering premium companionship services in Hyderabad.
        </p>
      </footer>
    </div>
  );
}
