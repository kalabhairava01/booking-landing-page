import "./globals.css";

export const metadata = {
  title: "My Service | Personal Service",
  description:
    "Professional personal service available for calls and messaging. Fast, private, and reliable.",

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
  const phone = "916203501601";

  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        {/* Header */}
        <header className="p-4 bg-white shadow-sm sticky top-0 z-50">
          <div className="flex justify-between items-center max-w-md mx-auto">
            <h2 className="text-lg font-bold tracking-wide">My Service</h2>

            <nav className="flex gap-4 text-sm font-medium">
              <a href="/" className="hover:text-green-600 transition ">
                Home
              </a>
              <a href="/about" className="hover:text-green-600 transition">
                About
              </a>
              <a href="/services" className="hover:text-green-600">
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
        </div>
      </body>
    </html>
  );
}
