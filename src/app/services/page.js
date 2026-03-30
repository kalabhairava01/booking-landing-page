export default function Services() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Services</h1>

      <p className="text-gray-600">
        I offer a range of personal services designed for comfort and
        satisfaction.
      </p>

      {/* Service Cards */}
      <div className="space-y-4">
        <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition">
          <h2 className="font-semibold">Private Meet</h2>
          <p className="text-gray-600 text-sm">
            Comfortable and private meeting experience.
          </p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition">
          <h2 className="font-semibold">Call Service</h2>
          <p className="text-gray-600 text-sm">
            Direct communication via phone call.
          </p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition">
          <h2 className="font-semibold">Messaging</h2>
          <p className="text-gray-600 text-sm">
            Chat and messaging services available anytime.
          </p>
        </div>
      </div>
    </div>
  );
}
