export default function Home() {
  const images = ["/images/1.jpg", "/images/2.jpg", "/images/4.jpg","/images/5.jpg"];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold leading-snug">Welcome</h1>

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
        <h2 className="text-lg font-semibold mb-2 tracking-wide">Gallery</h2>

        <div className="grid grid-cols-2 gap-3">
          {images.map((src, index) => (
            <div key={index} className=" overflow-hidden rounded-xl h-40">
              <img
                src={src}
                alt="gallery"
                className="rounded-xl object-cover 
                w-full h-full transition duration-300 
                hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
