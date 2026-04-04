
export async function generateMetadata({ params }) {

  const resolvedParams = await params;
  const raw = resolvedParams?.area || "";
  const clean = raw
  .replace("-escort-service", "")
   .replace("-call-girls", "")
  .replace("-independent-escort", "")
  .replace("-vip-escort", "")
  .replace(/-/g, " ");


  return {
    title: `${clean} Escort Service ❤️ 24/7 Call Now | WhatsApp Available`,
    description: `Best escort service in ${clean}. Available 24/7 with instant booking. Call or WhatsApp now for fast and private service.`,
  };
}



export default async function AreaPage({ params }) {

  const resolvedParams = await params;
  const raw = resolvedParams?.area || "";

   const clean = raw
     .replace("-escort-service", "")
     .replace("-call-girls", "")
     .replace("-independent-escort", "")
     .replace("-vip-escort", "")
     .replace(/-/g, " ");
  const variations = [
    "premium companionship service",
    "high profile escort service",
    "professional personal service",
    "exclusive private service",
  ];
  
  const randomText = variations[Math.floor(Math.random() * variations.length)];

  const areaContent = {
    "gachibowli escort service":
      "Best service near IT hubs, hotels and corporate areas in Gachibowli.",

    "madhapur escort service":
      "Available near Hitech City, premium hotels and nightlife areas in Madhapur.",

    "kondapur escort service":
      "Fast and reliable service in residential and hotel areas of Kondapur.",

    "banjara hills escort service":
      "Exclusive service in luxury hotels and VIP areas of Banjara Hills.",

    "jubilee hills escort service":
      "Premium service available in high-profile areas of Jubilee Hills.",
  };

  return (
    <div className="bg-black text-white min-h-screen p-4 space-y-6">
      {/* TITLE */}
      <h1 className="text-2xl font-bold text-green-400">
        {clean} Escort Service
      </h1>
      <p className="text-green-400 text-sm mt-2">
        🔥 Available Now | Quick Response | 100% Privacy
      </p>

      <img
        src="/images/1.jpeg"
        alt={`${clean} escort service Hyderabad`}
        className="rounded-xl mt-3 w-full"
      />

      {/* INTRO */}

      <p className="text-gray-400 text-sm">
        We provide {randomText} in {clean} with 24/7 availability, fast response
        and complete privacy.
      </p>
      <p className="text-gray-500 text-sm mt-3">
        ✔ Trusted by clients across Hyderabad ✔ Fast response within minutes ✔
        Safe and confidential service
      </p>

      {/* INFO BOX */}
      <div className="bg-gray-900 p-4 rounded-xl">
        <h2 className="font-semibold mb-2">Our Services in {clean}</h2>

        <ul className="text-gray-300 text-sm space-y-1">
          <li>✔ 24/7 Service Available</li>
          <li>✔ Home & Hotel Visits</li>
          <li>✔ Safe & Confidential Meetings</li>
          <li>✔ Verified Profiles</li>
          <li>✔ Quick Response on Call & WhatsApp</li>
        </ul>
      </div>

      {/* DESCRIPTION */}
      <p className="text-gray-400 text-sm">
        Our escort service in {clean} is designed to provide you with a safe and
        enjoyable experience. Whether you're looking for companionship for a
        private meeting or a special occasion, we are here to assist you.
      </p>

      <img
        src="/images/2.jpeg"
        alt={`${clean} call girls service`}
        className="rounded-xl mt-4 w-full"
      />

      {/* CTA BUTTONS */}
      <div className="flex gap-3">
        <a
          href="tel:8709045174"
          className="w-1/2 bg-green-600 text-center py-3 rounded-xl font-semibold"
        >
          Call Now
        </a>

        <a
          href="https://wa.me/8709045174"
          className="w-1/2 bg-white text-black text-center py-3 rounded-xl font-semibold"
        >
          WhatsApp
        </a>
      </div>

      {/* EXTRA TEXT (SEO BOOST) */}

      <p className="text-gray-500 text-sm">
        {areaContent[`${clean} escort service`] ||
          `Trusted escort service available across ${clean} with full privacy and quick response.`}
      </p>

      {/* 🔥 Internal Links */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-2">Explore More Areas</h2>

        <div className="space-y-1 text-sm">
          {/* 🔥 Service Type Links (VERY IMPORTANT SEO) */}
          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-2">Explore Services</h2>

            <div className="space-y-1 text-sm">
              <a
                href={`/${raw.replace("escort-service", "call-girls")}`}
                className="block text-green-400"
              >
                {clean} Call Girls
              </a>

              <a
                href={`/${raw.replace("escort-service", "independent-escort")}`}
                className="block text-green-400"
              >
                {clean} Independent Escort
              </a>

              <a
                href={`/${raw.replace("escort-service", "vip-escort")}`}
                className="block text-green-400"
              >
                {clean} VIP Escort
              </a>
            </div>
          </div>

          <a href="/hyderabad" className="block text-green-400">
            Hyderabad Escort Service
          </a>

          <a href="/gachibowli-escort-service" className="block text-green-400">
            Gachibowli Escort Service
          </a>

          <a href="/madhapur-escort-service" className="block text-green-400">
            Madhapur Escort Service
          </a>

          <a href="/kondapur-escort-service" className="block text-green-400">
            Kondapur Escort Service
          </a>

          <a
            href="/jubilee-hills-escort-service"
            className="block text-green-400"
          >
            Jubilee Hills Escort Service
          </a>
          <a
            href="/banjara-hills-escort-service"
            className="block text-green-400"
          >
            Banjara Hills Escort Service
          </a>
          <a
            href="/hitech-city-escort-service"
            className="block text-green-400"
          >
            Hitech City Escort Service
          </a>
        </div>
      </div>
    </div>
  );
  
}