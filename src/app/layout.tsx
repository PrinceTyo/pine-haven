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
    <html lang="en">
      <body className={`${raleway.variable} h-full antialiased`}>
        {/* <Navbar /> */}
        <main>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
