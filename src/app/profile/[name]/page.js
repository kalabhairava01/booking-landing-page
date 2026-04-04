
import { a } from "framer-motion/client";

  const profiles = [
    {
      slug: "aisha-gachibowli",

      name: "Aisha",

      img: "/images/1.jpeg",

      area: "Gachibowli",

      desc: "Friendly and professional companion in Gachibowli",
    },

    {
      slug: "riya-madhapur",

      name: "Riya",

      area: "Madhapur",

      img: "/images/2.jpeg",

      desc: "Available for private meetings and events",
    },

    {
      slug: "naira-kondapur",

      name: "Naira",

      img: "/images/11.jpeg",

      area: "Kondapur",

      desc: "Premium service in Kondapur",
    },
  ];


// meta data
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.name || "";

  const profile = profiles.find((p) => p.slug === slug);

  return {
    title: `${profile?.name || "Profile"} | Hyderabad Service`,
    description: profile?.desc || "Profile page",
  };
}

export default async function ProfilePage({ params }) {

  const resolvedParams = await params;
  const slug = resolvedParams?.name || "";

  const profile = profiles.find((p) => p.slug === slug);

  // fallback (if not found)
  if (!profile) {
    return (
      <div className="bg-black text-white min-h-screen p-4">
        <h1>Profile Not Found</h1>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen p-4 pb-24">
      <h1 className="text-2xl font-bold text-green-400">{profile.name}</h1>

      <img
        src={profile.img}
        alt={profile.name}
        className="rounded-xl w-full mt-3"
      />

      <p className="text-gray-400 mt-3">{profile.desc}</p>

      <p className="text-gray-500 mt-3 text-sm leading-relaxed">
        Looking for premium escort service in Hyderabad? {profile.name} is
        available for private meetings, hotel visits and home service. Enjoy a
        safe, confidential and professional experience with quick response on
        call and WhatsApp.
      </p>

      <p className="text-gray-500 mt-2 text-sm">
        ✔ 24/7 Available ✔ Verified Profile ✔ Safe & Private Service
      </p>
      <div className="mt-4">
        <a href="/hyderabad" className="text-green-400 underline text-sm">
          View Hyderabad Escort Services
        </a>
      </div>
      <p className="text-gray-500 mt-4 text-sm">
        Our escort service platform connects you with trusted and verified
        profiles across Hyderabad including Gachibowli, Madhapur and Kondapur.
        Book now for a premium experience.
      </p>

      <div className="bg-gray-900 p-4 rounded-xl mt-4">
        <ul className="text-sm text-gray-300 space-y-1">
          <li>✔ 24/7 Available</li>
          <li>✔ Safe & Confidential</li>
          <li>✔ Friendly Experience</li>
        </ul>
      </div>
      <p className="text-gray-400 mt-3">
        Our goal is to provide a safe, respectful and confidential experience
        for clients looking for companionship in Hyderabad.
      </p>
      <div className="bg-gray-900 p-4 rounded-xl mt-4">
        <h3 className="text-lg font-semibold mb-2">How It Works</h3>
        <ul className="text-sm text-gray-300 space-y-1">
          <li>✔ Choose profile</li>
          <li>✔ Contact via WhatsApp</li>
          <li>✔ Confirm details privately</li>
          <li>✔ Enjoy safe service</li>
        </ul>
      </div>
    </div>
  );
}
