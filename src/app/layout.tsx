import "~/styles/globals.css";
import Navbar from '~/components/navbar'
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

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
      <body className="relative min-h-screen">
        <header className="absolute top-0 left-0 right-0 z-50">
          <Navbar />
        </header>
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}