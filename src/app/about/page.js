export default function About() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">About</h1>

      <p className="text-gray-600">
        I provide professional personal services with complete privacy and
        comfort.
      </p>

      <div className="bg-white p-4 rounded-xl shadow-sm">
        <h2 className="font-semibold mb-2">Why Choose Me</h2>
        <ul className="list-disc pl-5 text-gray-600 space-y-1">
          <li>Friendly and respectful</li>
          <li>Safe and private experience</li>
          <li>Available for calls and messaging</li>
        </ul>
      </div>
    </div>
  );
}
