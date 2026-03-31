"use client";
import { motion } from "framer-motion";
export default function Home() {
  const images = [
    "/images/1.jpeg",
    "/images/2.jpeg",
    "/images/4.jpeg",
    "/images/5.jpeg",
    "/images/6.jpeg",
    "/images/11.jpeg",
  ];
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
      name: " shivani",
      desc: "Premium service in Gachibowli and Banjara Hills",
    },
    {
      img: "/images/6.jpeg",
      name: "Ananya",
      desc: "Premium service in Madhapur and Kondapur",
    },

  ];

  return (
    <div className="bg-black text-white min-h-screen px-4 pt-2 pb-20 ">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center py-10"
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4 ">
            Personal Service in Hyderabad
          </h1>
          <p className="text-gray-300 mb-6">
            Available 24/7 in Gachibowli, Madhapur, Kondapur and nearby areas.
          </p>
        </motion.div>
      </div>
      <h1 className="text-2xl font-bold leading-snug ">
        Hyderabad Escort Service - Call & WhatsApp Available Now.
        <div className="bg-gray-900 p-5 rounded-xl mt-6">
          <h2 className="text-xl font-semibold text-green-400 mb-3">
            Premium Service in Hyderabad
          </h2>

          <p className="text-gray-300 text-sm leading-relaxed">
            High profile companionship service available in Hyderabad for
            private meetings, hotel visits, and home service. Safe, secure, and
            fully confidential experience with professional and verified
            profiles.
          </p>

          <ul className="text-gray-400 text-sm mt-4 space-y-1">
            <li>✔ 24x7 Service Available</li>
            <li>✔ Home & Hotel Service</li>
            <li>✔ Safe & Confidential Meetings</li>
            <li>✔ Affordable Premium Experience</li>
          </ul>
        </div>
      </h1>
      <p className="text-gray-600 pt-3">
        Looking for a reliable and confidential escort service in Hyderabad? We
        offer professional companionship with quick response times. Available
        for calls and WhatsApp messaging. Contact us now for discreet and
        personalized service.
      </p>
      <a href="/hyderabad" className="text-green-600 underline  ">
        View Hyderabad Services
      </a>
      <p className="text-gray-600 pt-3">
        Our escort service in Hyderabad is designed to provide you with a safe
        and enjoyable experience. Whether you're looking for companionship for a
        special event or just want to unwind with someone, our team is here to
        assist you. We prioritize your privacy and satisfaction, ensuring that
        every interaction is discreet and tailored to your preferences. Contact
        us today to learn more about our services and how we can make your
        experience unforgettable.
      </p>
      <h2 className="text-xl font-semibold mt-8 mb-4">Areas We Serve</h2>
      <div className="mt-4 space-y-2">
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
      <p className="text-gray-600 leading-relaxed">
        Professional personal service. Available for calls and messaging.
      </p>

      {/* Info Box */}
      <div className="bg-gray-800 p-4 rounded-xl text-center text-gray-300 mb-4">
        Available now for calls and WhatsApp. Quick response guaranteed.
      </div>
      {/* Services Card */}

      <div className="bg-gray-900 p-5 rounded-xl">
        <div className="bg-gray-900 p-5 rounded-xl mt-2">
          <h2 className="text-xl font-semibold text-green-400 mb-3">
            Our Services
          </h2>

          <ul className="text-gray-300 text-sm space-y-1">
            <li>• Premium Companion Service</li>
            <li>• Private Meetings</li>
            <li>• Hotel & Home Visits</li>
            <li>• Friendly & Professional Experience</li>
          </ul>
        </div>
      </div>

      {/* 🔥 Gallery */}

      <div className="flex flex-col gap-6 mt-6">
        {profiles.map((p, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.5 }}
            className="bg-gray-900 rounded-xl overflow-hidden shadow-lg"
          >
            <img src={p.img} alt="profile" className="w-full object-contain" />

            <div className="p-4">
              <h2 className="text-xl font-semibold text-white">{p.name}</h2>

              <p className="text-gray-400 text-sm mt-2">{p.desc}</p>

              <div className="flex gap-3 mt-4">
                <a
                  href="tel:8709045174"
                  className="bg-green-500 px-4 py-2 rounded-lg text-sm"
                >
                  Call
                </a>

                <a
                  href="https://wa.me/8709045174"
                  className="bg-green-600 px-4 py-2 rounded-lg text-sm"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="fixed bottom-0 left-0 right-0 flex z-50">
        <a
          href="tel:+916203501601"
          className="flex-1 bg-green-600 text-white text-center py-4 font-semibold"
        >
          Call Now
        </a>

        <a
          href="https://wa.me/916203501601"
          className="flex-1 bg-gray-900 text-white text-center py-4 font-semibold"
        >
          WhatsApp
        </a>
      </div>

        {/* sticky bottom bar */}

      <div className="fixed bottom-0 left-0 w-full flex z-50">
        <a
          href="tel:8709045174"
          className="w-1/2 bg-green-600 text-white text-center py-3 font-semibold"
        >
          Call Now
        </a>

        <a
          href="https://wa.me/8709045174"
          className="w-1/2 bg-black text-white text-center py-3 font-semibold border-l border-gray-700"
        >
          WhatsApp
        </a>
      </div>

      {/* footer */}

      <footer className="mt-12 border-t border-gray-800 pt-6 text-center text-gray-400 text-sm">
        <p>© 2026 Personal Service Hyderabad. All rights reserved.</p>

        <div className="flex justify-center gap-4 mt-3">
          <a href="/about" className="hover:text-white">
            About
          </a>
          <a href="/services" className="hover:text-white">
            Services
          </a>
          <a href="/hyderabad" className="hover:text-white">
            Hyderabad
          </a>
        </div>

        <p className="mt-3 text-xs text-gray-500">
          Trusted platform offering premium companionship services in Hyderabad.
          Available 24/7 with complete privacy and professional support.
        </p>
      </footer>
    </div>
  );
}
