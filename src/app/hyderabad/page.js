export const metadata = {
  title: "Personal Service in Hyderabad",
  description:
    "Professional personal service available in Hyderabad. Call and WhatsApp now.",
};
const areas = [
  "gachibowli-escort-service",
  "madhapur-escort-service",
  "kondapur-escort-service",
  "banjara-hills-escort-service",
  "jubilee-hills-escort-service",
  "gachibowli-escort-service",
  "madhapur-escort-service",
  "kondapur-escort-service",
  "banjara-hills-escort-service",
  "jubilee-hills-escort-service",
  "hitech-city-escort-service",
  "begumpet-escort-service",
  "ameerpet-escort-service",
  "secunderabad-escort-service",
  "kukatpally-escort-service",
  "manikonda-escort-service",
  "nallagandla-escort-service",
  "miyapur-escort-service",
  "uppal-escort-service",
  "lb-nagar-escort-service",
  "dilsukhnagar-escort-service",
  "charminar-escort-service",
  "abids-escort-service",
  "tolichowki-escort-service",
  "mehdipatnam-escort-service",
];

export default function Hyderabad() {
  return (
    <div>
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Hyderabad Escort Service </h1>
        <p>
          We provide premium escort service in Hyderabad including Gachibowli,
          Madhapur, Kondapur and nearby areas. Available 24/7 with quick
          response.
        </p>

        <p className="text-gray-600">
          Available in Hyderabad for calls and messaging. Quick response and
          private service.
        </p>
      </div>

      {/* AREA LINKS */}
      <h2 className="text-lg font-semibold mt-6">Areas We Serve</h2>

      <div className="grid grid-cols-2 gap-2 mt-2">
        {areas.map((area) => (
          <a key={area} href={`/${area}`} className="text-green-400">
            {area.replace("-escort-service", "").toUpperCase()} Service
          </a>
        ))}
      </div>
    </div>
  );
}
