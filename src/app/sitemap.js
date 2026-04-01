const baseUrl = "https://booking-landing-page-psi.vercel.app";

const areas = [
  "gachibowli-escort-service",
  "madhapur-escort-service",
  "kondapur-escort-service",
  "banjara-hills-escort-service",
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

export default function sitemap() {
  const baseUrl = "https://booking-landing-page-psi.vercel.app";

  return [
    {
      url: `${baseUrl}/hyderabad`,
      lastModified: new Date(),
    },
    ...areas.map((area) => ({
      url: `${baseUrl}/${area}`,
      lastModified: new Date(),
    })),
  ];
}









