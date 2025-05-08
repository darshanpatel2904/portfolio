import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Darshan Patel | Full Stack Developer | Web3 & AI Specialist",
  description:
    "Building intelligent digital solutions that shape the future. Specialized in Web3 platforms, AI integration, and cloud architecture with a focus on real-world impact.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
