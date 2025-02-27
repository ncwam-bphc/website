import "~/styles/globals.css";
import Navbar from "~/components/navbar";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import Providers from "~/components/providers";
import { Analytics } from "@vercel/analytics/react"
// import Footer from "~/components/Footer";

export const metadata: Metadata = {
  title: "NCWAM 2025",
  description: "NCWAM website",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <Analytics/>
      <body className="dark relative min-h-screen">
        <Providers>
          <header className="navbar absolute left-0 right-0 top-0 z-50">
            <Navbar />
          </header>
          {children}
        </Providers>
      </body>
    </html>
  );
}
