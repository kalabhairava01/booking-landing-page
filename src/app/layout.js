import "./globals.css";

export const metadata = {
  title: "Personal Service in Hyderabad",
  description:
    "Professional personal service available in Hyderabad including Gachibowli, Madhapur, and Banjara Hills. Call and WhatsApp now.",

  keywords: [
    "service in Hyderabad",
    "Hyderabad service",
    "Gachibowli service",
    "Madhapur service",
    "Banjara Hills service"
  ],

  openGraph: {
    title: "My Service",
    description:
      "Professional personal service available for calls and messaging.",
    url: "https://example.com", // change later
    siteName: "My Service",
    images: [
      {
        url: "/images/1.jpg", // use your image
        width: 800,
        height: 600,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  const phone = "918709045174";

  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="I3HNEZOhu5CMtrb7DHHgd5olZThXFqeVoBXC94OnHPg"
        />
      </head>

      <body className="bg-black text-white">
        {/* Header */}

        <header className="p-4 bg-black/90 backdrop-blur border-b border-gray-800 sticky top-0 z-50">
          <div className="flex justify-between items-center max-w-md mx-auto">
            {/* Logo */}
            <h2 className="text-lg font-bold tracking-wide text-green-400">
              My Service
            </h2>

            {/* Navigation */}
            <nav className="flex gap-4 text-sm font-medium text-gray-300">
              <a
                href="/"
                className="hover:text-green-400 transition duration-200"
              >
                Home
              </a>

              <a
                href="/about"
                className="hover:text-green-400 transition duration-200"
              >
                About
              </a>

              <a
                href="/services"
                className="hover:text-green-400 transition duration-200"
              >
                Services
              </a>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-4 max-w-md mx-auto">{children}</main>

        {/* Footer */}
        <footer className="p-4 text-center text-sm text-gray-500 mb-20">
          © 2026 My Service
        </footer>

        {/* Sticky Bottom Bar */}

        <div className="fixed bottom-0 left-0 w-full flex shadow-lg">
          <a
            href={`tel:${phone}`}
            className="w-1/2 text-center py-4 bg-green-600 text-white font-semibold active:scale-95 transition duration-150"
          >
            Call Now
          </a>

          <a
            href={`https://wa.me/${phone}`}
            className="w-1/2 text-center py-4 bg-black text-white font-semibold active:scale-95 transition duration-150"
          >
            WhatsApp
          </a>

          <a
            href="https://wa.me/918709045174"
            className="fixed bottom-20 right-4 z-50"
          >
            <img
              src="images/whatsapp.jpeg"
              className="w-14 h-14 hover:scale-110 transition rounded-2xl"
            />
          </a>
        </div>
      </body>
    </html>
  );
}
