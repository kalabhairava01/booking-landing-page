export function generateMetadata({ params }) {
const raw = params?.area || "";

const area = raw.replace("-escort-service", "").replace(/-/g, " ");

  return {
    title: `${area} Escort Service | Call Now`,
    description: `Best escort service in ${area}. Available 24/7. Call and WhatsApp now.`,
  };
}
export default function AreaPage({ params }) {
  const raw = params?.area || "";

  const area = raw.replace("-escort-service", "").replace(/-/g, " ");

  return (
    <div className="bg-black text-white min-h-screen p-4 space-y-6">
      {/* TITLE */}
      <h1 className="text-2xl font-bold text-green-400">
        {area} Escort Service
      </h1>

      {/* INTRO */}
      <p className="text-gray-400 text-sm">
        Looking for a reliable and confidential escort service in {area}? We
        provide premium companionship services with quick response, ensuring
        privacy, comfort, and satisfaction.
      </p>

      {/* INFO BOX */}
      <div className="bg-gray-900 p-4 rounded-xl">
        <h2 className="font-semibold mb-2">Our Services in {area}</h2>

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
        Our escort service in {area} is designed to provide you with a safe and
        enjoyable experience. Whether you're looking for companionship for a
        private meeting or a special occasion, we are here to assist you.
      </p>

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
        We are one of the most trusted escort services in {area}, offering
        high-quality companionship with complete privacy. Contact us now for
        instant booking and premium experience.
      </p>
    </div>
  );
  
}