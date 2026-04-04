const baseUrl = "https://booking-landing-page-psi.vercel.app";

const areas = [
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

const types = [
  "escort-service",
  "call-girls",
  "independent-escort",
  "vip-escort",
];

const urls = [];

areas.forEach((area) => {
  types.forEach((type) => {
    urls.push({
      url: `${baseUrl}/${area}-${type}`,
      lastModified: new Date(),
    });
  });
});



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









