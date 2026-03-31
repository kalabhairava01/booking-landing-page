export default function Home() {
  const images = [
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/4.jpg",
    "/images/5.jpg",
  ];

  return (
    <div className="bg-black text-white min-h-screen pt-16 p-4 pb-20 max-w-md mx-auto">
      <h1 className="text-2xl font-bold leading-snug">
        Personal Service in Hyderabad
      </h1>
      <p className="text-gray-600">
        Available in Hyderabad including Gachibowli, Madhapur, and nearby areas.
        Call or WhatsApp now for quick response.
      </p>
      <a href="/hyderabad" className="text-green-600 underline">
        View Hyderabad Services
      </a>
      <h2 className="text-xl font-semibold mt-6">Areas we serve</h2>

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

      <div className="bg-green-50 p-4 rounded-xl text-center">
        <p className="text-sm text-gray-700">
          Available now for calls and WhatsApp. Quick response guaranteed.
        </p>
      </div>

      {/* Services */}
      <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition">
        <h2 className="font-semibold text-lg mb-2">Services</h2>
        <ul className="list-disc pl-5 text-gray-600 space-y-1">
          <li>Private meet</li>
          <li>Call service</li>
          <li>Messaging</li>
        </ul>
      </div>

      {/* 🔥 Gallery */}

      <div>
        <h2 className="text-lg font-semibold mb-3">Gallery</h2>

        <div className="grid grid-cols-2 gap-3">
          <img
            src="/images/1.jpg"
            className="rounded-xl w-full h-40 object-cover"
          />
          <img
            src="/images/2.jpg"
            className="rounded-xl w-full h-40 object-cover"
          />
          <img
            src="/images/5.jpg"
            className="rounded-xl w-full h-40 object-cover"
          />
          <img
            src="/images/4.jpg"
            className="rounded-xl w-full h-40 object-cover"
          />
        </div>
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
    </div>
  );
}
