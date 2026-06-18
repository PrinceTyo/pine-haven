import type { Metadata } from "next";
import { Raleway, Geist, Sacramento } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

const sacramento = Sacramento({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sacramento",
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
    <html
      lang="en"
      className={cn("font-sans", geist.variable, sacramento.variable)}
    >
      <body className={`${raleway.variable} h-full antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
