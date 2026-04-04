const profiles = [
  {
    slug: "aisha-gachibowli",
    name: "Aisha",
    img: "/images/1.jpeg",
    desc: "Friendly and professional companion in Gachibowli",
  },
  {
    slug: "riya-madhapur",
    name: "Riya",
    img: "/images/2.jpeg",
    desc: "Available for private meetings and events",
  },
  {
    slug: "naira-kondapur",
    name: "Naira",
    img: "/images/11.jpeg",
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
  


