import type { Metadata } from "next";
import { Raleway } from "next/font/google";
// import Navbar from "@/components/navbar/navbar";
// import Footer from "@/components/footer";
import "@/styles/globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home",
  description: "Pine Haven Homestay",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${raleway.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
          {/* <Navbar /> */}
          <main className="bg-gray-50 min-h-screen">{children}</main>
          {/* <Footer /> */}
      </body>
    </html>
  );
}
